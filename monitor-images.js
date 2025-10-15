#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configuration
const DOWNLOADS_DIR = path.join(__dirname, 'public', 'unnamed');
const TARGET_DIR = path.join(__dirname, 'public', 'images');
const PROMPTS_FILE = path.join(__dirname, 'MIDJOURNEY_PROMPTS.md');
const PROCESSED_FILE = path.join(__dirname, '.processed-images.json');

// Extract expected filenames and their prompts from MIDJOURNEY_PROMPTS.md
function extractExpectedFilenamesWithPrompts() {
  const content = fs.readFileSync(PROMPTS_FILE, 'utf8');
  const images = [];

  // Match each filename + prompt block pair using global regex
  const pattern = /\*\*Filename:\*\*\s*`([^`]+)`\s*\n```\s*\n([\s\S]*?)\n```/g;
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const filename = match[1].replace('.jpg', '');
    const prompt = match[2].trim();

    // Extract key phrases from prompt (first phrase with key descriptors)
    const promptWords = prompt
      .toLowerCase()
      .replace(/^[\s\-•]+/, '') // Remove leading dashes/bullets
      .split(/[,\n]/)[0] // Take first phrase before comma or newline
      .replace(/--ar.*$/i, '') // Remove Midjourney parameters
      .replace(/[^\w\s]/g, '') // Remove special chars
      .split(/\s+/)
      .filter(w => w.length > 2 && !['the', 'and', 'with', 'for'].includes(w)); // Skip short/common words

    images.push({
      filename: filename + '.jpg',
      promptKeywords: promptWords,
      fullPrompt: prompt
    });
  }

  return images;
}

// Load/save processed files
function loadProcessed() {
  try {
    if (fs.existsSync(PROCESSED_FILE)) {
      return new Set(JSON.parse(fs.readFileSync(PROCESSED_FILE, 'utf8')));
    }
  } catch (err) {
    console.error('⚠️  Error loading processed files:', err.message);
  }
  return new Set();
}

function saveProcessed(processed) {
  fs.writeFileSync(PROCESSED_FILE, JSON.stringify([...processed], null, 2));
}

// Find matching target filename based on Midjourney filename
function findMatch(mjFilename, expectedImages) {
  const lower = mjFilename.toLowerCase();

  // Remove Midjourney's UUID and file extension
  // Example: "a_cat_sitting_on_a_chair_abc123def456.png" -> "a cat sitting on a chair"
  const cleanName = lower
    .replace(/\.[^.]+$/, '') // Remove extension
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\s+/g, ' '); // Normalize spaces

  let bestMatch = null;
  let bestScore = 0;
  const DEBUG = process.env.DEBUG;

  for (const image of expectedImages) {
    let score = 0;

    // Count how many prompt keywords appear in the Midjourney filename
    for (const keyword of image.promptKeywords) {
      if (cleanName.includes(keyword)) {
        score++;
      }
    }

    // Bonus points for matching filename parts
    const filenameParts = image.filename.replace('.jpg', '').toLowerCase().split('-');
    for (const part of filenameParts) {
      if (part.length > 3 && cleanName.includes(part)) {
        score += 0.5;
      }
    }

    // Need at least 3 keyword matches or 50% of keywords
    const threshold = Math.max(3, image.promptKeywords.length * 0.5);

    if (DEBUG && score >= 2) {
      console.log(`     Testing: ${image.filename} (score: ${score.toFixed(1)}, threshold: ${threshold.toFixed(1)})`);
    }

    if (score >= threshold && score > bestScore) {
      bestScore = score;
      bestMatch = image;
    }
  }

  if (bestMatch) {
    return {
      filename: bestMatch.filename,
      score: bestScore,
      matchedKeywords: bestMatch.promptKeywords.filter(kw => cleanName.includes(kw))
    };
  }

  return null;
}

// Convert and copy image to JPG
function processImage(sourcePath, targetFilename) {
  const targetPath = path.join(TARGET_DIR, targetFilename);
  const ext = path.extname(sourcePath).toLowerCase();

  // Ensure target directory exists
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    // Direct copy
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ Copied: ${targetFilename}`);
  } else if (ext === '.png' || ext === '.webp') {
    // Convert to JPG using sips (macOS)
    exec(`sips -s format jpeg "${sourcePath}" --out "${targetPath}"`, (error) => {
      if (error) {
        console.error(`❌ Error converting ${targetFilename}:`, error.message);
      } else {
        console.log(`✅ Converted: ${targetFilename}`);
      }
    });
  } else {
    console.log(`⚠️  Unsupported format: ${ext}`);
    return false;
  }

  return true;
}

// Scan Downloads for new Midjourney images
function scanDownloads() {
  const expectedImages = extractExpectedFilenamesWithPrompts();
  const processed = loadProcessed();

  console.log(`\n🔍 Scanning for new images...`);
  console.log(`   Expecting ${expectedImages.length} images\n`);

  // Debug: Show first few expected images with keywords
  if (process.env.DEBUG) {
    console.log(`📋 Sample expected images:`);
    expectedImages.slice(0, 3).forEach(img => {
      console.log(`   ${img.filename}: [${img.promptKeywords.slice(0, 5).join(', ')}]`);
    });
    console.log();
  }

  // Check if source directory exists
  if (!fs.existsSync(DOWNLOADS_DIR)) {
    console.log(`⚠️  Source directory not found: ${DOWNLOADS_DIR}`);
    console.log(`   Creating directory...\n`);
    fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
    return;
  }

  const files = fs.readdirSync(DOWNLOADS_DIR);
  const imageFiles = files.filter(f =>
    /\.(jpe?g|png|webp)$/i.test(f) && !processed.has(f)
  );

  if (imageFiles.length === 0) {
    console.log(`💤 No new images found\n`);
    return;
  }

  console.log(`   Found ${imageFiles.length} unprocessed image(s)\n`);

  let newCount = 0;
  const unmatched = [];

  for (const file of imageFiles) {
    if (process.env.DEBUG) {
      console.log(`\n🔎 Processing: ${file.substring(0, 60)}...`);
    }

    const match = findMatch(file, expectedImages);

    if (match) {
      console.log(`📸 ${file.substring(0, 50)}...`);
      console.log(`   → ${match.filename}`);
      console.log(`   ✓ Score: ${match.score.toFixed(1)} | Keywords: ${match.matchedKeywords.slice(0, 5).join(', ')}\n`);

      const sourcePath = path.join(DOWNLOADS_DIR, file);
      const success = processImage(sourcePath, match.filename);

      if (success) {
        processed.add(file);
        newCount++;
      }
    } else {
      if (process.env.DEBUG) {
        console.log(`   ❌ No match found\n`);
      }
      unmatched.push(file);
    }
  }

  // Show unmatched files
  if (unmatched.length > 0) {
    console.log(`❓ ${unmatched.length} unmatched image(s):`);
    for (const file of unmatched.slice(0, 5)) {
      console.log(`   - ${file.substring(0, 60)}...`);
    }
    if (unmatched.length > 5) {
      console.log(`   ... and ${unmatched.length - 5} more`);
    }
    console.log();
  }

  if (newCount > 0) {
    saveProcessed(processed);
    console.log(`✨ Successfully processed ${newCount} image(s)\n`);
  }
}

// Watch mode
function watch() {
  console.log('🎨 North Pro Services - Image Monitor');
  console.log('=====================================');
  console.log(`📂 Source: ${DOWNLOADS_DIR}`);
  console.log(`📂 Target: ${TARGET_DIR}`);
  console.log(`📄 Prompts: MIDJOURNEY_PROMPTS.md\n`);

  // Initial scan
  scanDownloads();

  // Watch Downloads folder
  console.log('👀 Watching for new images... (Ctrl+C to stop)\n');

  let timeout;
  fs.watch(DOWNLOADS_DIR, (eventType, filename) => {
    if (!filename || !/\.(jpe?g|png|webp)$/i.test(filename)) return;

    // Debounce - wait for file to be fully written
    clearTimeout(timeout);
    timeout = setTimeout(scanDownloads, 2000);
  });
}

// CLI
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
📸 Image Monitor - North Pro Services

Watches Downloads folder for Midjourney images and copies them
to /public/images/ with correct filenames from MIDJOURNEY_PROMPTS.md

Usage:
  node monitor-images.js        Watch mode (continuous)
  node monitor-images.js --scan Scan once and exit

The script matches Midjourney filenames (which contain prompt parts)
with expected filenames from MIDJOURNEY_PROMPTS.md
`);
  process.exit(0);
}

if (args.includes('--scan')) {
  scanDownloads();
  process.exit(0);
} else {
  watch();
}

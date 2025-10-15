# North Pro Services - Website

🏢 **Professional cleaning and security services in Frankfurt am Main**

Modern, responsive web presence for North Pro Services including the NorthPatrol App showcase.

## 🌐 Live Demo

The website is ready for deployment to Vercel. Simply:
1. Push this repository to GitHub
2. Import the project in Vercel Dashboard
3. Deploy automatically

**Deployment URL**: Connect your Vercel account to auto-deploy

---

## ⚡ Tech Stack

### Frontend Framework
- **[Next.js 15.5](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/postcss](https://tailwindcss.com/docs/installation/postcss)** - PostCSS plugin
- **Custom design system** - Brand colors & typography

### Hosting & Deployment
- **[Vercel](https://vercel.com/)** - Production hosting
- **Automatic deployments** - Git-based workflow
- **Global CDN** - Fast worldwide delivery

### Development Tools
- **PostCSS** - CSS processing
- **ESM Modules** - Modern JavaScript
- **Git** - Version control

---

## 🎨 Design System

### Color Palette

```css
Primary Colors:
  - Primary:       #2F4D5C (Dark Blue-Gray)
  - Primary Dark:  #2A3D4A (Darker Slate)
  - Primary Light: #758D9D (Cool Gray)

Accent Colors:
  - Accent:        #6B7F8F (Steel Blue)
  - Accent Light:  #758D9D (Light Steel)

Backgrounds:
  - Light Mode:    #F9FAFB (Off-White)
  - Dark Mode:     #0B0E11 (Near Black)
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Style**: Clean, modern, professional

---

## 📁 Project Structure

```
NorthProServices/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles + Tailwind
│   ├── leistungen/              # Services page
│   ├── app/                     # NorthPatrol App page
│   ├── jobs/                    # Careers page
│   ├── kontakt/                 # Contact page
│   ├── styleguide/              # Design system showcase
│   ├── impressum/               # Legal notice
│   └── datenschutz/             # Privacy policy
├── components/                   # React components
│   ├── Navigation.tsx           # Site navigation
│   └── Footer.tsx               # Site footer
├── content/                      # Structured content (JSON)
│   ├── home.json
│   ├── leistungen.json
│   ├── app.json
│   └── jobs.json
├── public/                       # Static assets
│   ├── logos/                   # Brand logos
│   └── images/                  # Hero & feature images
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── postcss.config.mjs            # PostCSS config
└── next.config.ts                # Next.js config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📄 Pages Overview

### 1. Homepage (`/`)
- Hero section with CTAs
- Services overview (4 cards)
- NorthPatrol App teaser
- Customer testimonials
- Contact CTA

### 2. Services (`/leistungen`)
- Detailed service descriptions
- Gebäudereinigung
- Sicherheitsdienste
- Hausmeisterservice
- Sonderreinigungen

### 3. NorthPatrol App (`/app`)
- Digital patrol management
- QR code checkpoints
- Real-time reporting
- Admin dashboard features

### 4. Jobs (`/jobs`)
- Current job openings
- Company benefits
- Online application form

### 5. Contact (`/kontakt`)
- Contact form
- Location information
- Business hours
- Map integration placeholder

### 6. Styleguide (`/styleguide`)
- Color palette showcase
- Typography examples
- Button variants
- Form elements
- Grid system
- Dark/Light mode toggle

---

## 🎯 Features

### ✅ Responsive Design
- Mobile-first approach
- Tablet & desktop optimized
- Flexible grid system

### ✅ Dark Mode Support
- System preference detection
- Manual toggle (styleguide)
- Smooth transitions

### ✅ Performance Optimized
- Static generation
- Optimized images
- Minimal JavaScript
- Fast page loads

### ✅ SEO Ready
- Semantic HTML
- Meta tags configured
- Sitemap ready
- Accessibility focused

### ✅ Type Safe
- Full TypeScript coverage
- Type-checked components
- Enhanced DX

### ✅ Modular Content
- JSON-based content
- Easy to update
- Localization ready

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (when configured)
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add environment variables as needed
NEXT_PUBLIC_SITE_URL=https://northproservices.de
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import in Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Auto-deployments**
   - Every `git push` triggers a new deployment
   - Preview deployments for branches
   - Production deployment from `main`

### Alternative: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `@tailwindcss/postcss` - CSS processing

### Development
- `@types/node` - Node.js types
- `@types/react` - React types
- `@types/react-dom` - React DOM types

---

## 🎨 Customization

### Update Colors
Edit `/app/globals.css`:
```css
@theme {
  --color-primary: #2F4D5C;
  --color-accent: #6B7F8F;
  /* ... */
}
```

### Update Content
Edit JSON files in `/content/`:
- `home.json` - Homepage content
- `leistungen.json` - Services
- `app.json` - NorthPatrol features
- `jobs.json` - Job listings

### Add Pages
Create new folders in `/app/`:
```bash
app/
└── neue-seite/
    └── page.tsx
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

This is a private project for North Pro Services. For changes or updates:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

---

## 📄 License

Proprietary - © 2025 North Pro Services. All rights reserved.

---

## 👨‍💻 Credits

**Developed by:** Studio Sen (Denis)
**Location:** Frankfurt am Main, Germany
**Date:** October 2025

---

## 📞 Support

For technical support or questions about the website:
- **Email:** kontakt@northproservices.de
- **Location:** Frankfurt am Main

---

## 🔄 Version History

### v1.0.0 - October 2025
- ✅ Initial release
- ✅ Homepage with hero & services
- ✅ Services detail page
- ✅ NorthPatrol App showcase
- ✅ Jobs & careers page
- ✅ Contact form
- ✅ Styleguide with design system
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Content JSON structure
- ✅ Ready for Vercel deployment

---

**Built with ❤️ in Frankfurt** 🇩🇪

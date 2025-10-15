# Produktanforderungsdokument (PRD) – North Pro Services Website

## 🔧 Projektüberblick

**Projektname:** North Pro Services Website  
**Ziel:** Erstellung einer modernen, responsiven Webpräsenz für North Pro Services inkl. App-Vorstellung (NorthPatrol)  
**Techstack:** React (Next.js), Tailwind CSS, Vercel Hosting, keine DB, Inhalte als JSON, Locale via JSON vorbereitbar

## 🧱 Architektur

- **Framework:** React (Next.js App Router)
- **Styling:** Tailwind CSS mit eigenem Token-System
- **Komponenten:** Atomic Design-System
- **Hosting:** Vercel
- **Sprachen:** nur Deutsch (lokalisierbar via JSON)
- **Datenhaltung:** Strukturierte `.json` Files im `content/`-Ordner (z. B. `content/home.json`, `content/jobs.json`, `content/app.json`)
- **Logos:** abgelegt unter `/logos` (siehe Zuordnung unten)
- **Bilder:** im Ordner `/images`, Hero-Images für jede Seite

## 🎨 Style Guide / UI

- **Fonts:** Inter (alle Schnitte), Tailwind eingebunden via Google Fonts
- **Farben:** Aus Logo entnommen, bitte 
  - Hauptton, Glacier: #2F4D5C (dunkles Blau-Grau)
  - Akzent, Ice : #758D9D (helleres Eisblau)
  - Weiß / Offwhite: #F9FAFB / #ECEFF1
  - Schwarz: #0B0E11 für Dark Mode
- **Modi:** Dark & Light Mode via Tailwind Plugin

## 📂 Logo-Verwendung

- `wordmark_light.svg` → in vertikaler Navigation
- `logo_dark.svg` → Standardlogo auf hellem Hintergrund
- `logo_light.svg` → Standardlogo auf dunklem Hintergrund
- `logo-n-animate.svg` → Optionale animierte Logovariante
- `wordmark_dark.svg` → Reserve für dunkle Navigation

## 🧪 Demoseite (erste Aufgabe)

Seite `/styleguide` zeigt alle UI-Elemente:

- Farbpalette
- Typografie (h1–h4, Text, Buttons)
- Container + Grid-System
- Buttons / Links / CTA
- Formulareingaben
- Dropdown
- Icons (Material Icons via React)
- Bild-Text-Kombination
- Hero Image oben mit Logo
- Light/Dark Switch

## 🗺️ Sitemap

1. `/` – Startseite
   - Hero mit Slogan & CTA
   - Teaser zur App NorthPatrol
   - 3 Leistungskarten (z. B. Gebäudereinigung, Bewachung, Objektpflege)
   - CTA zu Kontakt
2. `/leistungen` – Leistungen im Detail
   - Liste mit Beschreibungen
   - Optional Bilder oder Icons
3. `/app` – NorthPatrol
   - Beschreibung der App
   - Features (Checkpoints, Protokolle, Live-Übersicht, etc.)
   - Vorteil für Kunden (Transparenz, Sicherheit)
4. `/jobs` – Karriere
   - Stellenausschreibungen
   - Bewerbungsformular
   - Abspeicherung per Supabase geplant (später)
5. `/kontakt` – Kontaktformular
   - Google Maps iframe
   - Formfelder Name, Firma, Telefon, Nachricht
6. `/impressum` + `/datenschutz`

## 📤 Inhalte

Alle Inhalte werden in strukturierter Form als JSON-Dateien gespeichert:  
Beispiel: `content/home.json`, `content/jobs.json`, `content/app.json`, `content/leistungen.json`

Optional: Midjourney-Prompts in `content/prompts.json`

## 🖼️ Bildplatzhalter

Falls kein spezifisches Hero-Bild vorhanden ist, wird `northpatrol.png` verwendet.

## 📩 Später (optional)

- CMS-Backend: kann durch Markdown-Support oder Sanity ersetzt werden
- Internationalisierung via JSON-Locale
- Bewerbungs-Backend via Supabase

---

Erstellt: Okt 2025  
Standort: Frankfurt am Main  
Autor: Denis (Studio Sen)
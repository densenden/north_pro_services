'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';

export default function StyleGuidePage() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Hero Section with Image */}
      <section className="hero-section relative bg-deep-navy text-white section">
        <div className="absolute inset-0 bg-[url('/images/northpatrol.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">North Pro Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-steel">
              Design System & Style Guide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={toggleDarkMode}
                className="btn-primary bg-white text-primary-steel hover:bg-gray-100"
              >
                <Icon name={isDark ? 'light_mode' : 'dark_mode'} className="text-xl mr-2 inline-block" />
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a href="/design-export" className="btn-outline">
                Design Elemente Export
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Farbpalette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="heading-4 mb-4">Primärfarbe</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-primary-steel shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Primary Steel</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#5B74A6</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="heading-4 mb-4">Textfarben</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-deep-navy shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Deep Navy</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#1E3340</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-fog-grey shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Fog Grey</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#6B7280</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="heading-4 mb-4">Hintergründe</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-ice-white border shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Ice White</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#F8F9FA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-background-dark shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Background Dark</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#111827</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-surface-dark shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Surface Dark</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#1F2937</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Typografie</h2>
          <div className="space-y-6">
            <div className="card">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Heading 1</p>
              <h1 className="heading-1">Sicherheit & Sauberkeit</h1>
            </div>
            <div className="card">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Heading 2</p>
              <h2 className="heading-2">Professionelle Lösungen</h2>
            </div>
            <div className="card">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Heading 3</p>
              <h3 className="heading-3">Unsere Leistungen</h3>
            </div>
            <div className="card">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Heading 4</p>
              <h4 className="heading-4">Gebäudereinigung</h4>
            </div>
            <div className="card">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Body Text</p>
              <p className="text-base">
                North Pro Services ist Ihr zuverlässiger Partner für professionelle Reinigungs- und Sicherheitslösungen in Frankfurt am Main. Mit unserem erfahrenen Team bieten wir maßgeschneiderte Dienstleistungen für Unternehmen jeder Größe.
              </p>
            </div>
            <div className="card">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Font Family</p>
              <p className="text-lg font-semibold">Inter - Regular, Medium, Semibold, Bold</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Buttons & CTAs mit 45° Corner Cut</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="heading-4 mb-4">Primary Button</h4>
              <button className="btn-primary w-full">Jetzt anfragen</button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Mit Corner Cut & Hover-Effekt</p>
            </div>
            <div className="card">
              <h4 className="heading-4 mb-4">Secondary Button</h4>
              <button className="btn-secondary w-full">Mehr erfahren</button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Alternative Farbgebung</p>
            </div>
            <div className="card">
              <h4 className="heading-4 mb-4">Outline Button</h4>
              <button className="btn-outline w-full">Kontakt</button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Transparent mit Border</p>
            </div>
          </div>
        </section>

        {/* Cards with Microanimations */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Cards mit Microanimations</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hover über die Cards für Animationen: scale, translate, shadow
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card group hover:-translate-y-2">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="apartment" className="text-6xl text-primary-steel" />
              </div>
              <h4 className="heading-4 mb-2">Gebäudereinigung</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Professionelle Reinigung für Büros und Praxen
              </p>
            </div>
            <div className="card group hover:-translate-y-2">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="shield" className="text-6xl text-primary-steel" />
              </div>
              <h4 className="heading-4 mb-2">Sicherheitsdienste</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Objektschutz und Streifendienst
              </p>
            </div>
            <div className="card group hover:-translate-y-2">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="handyman" className="text-6xl text-primary-steel" />
              </div>
              <h4 className="heading-4 mb-2">Hausmeisterservice</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Wartung und Pflege aus einer Hand
              </p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Formular-Elemente</h2>
          <div className="card max-w-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">E-Mail</label>
                <input
                  type="email"
                  placeholder="ihre@email.de"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Anliegen</label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark">
                  <option>Bitte wählen...</option>
                  <option>Reinigungsanfrage</option>
                  <option>Sicherheitsdienst</option>
                  <option>Hausmeisterservice</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Nachricht</label>
                <textarea
                  rows={4}
                  placeholder="Ihre Nachricht..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="dsgvo" className="w-4 h-4" />
                <label htmlFor="dsgvo" className="text-sm">
                  Ich akzeptiere die Datenschutzbestimmungen
                </label>
              </div>
              <button className="btn-primary w-full">Nachricht senden</button>
            </div>
          </div>
        </section>

        {/* Grid System */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Grid System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-primary-steel text-white p-6 rounded-lg text-center">
                <p className="font-semibold">Grid Column {i}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Icons */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Material Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'apartment', label: 'apartment' },
              { name: 'shield', label: 'shield' },
              { name: 'handyman', label: 'handyman' },
              { name: 'auto_awesome', label: 'auto_awesome' },
              { name: 'smartphone', label: 'smartphone' },
              { name: 'analytics', label: 'analytics' },
              { name: 'notifications', label: 'notifications' },
              { name: 'work', label: 'work' },
              { name: 'dark_mode', label: 'dark_mode' },
              { name: 'light_mode', label: 'light_mode' },
              { name: 'menu', label: 'menu' },
              { name: 'close', label: 'close' },
            ].map((icon, i) => (
              <div key={i} className="card text-center">
                <Icon name={icon.name} className="text-5xl text-primary-steel mb-2" />
                <p className="text-xs text-gray-600 dark:text-gray-400">{icon.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Corner Cut-Off Design */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">45° Corner Cut-Off Design</h2>
          <div className="card mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Alle Cards, Buttons und Hero-Sections haben einen 45° Schnitt unten rechts:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="card bg-primary-steel text-white p-8">
                <h4 className="text-xl font-bold mb-2">Card mit Corner Cut</h4>
                <p>Beachte die abgeschnittene Ecke unten rechts</p>
              </div>
              <div className="hero-section bg-deep-navy text-white p-8">
                <h4 className="text-xl font-bold mb-2">Hero Section Cut</h4>
                <p>Größerer Schnitt für Hero-Bereiche</p>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <button className="btn-primary">Button mit Cut</button>
              <button className="btn-secondary">Secondary Cut</button>
              <button className="btn-outline">Outline Cut</button>
            </div>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-surface-dark rounded-lg">
              <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                .card {'{'}<br />
                &nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% calc(100% - 1.5rem), calc(100% - 1.5rem) 100%, 0 100%);<br />
                {'}'}<br /><br />
                .hero-section {'{'}<br />
                &nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%);<br />
                {'}'}<br /><br />
                .btn-primary, .btn-secondary, .btn-outline {'{'}<br />
                &nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% calc(100% - 0.75rem), calc(100% - 0.75rem) 100%, 0 100%);<br />
                {'}'}
              </p>
            </div>
          </div>
        </section>

        {/* Logo Background Effect */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Logo Background Effect</h2>
          <div className="card">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subtiler Logo-Hintergrund für große Flächen (verwendet in Footer):
            </p>
            <div className="relative bg-deep-navy text-white p-12 overflow-hidden card">
              <div className="logo-background"></div>
              <div className="relative z-10">
                <h3 className="heading-3 mb-4 text-white">North Pro Services</h3>
                <p className="text-gray-300">
                  Ihr Partner für professionelle Reinigungs- und Sicherheitslösungen
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-surface-dark rounded-lg">
              <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                .logo-background {'{'}<br />
                &nbsp;&nbsp;opacity: 0.03;<br />
                &nbsp;&nbsp;background-image: url('/logos/logo-n-animate.svg');<br />
                &nbsp;&nbsp;background-repeat: no-repeat;<br />
                &nbsp;&nbsp;background-position: center;<br />
                &nbsp;&nbsp;background-size: contain;<br />
                {'}'}
              </p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Spacing & Layout</h2>
          <div className="card">
            <div className="space-y-4">
              <div className="bg-primary-steel h-4 rounded"></div>
              <div className="bg-primary-steel h-8 rounded"></div>
              <div className="bg-primary-steel h-12 rounded"></div>
              <div className="bg-primary-steel h-16 rounded"></div>
              <div className="bg-primary-steel h-24 rounded"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function StyleGuidePage() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="heading-1 mb-4">North Pro Services</h1>
              <p className="text-xl">Design System & Style Guide</p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Farbpalette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="heading-4 mb-4">Primärfarben</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-primary shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Primary</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#2F4D5C</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-primary-dark shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Primary Dark</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#2A3D4A</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-primary-light shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Primary Light</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#758D9D</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-4 mb-4">Akzentfarben</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-accent shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Accent</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#6B7F8F</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-accent-light shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Accent Light</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#758D9D</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-4 mb-4">Hintergründe</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-background-light border shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Background Light</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#F9FAFB</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-background-dark shadow-lg"></div>
                  <div>
                    <p className="font-semibold">Background Dark</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#0B0E11</p>
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
          <h2 className="heading-2 mb-8">Buttons & CTAs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="heading-4 mb-4">Primary Button</h4>
              <button className="btn-primary w-full">Jetzt anfragen</button>
            </div>
            <div className="card">
              <h4 className="heading-4 mb-4">Secondary Button</h4>
              <button className="btn-secondary w-full">Mehr erfahren</button>
            </div>
            <div className="card">
              <h4 className="heading-4 mb-4">Outline Button</h4>
              <button className="btn-outline w-full">Kontakt</button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="heading-4 mb-2">Gebäudereinigung</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Professionelle Reinigung für Büros und Praxen
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="heading-4 mb-2">Sicherheitsdienste</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Objektschutz und Streifendienst
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🔧</div>
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
              <div key={i} className="bg-primary-light text-white p-6 rounded-lg text-center">
                <p className="font-semibold">Grid Column {i}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Icons */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {['🏢', '🛡️', '🔧', '✨', '📱', '📊', '🔔', '💼'].map((icon, i) => (
              <div key={i} className="card text-center">
                <div className="text-5xl">{icon}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="heading-2 mb-8">Spacing & Layout</h2>
          <div className="card">
            <div className="space-y-4">
              <div className="bg-primary-light h-4 rounded"></div>
              <div className="bg-primary-light h-8 rounded"></div>
              <div className="bg-primary-light h-12 rounded"></div>
              <div className="bg-primary-light h-16 rounded"></div>
              <div className="bg-primary-light h-24 rounded"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

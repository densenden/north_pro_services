'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    firma: '',
    email: '',
    anliegen: '',
    nachricht: '',
    dsgvo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Nachricht wurde versendet! (Demo)');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative bg-deep-navy text-white section">
        <div className="absolute inset-0 bg-[url('/images/northpatrol.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-1 mb-6 text-white">Kontaktieren Sie uns</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-steel">
            Wir freuen uns auf Ihre Anfrage. Ob Projekt, Dauerauftrag oder Job – sprechen Sie mit uns!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-ice-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-6">Senden Sie uns eine Nachricht</h2>
              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Firma (optional)</label>
                    <input
                      type="text"
                      value={formData.firma}
                      onChange={(e) => setFormData({ ...formData, firma: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                      placeholder="Firmenname"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">E-Mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Anliegen *</label>
                    <select
                      required
                      value={formData.anliegen}
                      onChange={(e) => setFormData({ ...formData, anliegen: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="reinigung">Reinigungsanfrage</option>
                      <option value="sicherheit">Sicherheitsdienst</option>
                      <option value="hausmeister">Hausmeisterservice</option>
                      <option value="app">NorthPatrol App</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Nachricht *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                      placeholder="Ihre Nachricht..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="dsgvo"
                      required
                      checked={formData.dsgvo}
                      onChange={(e) => setFormData({ ...formData, dsgvo: e.target.checked })}
                      className="mt-1 w-4 h-4"
                    />
                    <label htmlFor="dsgvo" className="text-sm text-gray-600 dark:text-gray-300">
                      Ich akzeptiere die{' '}
                      <a href="/datenschutz" className="text-primary-steel hover:underline">
                        Datenschutzbestimmungen
                      </a>{' '}
                      und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-3 mb-6">Kontaktinformationen</h2>
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <Icon name="location_on" className="text-6xl text-primary-steel" />
                    <div>
                      <h3 className="heading-4 mb-2">Standort</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Himmelweiler 7/1<br />
                        89081 Ulm<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <Icon name="email" className="text-6xl text-primary-steel" />
                    <div>
                      <h3 className="heading-4 mb-2">E-Mail</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        kontakt@northproservices.de
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <Icon name="smartphone" className="text-6xl text-primary-steel" />
                    <div>
                      <h3 className="heading-4 mb-2">Telefon</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        +49 (0) 69 XXX XXXX
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <Icon name="schedule" className="text-6xl text-primary-steel" />
                    <div>
                      <h3 className="heading-4 mb-2">Geschäftszeiten</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Montag - Freitag: 8:00 - 18:00 Uhr<br />
                        Samstag: 9:00 - 14:00 Uhr<br />
                        Sonntag: geschlossen
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 card bg-gradient-to-br from-cool-slate to-fog-grey text-white">
                <h3 className="heading-4 mb-4">Schnelle Anfrage?</h3>
                <p className="mb-4">
                  Für dringende Anfragen erreichen Sie uns auch direkt per Telefon oder E-Mail.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+4969XXXXXXX"
                    className="bg-white text-primary-steel font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    📞 Jetzt anrufen
                  </a>
                  <a
                    href="mailto:kontakt@northproservices.de"
                    className="bg-white/20 backdrop-blur font-semibold py-3 px-6 rounded-lg hover:bg-white/30 transition-colors text-center"
                  >
                    ✉️ E-Mail schreiben
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white dark:bg-surface-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-8">Unser Standort</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">
              🗺️ Google Maps Integration hier einfügen
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function JobsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    dsgvo: false,
  });

  const jobs = [
    {
      title: 'Reinigungskraft',
      location: 'Frankfurt am Main',
      type: 'Teilzeit / Vollzeit',
      description: 'Wir suchen zuverlässige Reinigungskräfte für verschiedene Objekte in Frankfurt.',
      requirements: [
        'Zuverlässigkeit und Pünktlichkeit',
        'Sorgfältige Arbeitsweise',
        'Deutschkenntnisse von Vorteil',
        'Erfahrung wünschenswert',
      ],
    },
    {
      title: 'Objektschützer (m/w/d)',
      location: 'Frankfurt & Umgebung',
      type: 'Vollzeit',
      description: 'Für unseren Sicherheitsdienst suchen wir geschulte Objektschützer.',
      requirements: [
        '§34a Sachkundeprüfung erforderlich',
        'Einwandfreies Führungszeugnis',
        'Teamfähigkeit und Zuverlässigkeit',
        'Schichtbereitschaft',
      ],
    },
    {
      title: 'Hausmeister (m/w/d)',
      location: 'Frankfurt am Main',
      type: 'Vollzeit',
      description: 'Für mehrere Wohnanlagen suchen wir erfahrene Hausmeister.',
      requirements: [
        'Handwerkliches Geschick',
        'Führerschein Klasse B',
        'Selbstständige Arbeitsweise',
        'Technisches Verständnis',
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Bewerbung wurde versendet! (Demo)');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white section">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">Werde Teil von North Pro Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Wir suchen Menschen mit Verantwortung & Teamgeist
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Offene Stellen</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="heading-3 text-primary mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏰ {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Anforderungen:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="text-primary mt-1">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#bewerbung" className="btn-primary inline-block">
                  Jetzt bewerben
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white dark:bg-surface-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Was wir bieten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💰', title: 'Faire Bezahlung', text: 'Leistungsgerechte Vergütung' },
              { icon: '📅', title: 'Flexibilität', text: 'Familienfreundliche Arbeitszeiten' },
              { icon: '🎓', title: 'Weiterbildung', text: 'Schulungen und Entwicklung' },
              { icon: '🤝', title: 'Teamgeist', text: 'Kollegiales Arbeitsklima' },
            ].map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="heading-4 mb-2 text-primary">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="bewerbung" className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-2 text-center mb-8">Bewerbungsformular</h2>
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
                    placeholder="Ihr vollständiger Name"
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
                  <label className="block text-sm font-semibold mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                    placeholder="+49 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Position *</label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="reinigung">Reinigungskraft</option>
                    <option value="sicherheit">Objektschützer</option>
                    <option value="hausmeister">Hausmeister</option>
                    <option value="initiativ">Initiativbewerbung</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Nachricht *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-surface-dark"
                    placeholder="Erzählen Sie uns etwas über sich und Ihre Motivation..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="dsgvo-jobs"
                    required
                    checked={formData.dsgvo}
                    onChange={(e) => setFormData({ ...formData, dsgvo: e.target.checked })}
                    className="mt-1 w-4 h-4"
                  />
                  <label htmlFor="dsgvo-jobs" className="text-sm text-gray-600 dark:text-gray-300">
                    Ich akzeptiere die Datenschutzbestimmungen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Bewerbung absenden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Initiativbewerbung */}
      <section className="section bg-gradient-to-r from-accent to-accent-light text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ihre Position ist nicht dabei?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Senden Sie uns eine Initiativbewerbung – wir freuen uns auf Ihre Kontaktaufnahme!
          </p>
          <a href="#bewerbung" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Initiativbewerbung senden
          </a>
        </div>
      </section>
    </div>
  );
}

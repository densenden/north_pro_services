export default function AppPage() {
  const features = [
    {
      icon: '📍',
      title: '20 Checkpoints mit QR-Codes',
      description: 'Definierte Kontrollpunkte im gesamten Objekt',
    },
    {
      icon: '📊',
      title: 'Admin-Dashboard',
      description: 'Übersichtliche Auswertungen und Berichte',
    },
    {
      icon: '🔔',
      title: 'Echtzeit-Benachrichtigungen',
      description: 'Sofortige Meldung bei Abweichungen',
    },
    {
      icon: '✅',
      title: 'Checklisten',
      description: 'Strukturierte Kontrollen für jeden Checkpoint',
    },
    {
      icon: '🔒',
      title: 'Datenschutzkonform',
      description: 'DSGVO-konforme Datenspeicherung',
    },
    {
      icon: '📱',
      title: 'Mobile & Desktop',
      description: 'Zugriff von überall und jedem Gerät',
    },
  ];

  const benefits = [
    {
      title: 'Transparenz',
      description: 'Vollständige Dokumentation aller Rundgänge',
      icon: '👁️',
    },
    {
      title: 'Effizienz',
      description: 'Schnellere und präzisere Kontrollabläufe',
      icon: '⚡',
    },
    {
      title: 'Qualitätssicherung',
      description: 'Lückenlose Nachvollziehbarkeit',
      icon: '🎯',
    },
    {
      title: 'Compliance',
      description: 'Erfüllung aller Dokumentationspflichten',
      icon: '📋',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-accent-light text-white section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-6">📱</div>
            <h1 className="heading-1 mb-6">NorthPatrol App</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Die digitale Lösung für Ihre Kontrollrundgänge
            </p>
            <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
              Mit QR-Code-Scans, Checklisten & Echtzeitberichten sichern Sie Qualität & Transparenz bei jedem Rundgang.
            </p>
            <button className="btn-primary bg-white text-primary hover:bg-gray-100">
              Demo anfragen
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">So funktioniert's</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="heading-4 mb-3">QR-Code scannen</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mitarbeiter scannen QR-Codes an jedem Checkpoint während des Rundgangs
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="heading-4 mb-3">Checkliste ausfüllen</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dokumentation von Kontrollen, Auffälligkeiten und erforderlichen Maßnahmen
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="heading-4 mb-3">Echtzeit-Auswertung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatische Berichte und Benachrichtigungen im Admin-Dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white dark:bg-surface-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Funktionen im Überblick</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card group hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="heading-4 mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Perfekt geeignet für</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🏢', title: 'Bürogebäude', text: 'Regelmäßige Sicherheitskontrollen' },
              { icon: '🏥', title: 'Gesundheitseinrichtungen', text: 'Hygiene- und Sicherheitsprotokolle' },
              { icon: '🏭', title: 'Produktionsstätten', text: 'Arbeitssicherheit und Compliance' },
              { icon: '🏪', title: 'Einzelhandel', text: 'Laden- und Objektschutz' },
            ].map((useCase, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="text-5xl">{useCase.icon}</div>
                <div>
                  <h3 className="heading-4 mb-2 text-primary">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{useCase.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Bereit für digitale Rundgänge?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fordern Sie noch heute eine kostenlose Demo der NorthPatrol App an und überzeugen Sie sich selbst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Demo anfragen
            </a>
            <a href="/kontakt" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Mehr Informationen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 animate-fade-in">
              Sicherheit & Sauberkeit für höchste Ansprüche
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              North Pro Services – Ihr Partner für professionelle Reinigungs- und Sicherheitslösungen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary">
                Jetzt unverbindlich anfragen
              </Link>
              <Link href="/leistungen" className="btn-outline bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-primary">
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" className="dark:fill-background-dark"/>
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏢',
                title: 'Gebäudereinigung',
                description: 'Professionelle Reinigung für Büros, Praxen und Objekte – individuell planbar',
              },
              {
                icon: '🛡️',
                title: 'Sicherheitsdienste',
                description: 'Objektschutz, Doorman, Streifendienst – geschult & zuverlässig',
              },
              {
                icon: '🔧',
                title: 'Hausmeisterservice',
                description: 'Wartung, Pflege, Kontrolle – aus einer Hand',
              },
              {
                icon: '✨',
                title: 'Sonderreinigung',
                description: 'Baureinigung, Glasreinigung, Desinfektion – professionell ausgeführt',
              },
            ].map((service, index) => (
              <div key={index} className="card group hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="heading-4 mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Teaser - NorthPatrol */}
      <section className="section bg-gradient-to-r from-accent to-accent-light text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Rundgänge smart verwalten – mit der NorthPatrol App</h2>
            <p className="text-xl mb-8 text-gray-100">
              Kontrollgänge mit QR-Code-Checkpoints, Echtzeitberichte & Auswertungen.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '📱', text: '20 Checkpoints mit QR-Codes' },
                { icon: '📊', text: 'Admin-Dashboard mit Auswertungen' },
                { icon: '🔔', text: 'Benachrichtigung bei Abweichungen' },
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <p className="font-semibold">{feature.text}</p>
                </div>
              ))}
            </div>
            <Link href="/app" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Mehr erfahren über NorthPatrol
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white dark:bg-surface-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Was unsere Kunden sagen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Zuverlässiger Service, immer pünktlich und gründlich. Sehr empfehlenswert!',
                author: 'Geschäftsführer, Frankfurt',
              },
              {
                quote: 'Die NorthPatrol App hat unsere Sicherheitsrundgänge revolutioniert. Transparenz pur!',
                author: 'Facility Manager, Eschborn',
              },
              {
                quote: 'Professionelles Team, faire Preise. Wir sind sehr zufrieden mit der Zusammenarbeit.',
                author: 'Praxisleitung, Bad Homburg',
              },
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">{testimonial.quote}</p>
                <p className="font-semibold text-primary">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary dark:bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Lassen Sie uns sprechen.</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute Ihr Beratungsgespräch.
          </p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Termin vereinbaren
          </Link>
        </div>
      </section>
    </div>
  );
}

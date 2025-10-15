import Link from 'next/link';
import Icon from '@/components/Icon';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative bg-deep-navy text-white section">
        <div className="absolute inset-0 bg-[url('/images/hero-home.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Sicherheit & Sauberkeit für höchste Ansprüche
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-steel">
              North Pro Services – Ihr Partner für professionelle Reinigungs- und Sicherheitslösungen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary bg-white text-deep-navy hover:bg-gray-100">
                Jetzt unverbindlich anfragen
              </Link>
              <Link href="/leistungen" className="btn-outline">
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-ice-white dark:bg-background-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                iconName: 'apartment',
                title: 'Gebäudereinigung',
                description: 'Professionelle Reinigung für Büros, Praxen und Objekte',
                image: '/images/service-cleaning.jpg'
              },
              {
                iconName: 'shield',
                title: 'Sicherheitsdienste',
                description: 'Objektschutz, Doorman und Streifendienst',
                image: '/images/service-security.jpg'
              },
              {
                iconName: 'handyman',
                title: 'Hausmeisterservice',
                description: 'Wartung, Pflege und Kontrolle aus einer Hand',
                image: '/images/service-facility.jpg'
              },
              {
                iconName: 'auto_awesome',
                title: 'Sonderreinigung',
                description: 'Baureinigung, Glasreinigung und Desinfektion',
                image: '/images/service-special.jpg'
              },
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-navy/95"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-3">
                      <Icon name={service.iconName} className="text-5xl text-white drop-shadow-lg" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-ice-white text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Teaser - NorthPatrol */}
      <section className="section bg-gradient-to-r from-cool-slate to-fog-grey text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Rundgänge smart verwalten – mit der NorthPatrol App</h2>
            <p className="text-xl mb-8 text-gray-100">
              Kontrollgänge mit QR-Code-Checkpoints, Echtzeitberichte & Auswertungen.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { iconName: 'smartphone', text: '20 Checkpoints mit QR-Codes' },
                { iconName: 'analytics', text: 'Admin-Dashboard mit Auswertungen' },
                { iconName: 'notifications', text: 'Benachrichtigung bei Abweichungen' },
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="mb-2"><Icon name={feature.iconName} className="text-5xl" /></div>
                  <p className="font-semibold">{feature.text}</p>
                </div>
              ))}
            </div>
            <Link href="/app" className="btn-primary bg-white text-primary-steel hover:bg-gray-100">
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
                <div className="text-4xl text-primary-steel mb-4">"</div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">{testimonial.quote}</p>
                <p className="font-semibold text-primary-steel">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary-steel dark:bg-primary-steel-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Lassen Sie uns sprechen.</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute Ihr Beratungsgespräch.
          </p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary-steel hover:bg-gray-100">
            Termin vereinbaren
          </Link>
        </div>
      </section>
    </div>
  );
}

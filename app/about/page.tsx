import Link from 'next/link';
import Icon from '@/components/Icon';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative bg-deep-navy text-white section">
        <div className="absolute inset-0 bg-[url('/images/northpatrol.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-1 mb-6 text-white">Wer wir sind.</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-steel">
            North Pro Services steht für professionelle Gebäudereinigung und Sicherheitsdienstleistungen aus Ulm.
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="section bg-ice-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="heading-2 mb-8">Unser Unternehmen</h2>
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  North Pro Services wurde mit dem Ziel gegründet, Unternehmen und Institutionen in Ulm und Umgebung durch zuverlässige Dienstleistungen zu unterstützen. Wir verstehen uns als Partner, der mit Verantwortung, Präzision und Diskretion arbeitet – jeden Tag, in jedem Objekt.
                </p>
                <p>
                  Unter der Leitung von Pierre Fastrich haben wir uns zu einem vertrauenswürdigen Anbieter für Gebäudereinigung, Sicherheitsdienste und Hausmeisterleistungen entwickelt. Unser Team besteht aus geschulten Fachkräften, die mit Sorgfalt und Engagement an jedem Projekt arbeiten.
                </p>
                <p>
                  Wir setzen auf transparente Kommunikation, faire Konditionen und langfristige Partnerschaften. North Pro Services ist mehr als ein Dienstleister – wir sind Teil Ihres täglichen Betriebs und tragen aktiv zu einem sauberen, sicheren und gepflegten Umfeld bei.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-white dark:bg-surface-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-12 text-center">Unsere Philosophie</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="mb-4">
                  <Icon name="handshake" className="text-6xl text-primary-steel" />
                </div>
                <h3 className="heading-4 mb-3">Teamgeist</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Wir arbeiten als ein Team – intern wie auch mit unseren Kunden. Nur gemeinsam erreichen wir nachhaltige Ergebnisse.
                </p>
              </div>

              <div className="card text-center">
                <div className="mb-4">
                  <Icon name="verified" className="text-6xl text-primary-steel" />
                </div>
                <h3 className="heading-4 mb-3">Qualität</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Höchste Standards in allen Bereichen – von der Reinigung bis zur Sicherheit. Qualität ist kein Zufall, sondern unser Anspruch.
                </p>
              </div>

              <div className="card text-center">
                <div className="mb-4">
                  <Icon name="lock" className="text-6xl text-primary-steel" />
                </div>
                <h3 className="heading-4 mb-3">Diskretion</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Vertrauen ist die Basis unserer Arbeit. Wir behandeln jedes Objekt und jede Information mit größter Vertraulichkeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location - Ulm */}
      <section className="section bg-gradient-to-br from-primary-steel to-cool-slate text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6 text-white">Standort Ulm</h2>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Mitten in Baden-Württemberg gelegen, ist Ulm unser Heimathafen und Ausgangspunkt für alle Dienstleistungen.
              Von hier aus betreuen wir Kunden in der gesamten Region – schnell, verlässlich und mit lokalem Know-how.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Icon name="location_on" className="text-5xl" />
                <div className="text-left">
                  <p className="font-semibold text-lg">North Pro Services GmbH</p>
                  <p className="text-gray-200">Himmelweiler 7/1</p>
                  <p className="text-gray-200">89081 Ulm</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">
                🗺️ Google Maps Integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-ice-white dark:bg-background-dark">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Lernen Sie uns kennen</h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Sie haben Fragen oder möchten mehr über unsere Dienstleistungen erfahren?
            Wir freuen uns auf Ihre Kontaktaufnahme.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}

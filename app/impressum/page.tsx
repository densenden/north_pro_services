export default function ImpressumPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1">Impressum</h1>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="section bg-ice-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto card">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="heading-3 mb-4">Angaben gemäß § 5 TMG</h2>

              <p className="mb-6">
                <strong>North Pro Services</strong><br />
                Himmelweiler 7/1<br />
                89081 Ulm<br />
                Deutschland
              </p>

              <h3 className="heading-4 mb-3 mt-8">Vertreten durch</h3>
              <p className="mb-6">
                Pierre Fastrich<br />
                Geschäftsführer
              </p>

              <h3 className="heading-4 mb-3 mt-8">Kontakt</h3>
              <p className="mb-6">
                <strong>Telefon:</strong> 0731 / 8507 6265<br />
                <strong>E-Mail:</strong> info@northproservices.de
              </p>

              <h3 className="heading-4 mb-3 mt-8">Registereintrag</h3>
              <p className="mb-6">
                <strong>Eintragung im Handelsregister:</strong><br />
                Registergericht: [Amtsgericht]<br />
                Registernummer: [HRB XXXXX]
              </p>

              <h3 className="heading-4 mb-3 mt-8">Umsatzsteuer-ID</h3>
              <p className="mb-6">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                [DE XXX XXX XXX]
              </p>

              <h3 className="heading-4 mb-3 mt-8">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
              <p className="mb-6">
                [Sofern zutreffend]
              </p>

              <h3 className="heading-4 mb-3 mt-8">EU-Streitschlichtung</h3>
              <p className="mb-6">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-steel hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h3 className="heading-4 mb-3 mt-8">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
              <p className="mb-6">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h3 className="heading-4 mb-3 mt-8">Haftung für Inhalte</h3>
              <p className="mb-6">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="heading-4 mb-3 mt-8">Haftung für Links</h3>
              <p className="mb-6">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="heading-4 mb-3 mt-8">Urheberrecht</h3>
              <p className="mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

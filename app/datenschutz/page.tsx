export default function DatenschutzPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1">Datenschutzerklärung</h1>
        </div>
      </section>

      {/* Datenschutz Content */}
      <section className="section bg-ice-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto card">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="heading-3 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="heading-4 mb-3 mt-6">Allgemeine Hinweise</h3>
              <p className="mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="heading-4 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
              <p className="mb-6">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h2 className="heading-3 mb-4 mt-8">2. Hosting</h2>
              <p className="mb-6">
                Diese Website wird bei Vercel gehostet. Der Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              </p>

              <h2 className="heading-3 mb-4 mt-8">3. Allgemeine Hinweise und Pflicht­informationen</h2>

              <h3 className="heading-4 mb-3 mt-6">Datenschutz</h3>
              <p className="mb-6">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="heading-4 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-6">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>North Pro Services</strong><br />
                Himmelweiler 7/1<br />
                89081 Ulm<br /><br />
                Telefon: 0731 / 8507 6265<br />
                E-Mail: info@northproservices.de
              </p>

              <h2 className="heading-3 mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>

              <h3 className="heading-4 mb-3 mt-6">Kontaktformular</h3>
              <p className="mb-6">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="heading-4 mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="mb-6">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>

              <h2 className="heading-3 mb-4 mt-8">5. Ihre Rechte</h2>
              <p className="mb-6">
                Sie haben folgende Rechte:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Recht auf Auskunft über Ihre bei uns gespeicherten Daten</li>
                <li>Recht auf Berichtigung unrichtiger Daten</li>
                <li>Recht auf Löschung Ihrer Daten</li>
                <li>Recht auf Einschränkung der Datenverarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht gegen die Verarbeitung</li>
              </ul>

              <h2 className="heading-3 mb-4 mt-8">6. Analyse-Tools und Tools von Dritt­anbietern</h2>
              <p className="mb-6">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
              </p>

              <h2 className="heading-3 mb-4 mt-8">7. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="mb-6">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <div className="bg-cool-slate/10 dark:bg-cool-slate/20 border-l-4 border-accent p-4 mt-8 rounded">
                <p className="text-sm">
                  <strong>Stand:</strong> Oktober 2025<br />
                  Für weitere Fragen zum Datenschutz kontaktieren Sie uns gerne über unser{' '}
                  <a href="/kontakt" className="text-primary-steel hover:underline">Kontaktformular</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

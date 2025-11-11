import Icon from '@/components/Icon';

export default function LeistungenPage() {
  const services = [
    {
      id: 'reinigung',
      iconName: 'apartment',
      title: 'Reinigung',
      description: 'Gründliche Reinigung für Büros, Praxen, Objekte – individuell planbar.',
      image: '/images/detail-office-cleaning.jpg',
      features: [
        {
          name: 'Büro- & Praxisreinigung',
          description: 'Sorgt für ein sauberes, angenehmes Arbeitsumfeld. Dazu gehören die Reinigung von Böden, Schreibtischen, Bildschirmen, Telefonen, Küchenbereichen und sanitären Anlagen – regelmäßig und zuverlässig.'
        },
        {
          name: 'Hygienische Pflege',
          description: 'Gründliche Reinigung mit Schwerpunkt auf Desinfektion und Keimreduktion. Ideal für Bereiche mit erhöhten Hygieneanforderungen. Es kommen speziell abgestimmte Reinigungsmittel und Verfahren zum Einsatz, um Oberflächen hygienisch rein und sicher zu halten.'
        },
        {
          name: 'Treppenhausreinigung',
          description: 'Gründliche Pflege von Treppenhäusern in Wohn- und Geschäftshäusern. Inklusive Reinigung von Treppen, Geländern, Eingangsbereichen, Briefkästen und Fahrstühlen – für einen gepflegten ersten Eindruck.'
        },
        {
          name: 'Glasreinigung',
          description: 'Streifenfreie Reinigung von Fenstern, Glasfassaden, Glastüren und Wintergärten – innen und außen. Auch schwer zugängliche Flächen werden professionell gereinigt.'
        },
        {
          name: 'Sanitärreinigung',
          description: 'Intensive Reinigung und Desinfektion von Toiletten, Waschräumen und Duschen. Mit speziellen Reinigungsmitteln für hygienische Sauberkeit und frischen Duft – ideal für Büros, Praxen und öffentliche Einrichtungen.'
        }
      ],
    },
    {
      id: 'security',
      iconName: 'shield',
      title: 'Security',
      description: 'Objektschutz, Doorman, Streifendienst – geschult & zuverlässig.',
      image: '/images/detail-security-patrol.jpg',
      features: [
        {
          name: 'Objektschutz',
          description: 'Rundum-Schutz für Gebäude, Gelände und Einrichtungen. Unsere Sicherheitskräfte überwachen Zugänge, führen Kontrollgänge durch und sorgen für die Sicherheit von Personen und Sachwerten – Tag und Nacht.'
        },
        {
          name: 'Doorman Service',
          description: 'Präsenz und Kontrolle am Eingang. Der Doorman begrüßt Besucher, überprüft Zutrittsberechtigungen und sorgt für ein sicheres, professionelles Erscheinungsbild – ideal für Hotels, Geschäfte und Veranstaltungen.'
        },
        {
          name: 'Streifendienst',
          description: 'Mobile Sicherheitskontrollen für größere Areale oder mehrere Objekte. Regelmäßige Kontrollfahrten und flexible Einsatzzeiten erhöhen die Sicherheit und schrecken potenzielle Störer ab.'
        },
        {
          name: 'Kontrolldienst',
          description: 'Gezielte Überprüfung von Gebäuden, Anlagen und sicherheitsrelevanten Bereichen. Kontrollgänge, Schließdienste und Alarmverfolgung gehören ebenso dazu wie die Dokumentation aller Vorkommnisse.'
        },
        {
          name: 'Veranstaltungsschutz',
          description: 'Sicherheitskonzepte für Events jeder Größe – von Einlasskontrollen über Personenschutz bis zur Koordination mit Behörden. Unsere Teams sorgen für einen reibungslosen Ablauf und die Sicherheit aller Beteiligten.'
        }
      ],
    },
    {
      id: 'facility-services',
      iconName: 'handyman',
      title: 'Facility Services',
      description: 'Wartung, Pflege, Kontrolle – aus einer Hand.',
      image: '/images/detail-facility-maintenance.jpg',
      features: [
        {
          name: 'Wartungsarbeiten',
          description: 'Regelmäßige Kontrolle und Instandhaltung technischer Anlagen und Einrichtungen. Dazu zählen z. B. die Überprüfung von Beleuchtung, Heizungsanlagen, Türschließern oder Lüftungssystemen – für einen reibungslosen Betrieb.'
        },
        {
          name: 'Objektpflege',
          description: 'Pflege und Werterhalt von Gebäuden und Außenanlagen. Reinigungsarbeiten, Sichtkontrollen und kleinere Instandhaltungsmaßnahmen sorgen für ein gepflegtes Erscheinungsbild und funktionale Ordnung.'
        },
        {
          name: 'Grünflächenpflege',
          description: 'Saisonale Pflege von Rasenflächen, Hecken, Beeten und Bäumen. Mähen, Schneiden, Jäten und Laubentfernung – für ein gepflegtes und einladendes Umfeld rund ums Objekt.'
        },
        {
          name: 'Winterdienst',
          description: 'Zuverlässiger Räum- und Streudienst bei Schnee und Glätte. Gehwege, Zufahrten und Parkflächen werden rechtzeitig gesichert – für mehr Sicherheit und gesetzeskonforme Verkehrssicherung.'
        },
        {
          name: 'Kleinreparaturen',
          description: 'Schnelle Behebung kleinerer Schäden und Mängel im und am Gebäude. Ob defekte Türgriffe, tropfende Wasserhähne oder lose Bodenleisten – wir kümmern uns unkompliziert und fachgerecht.'
        }
      ],
    },
    {
      id: 'sonderreinigungen',
      iconName: 'auto_awesome',
      title: 'Sonderreinigungen auf Anfrage',
      description: 'Baureinigung, Glasreinigung, Desinfektion – professionell ausgeführt.',
      image: '/images/detail-construction-cleaning.jpg',
      features: [
        {
          name: 'Baureinigung',
          description: 'Entfernung von Bauschutt, Staub und Rückständen – vor, während oder nach Bauprojekten.'
        },
        {
          name: 'Grundreinigung',
          description: 'Intensive Reinigung bis in die Tiefe – für stark beanspruchte oder lange nicht gepflegte Bereiche.'
        },
        {
          name: 'Fassadenreinigung',
          description: 'Professionelle Reinigung von Außenflächen – für ein gepflegtes Erscheinungsbild und Werterhalt.'
        },
        {
          name: 'Desinfektion',
          description: 'Gezielte Keimreduktion durch fachgerechte Desinfektionsmaßnahmen – für hygienisch sichere Räume.'
        }
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative bg-deep-navy text-white section">
        <div className="absolute inset-0 bg-[url('/images/hero-services.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-1 mb-6 text-white">Unsere Leistungen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
            Professionelle Dienstleistungen für Unternehmen und Institutionen – individuell, zuverlässig und mit höchsten Qualitätsstandards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-ice-white dark:bg-background-dark">
        <div className="container-custom">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center scroll-mt-20`}
              >
                <div className="flex-1">
                  <div className="card">
                    <div className="mb-6"><Icon name={service.iconName} className="text-7xl text-primary-steel" /></div>
                    <h2 className="heading-3 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icon name="check_circle" className="text-primary-steel text-xl mt-1 flex-shrink-0" />
                          <div>
                            <strong className="text-gray-900 dark:text-white block mb-1">{feature.name}</strong>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-xl h-80 overflow-hidden shadow-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-right"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent flex items-end justify-center p-6">
                      <Icon name={service.iconName} className="text-7xl text-white opacity-90" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white dark:bg-surface-dark">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Warum North Pro Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { iconName: 'star', title: 'Erfahrung', text: 'Jahrelange Expertise im Facility Management' },
              { iconName: 'target', title: 'Qualität', text: 'Höchste Standards in allen Bereichen' },
              { iconName: 'work', title: 'Flexibilität', text: 'Individuelle Lösungen für jeden Bedarf' },
              { iconName: 'lock', title: 'Zuverlässigkeit', text: 'Pünktlich, diskret und vertrauenswürdig' },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <div className="mb-4"><Icon name={item.iconName} className="text-6xl text-primary-steel" /></div>
                <h3 className="heading-4 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-cool-slate to-fog-grey text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Interesse geweckt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot – maßgeschneidert für Ihre Anforderungen.
          </p>
          <a href="/kontakt" className="btn-primary bg-white text-primary-steel hover:bg-gray-100">
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  );
}

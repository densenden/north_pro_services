import Icon from '@/components/Icon';

export default function LeistungenPage() {
  const services = [
    {
      iconName: 'apartment',
      title: 'Gebäudereinigung',
      description: 'Gründliche Reinigung für Büros, Praxen, Objekte – individuell planbar.',
      features: [
        'Büroreinigung',
        'Praxisreinigung',
        'Treppenhausreinigung',
        'Glasreinigung',
        'Sanitärreinigung',
      ],
    },
    {
      iconName: 'shield',
      title: 'Sicherheitsdienste',
      description: 'Objektschutz, Doorman, Streifendienst – geschult & zuverlässig.',
      features: [
        'Objektschutz',
        'Doorman Service',
        'Streifendienst',
        'Kontrolldienst',
        'Veranstaltungsschutz',
      ],
    },
    {
      iconName: 'handyman',
      title: 'Hausmeisterservice',
      description: 'Wartung, Pflege, Kontrolle – aus einer Hand.',
      features: [
        'Wartungsarbeiten',
        'Objektpflege',
        'Grünflächenpflege',
        'Winterdienst',
        'Kleinreparaturen',
      ],
    },
    {
      iconName: 'auto_awesome',
      title: 'Sonderreinigungen',
      description: 'Baureinigung, Glasreinigung, Desinfektion – professionell ausgeführt.',
      features: [
        'Baureinigung',
        'Grundreinigung',
        'Fassadenreinigung',
        'Desinfektion',
        'Tatortreinigung',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white section">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">Unsere Leistungen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
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
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="card">
                    <div className="text-6xl mb-6"><Icon name={service.iconName} className="text-5xl" /></div>
                    <h2 className="heading-3 mb-4 text-primary-steel">{service.title}</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary-steel mt-1">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary-light to-fog-grey rounded-xl h-80 flex items-center justify-center text-white text-8xl">
                    <Icon name={service.iconName} className="text-5xl" />
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
                <div className="text-5xl mb-4"><Icon name={item.iconName} className="text-5xl" /></div>
                <h3 className="heading-4 mb-2 text-primary-steel">{item.title}</h3>
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

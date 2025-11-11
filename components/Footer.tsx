import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-deep-navy dark:bg-surface-dark text-white relative overflow-hidden">
      <div className="logo-background"></div>
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logos/logo_light.svg"
              alt="North Pro Services"
              width={180}
              height={50}
              className="mb-4"
            />
            <p className="text-fog-grey">
              Ihr Partner für professionelle Reinigungs- und Sicherheitslösungen
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen" className="text-fog-grey hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-fog-grey hover:text-white transition-colors">
                  NorthPatrol
                </Link>
              </li>
              {/* <li>
                <Link href="/jobs" className="text-fog-grey hover:text-white transition-colors">
                  Karriere
                </Link>
              </li> */}
              <li>
                <Link href="/kontakt" className="text-fog-grey hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-fog-grey">
              <li>Reinigung</li>
              <li>Security</li>
              <li>Facility Services</li>
              <li>Sonderreinigungen</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-fog-grey">
              <li>North Pro Services GmbH</li>
              <li>Himmelweiler 7/1</li>
              <li>89081 Ulm</li>
              <li className="pt-2">
                <Link href="/kontakt" className="text-primary-steel hover:text-white transition-colors">
                  Kontaktformular →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cool-slate mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fog-grey text-sm">
            © {new Date().getFullYear()} North Pro Services. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/impressum" className="text-fog-grey hover:text-white text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-fog-grey hover:text-white text-sm transition-colors">
              Datenschutz
            </Link>
            <Link href="/about" className="text-fog-grey hover:text-white text-sm transition-colors">
              Über uns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-surface-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">North Pro Services</h3>
            <p className="text-gray-300">
              Ihr Partner für professionelle Reinigungs- und Sicherheitslösungen
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen" className="text-gray-300 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-300 hover:text-white transition-colors">
                  NorthPatrol
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Gebäudereinigung</li>
              <li>Sicherheitsdienste</li>
              <li>Hausmeisterservice</li>
              <li>Sonderreinigung</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Frankfurt am Main</li>
              <li>Deutschland</li>
              <li className="pt-2">
                <Link href="/kontakt" className="text-accent-light hover:text-white transition-colors">
                  Kontaktformular →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} North Pro Services. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/impressum" className="text-gray-300 hover:text-white text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-300 hover:text-white text-sm transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

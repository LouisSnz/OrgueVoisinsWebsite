import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Les Amis de l&apos;Orgue</h3>
            <p className="text-sm opacity-90">
              Supporting the organ at Église Saint-Joseph-le-Bienveillant in Voisins-le-Bretonneux
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-wood-light transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/projet" className="text-sm hover:text-wood-light transition-colors">
                  Le Projet
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-sm hover:text-wood-light transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/concerts" className="text-sm hover:text-wood-light transition-colors">
                  Concerts & Événements
                </Link>
              </li>
              <li>
                <Link href="/soutenir" className="text-sm hover:text-wood-light transition-colors">
                  Nous Soutenir
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-wood-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Olivier Sansoz</li>
              <li>
                <a
                  href="mailto:contact@orgue-voisins.fr"
                  className="hover:text-wood-light transition-colors"
                >
                  contact@orgue-voisins.fr
                </a>
              </li>
              <li className="opacity-90">Voisins-le-Bretonneux</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-90 mb-4">
              Recevez nos actualités
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-wood-light"
              />
              <button
                type="submit"
                className="bg-wood text-brown font-semibold px-4 py-2 rounded-lg hover:bg-wood-light transition-colors"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75">
            © {currentYear} Orgue de Voisins le Bretonneux
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-wood-light transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-sm hover:text-wood-light transition-colors">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

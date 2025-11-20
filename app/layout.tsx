import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Les Amis de l\'Orgue - Voisins-le-Bretonneux',
  description: 'Association soutenant la construction d\'un orgue exceptionnel à l\'Église Saint-Joseph-le-Bienveillant à Voisins-le-Bretonneux',
  keywords: ['orgue', 'Voisins-le-Bretonneux', 'Saint-Quentin-en-Yvelines', 'église Saint-Joseph', 'musique sacrée', 'concerts', 'patrimoine'],
  authors: [{ name: 'Les Amis de l\'Orgue' }],
  openGraph: {
    title: 'Les Amis de l\'Orgue - Voisins-le-Bretonneux',
    description: 'Un orgue exceptionnel pour Voisins-le-Bretonneux',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

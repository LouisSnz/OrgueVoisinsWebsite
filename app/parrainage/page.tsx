'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Music, Music2, Music3, Piano, Keyboard, Sliders, Building2, ScrollText, Star, Ruler } from 'lucide-react';

export default function ParrainagePage() {
  const components = [
    {
      name: 'Petits tuyaux',
      description: 'Quelques centimètres de longueur',
      Icon: Music,
      priceRange: 'À partir de 50€'
    },
    {
      name: 'Tuyaux moyens',
      description: 'Jusqu\'à 2,5 mètres',
      Icon: Music2,
      priceRange: 'À partir de 150€'
    },
    {
      name: 'Grands tuyaux',
      description: '5 mètres et plus',
      Icon: Music3,
      priceRange: 'À partir de 500€'
    },
    {
      name: 'Série de tuyaux',
      description: 'Un ensemble complet',
      Icon: Piano,
      priceRange: 'À partir de 1000€'
    },
    {
      name: 'Claviers',
      description: 'Grand Orgue, Positif ou Récit (3 disponibles)',
      Icon: Keyboard,
      priceRange: 'Sur demande'
    },
    {
      name: 'Console',
      description: 'Poste de commande central',
      Icon: Sliders,
      priceRange: 'Sur demande'
    },
    {
      name: 'Buffet magnifique',
      description: 'Magnifique buffet en chêne (pièce unique)',
      Icon: Building2,
      priceRange: 'Sur demande'
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,165,116,0.3), rgba(200,168,130,0.3))',
          }}
        />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent-blue"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Parrainage
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-700 font-serif mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Devenez propriétaire d&apos;une partie de l&apos;orgue
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Le parrainage vous permet de contribuer directement à la construction de l&apos;orgue
            tout en inscrivant votre nom dans l&apos;histoire de cet instrument exceptionnel.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-accent-blue text-center">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-gradient-brown rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Choisissez</h3>
              <p className="text-gray-600">
                Sélectionnez l&apos;élément que vous souhaitez parrainer
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-brown rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Personnalisez</h3>
              <p className="text-gray-600">
                Choisissez la note, la longueur ou le timbre de votre tuyau
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-gradient-brown rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Parrainez</h3>
              <p className="text-gray-600">
                Finalisez votre parrainage et choisissez votre reconnaissance
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-20 h-20 bg-gradient-brown rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Recevez</h3>
              <p className="text-gray-600">
                Obtenez votre certificat et votre reconnaissance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Components */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-4 text-accent-blue text-center">
            Composants disponibles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Chaque élément de l&apos;orgue peut être parrainé. Choisissez celui qui résonne
            avec vous et inscrivez votre nom dans l&apos;histoire de cet instrument.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <motion.div
                key={index}
                className="card text-center h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <component.Icon className="w-14 h-14 mb-4 mx-auto text-accent-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-serif font-bold mb-2 text-accent-blue">
                  {component.name}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{component.description}</p>
                <div className="gradient-warm p-3 rounded-lg">
                  <p className="font-semibold text-accent-burgundy">{component.priceRange}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Options */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-accent-blue text-center">
            Options de reconnaissance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ScrollText className="w-12 h-12 mb-4 mx-auto text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif font-bold mb-3 text-accent-blue">
                Parrainage Libre
              </h3>
              <p className="text-gray-700 mb-4">
                Pour les <strong>dons libres</strong>, tous les noms des donateurs seront
                gravés sur une plaque commémorative placée dans l&apos;église.
              </p>
              <div className="glass-strong p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Inclut :</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Nom sur la plaque commémorative</li>
                  <li>✓ Certificat de parrainage</li>
                  <li>✓ Remerciements publics</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="card border-2 border-accent-blue"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Star className="w-12 h-12 mb-4 mx-auto text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif font-bold mb-3 text-accent-blue">
                Parrainage Nominatif
              </h3>
              <p className="text-gray-700 mb-4">
                Pour le <strong>parrainage</strong> d&apos;éléments spécifiques, le nom du
                donateur sera spécifiquement gravé sur l&apos;élément financé.
              </p>
              <div className="glass-strong p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Inclut :</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Gravure sur l&apos;élément parrainé</li>
                  <li>✓ Nom sur la plaque commémorative</li>
                  <li>✓ Certificat personnalisé de parrainage</li>
                  <li>✓ Photo de votre élément parrainé</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personalization */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-6xl">
          <div className="card">
            <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue text-center">
              Personnalisez votre parrainage
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-accent-burgundy flex items-center">
                  <Music3 className="w-5 h-5 mr-2 inline" strokeWidth={1.5} /> Choisissez votre note
                </h4>
                <p>
                  Pour les tuyaux, vous pouvez choisir votre note préférée parmi les 12 notes
                  de la gamme chromatique : Do, Do#, Ré, Ré#, Mi, Fa, Fa#, Sol, Sol#, La, La#, Si
                  (C à B en notation internationale).
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-accent-burgundy flex items-center">
                  <Ruler className="w-5 h-5 mr-2 inline" strokeWidth={1.5} /> Longueur et timbre
                </h4>
                <p>
                  Choisissez la longueur de votre tuyau ou son timbre particulier. Consultez-nous
                  par courrier pour obtenir des conseils personnalisés et découvrir les
                  possibilités disponibles.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-accent-burgundy flex items-center">
                  <Keyboard className="w-5 h-5 mr-2 inline" strokeWidth={1.5} /> Claviers disponibles
                </h4>
                <p>
                  Trois claviers manuels peuvent être parrainés individuellement :
                  le <strong>Grand Orgue</strong>, le <strong>Positif</strong>, et
                  le <strong>Récit</strong>. Chacun offre des caractéristiques sonores uniques.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-accent-burgundy flex items-center">
                  <Building2 className="w-5 h-5 mr-2 inline" strokeWidth={1.5} /> Buffet unique
                </h4>
                <p>
                  Le magnifique buffet en chêne massif est une pièce unique qui peut être
                  parrainée. Il constitue l&apos;écrin visible de l&apos;instrument.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Sponsorship */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue">
            Intéressé par le parrainage ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            &quot;Chacun peut choisir son tuyau, sa longueur ou son timbre, à nous consulter
            par courrier séparé.&quot;
          </p>
          <div className="card">
            <p className="text-lg mb-6">
              Pour discuter de votre parrainage personnalisé, obtenir plus d&apos;informations
              sur les éléments disponibles, ou pour toute question :
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Contact</p>
                <p className="text-gray-700">Olivier Sansoz</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Email</p>
                <a
                  href="mailto:contact@orgue-voisins.fr?subject=Demande de parrainage"
                  className="text-accent-blue hover:underline text-lg"
                >
                  contact@orgue-voisins.fr
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@orgue-voisins.fr?subject=Demande de parrainage"
                className="btn-primary"
              >
                Nous contacter
              </a>
              <Link href="/soutenir" className="btn-secondary">
                Faire un don libre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

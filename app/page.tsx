'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/hero-organ.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
              Un orgue exceptionnel pour Voisins-le-Bretonneux
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Soutenez la création d&apos;un instrument unique à l&apos;Église Saint-Joseph-le-Bienveillant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projet" className="btn-primary">
                Découvrir le projet
              </Link>
              <Link href="/soutenir" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-accent-blue">
                Nous soutenir
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 bg-gradient-warm">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-serif text-center mb-12 text-accent-blue"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Notre Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: L'Orgue */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-accent-blue text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-serif mb-3">L&apos;Orgue</h3>
              <p className="text-gray-700">
                Un instrument contemporain avec 1071 tuyaux, 41 registres et 3 claviers manuels.
                Une palette sonore généreuse et raffinée pour la liturgie et les concerts.
              </p>
            </motion.div>

            {/* Card 2: La Vision */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-accent-blue text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-serif mb-3">La Vision</h3>
              <p className="text-gray-700">
                Créer un orgue unique qui honore la tradition tout en embrassant l&apos;innovation.
                Un instrument à l&apos;échelle du lieu et de ses ambitions culturelles.
              </p>
            </motion.div>

            {/* Card 3: L'Impact */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-accent-blue text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-serif mb-3">L&apos;Impact</h3>
              <p className="text-gray-700">
                Enrichir la vie culturelle de Voisins-le-Bretonneux par des concerts, festivals et
                programmes éducatifs. Promouvoir le patrimoine musical auprès de tous.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Progress */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-accent-blue">
              Progression des dons
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Aidez-nous à atteindre notre objectif
            </p>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
                <motion.div
                  className="gradient-brown h-full rounded-full flex items-center justify-end pr-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: '35%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  <span className="text-white text-sm font-bold">35%</span>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-between text-lg font-semibold mb-8">
              <span className="text-accent-burgundy">23 310 € collectés</span>
              <span className="text-gray-600">Objectif à définir</span>
            </div>

            <div className="text-center">
              <Link href="/soutenir" className="btn-primary inline-block">
                Faire un don
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-accent-blue">
            Dernières actualités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* News Article 1 */}
            <Link href="/actualites/construction-decembre-2024" className="card group">
              <div className="bg-wood-light h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                🔨
              </div>
              <p className="text-sm text-gray-500 mb-2">Décembre 2024</p>
              <h3 className="text-xl font-serif mb-2 group-hover:text-accent-blue transition-colors">
                Construction en cours chez PESCE Frères
              </h3>
              <p className="text-gray-700">
                Découvrez les dernières avancées de la construction de notre orgue dans les ateliers de Pau...
              </p>
            </Link>

            {/* News Article 2 */}
            <Link href="/actualites/visite-atelier-septembre-2024" className="card group">
              <div className="bg-wood h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                🏗️
              </div>
              <p className="text-sm text-gray-500 mb-2">Septembre 2024</p>
              <h3 className="text-xl font-serif mb-2 group-hover:text-accent-blue transition-colors">
                Visite de l&apos;atelier PESCE
              </h3>
              <p className="text-gray-700">
                Notre équipe a visité les ateliers pour suivre l&apos;avancement de la fabrication...
              </p>
            </Link>

            {/* News Article 3 */}
            <Link href="/actualites/choix-fabricant" className="card group">
              <div className="bg-accent-blue h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                ✅
              </div>
              <p className="text-sm text-gray-500 mb-2">2023</p>
              <h3 className="text-xl font-serif mb-2 group-hover:text-accent-blue transition-colors">
                Choix du fabricant PESCE Frères
              </h3>
              <p className="text-gray-700">
                Après une étude approfondie, nous avons choisi la manufacture PESCE Frères et Fils...
              </p>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/actualites" className="text-accent-blue hover:underline font-semibold">
              Voir toutes les actualités →
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-gradient-warm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-accent-blue">
            Prochains événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Event 1 */}
            <div className="card">
              <div className="bg-accent-burgundy text-white rounded-lg p-4 mb-4 text-center">
                <div className="text-3xl font-bold">13</div>
                <div className="text-sm">JUIN 2025</div>
              </div>
              <h3 className="text-xl font-serif mb-2">Concert de l&apos;Orchestre de l&apos;académie de Versailles</h3>
              <p className="text-gray-600 text-sm mb-2">📍 Église Saint-Joseph le Bienveillant</p>
              <p className="text-gray-700">
                Un concert exceptionnel avec l&apos;orchestre de l&apos;académie de Versailles.
              </p>
            </div>

            {/* Event 2 */}
            <div className="card">
              <div className="bg-accent-blue text-white rounded-lg p-4 mb-4 text-center">
                <div className="text-3xl font-bold">09</div>
                <div className="text-sm">FÉV 2025</div>
              </div>
              <h3 className="text-xl font-serif mb-2">Les Petits Chanteurs de la Croix du Bois</h3>
              <p className="text-gray-600 text-sm mb-2">📍 Église Saint-Joseph le Bienveillant</p>
              <p className="text-gray-700">
                Concert des célèbres Petits Chanteurs de la Croix du Bois.
              </p>
            </div>

            {/* Event 3 */}
            <div className="card">
              <div className="bg-wood text-white rounded-lg p-4 mb-4 text-center">
                <div className="text-3xl font-bold">18</div>
                <div className="text-sm">JAN 2025</div>
              </div>
              <h3 className="text-xl font-serif mb-2">Choeurs Cadences et Viva Voce</h3>
              <p className="text-gray-600 text-sm mb-2">📍 Église Saint-Joseph le Bienveillant</p>
              <p className="text-gray-700">
                Concert avec les choeurs Cadences et Viva Voce.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/concerts" className="text-accent-blue hover:underline font-semibold">
              Voir tous les événements →
            </Link>
          </div>
        </div>
      </section>

      {/* Support Options Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-6 text-accent-blue">
            Comment nous soutenir
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Votre soutien est essentiel pour réaliser ce projet exceptionnel.
            Découvrez les différentes façons de contribuer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1: Sponsor a pipe */}
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-serif mb-3">Parrainer un tuyau</h3>
              <p className="text-gray-700 mb-6">
                Devenez propriétaire d&apos;une partie de l&apos;orgue en parrainant un tuyau,
                un clavier ou le buffet.
              </p>
              <Link href="/parrainage" className="btn-secondary">
                En savoir plus
              </Link>
            </motion.div>

            {/* Option 2: Make a donation */}
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-2xl font-serif mb-3">Faire un don</h3>
              <p className="text-gray-700 mb-6">
                Soutenez le projet avec un don libre. Chaque contribution compte et
                bénéficie d&apos;avantages fiscaux.
              </p>
              <Link href="/soutenir" className="btn-primary">
                Faire un don
              </Link>
            </motion.div>

            {/* Option 3: Become a member */}
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-serif mb-3">Adhérer à l&apos;association</h3>
              <p className="text-gray-700 mb-6">
                Rejoignez notre communauté et participez activement à la vie de
                l&apos;association.
              </p>
              <Link href="/soutenir#adhesion" className="btn-secondary">
                Adhérer
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

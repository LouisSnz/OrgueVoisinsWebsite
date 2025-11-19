'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Music, Sparkles, Theater, TrendingUp, Calendar, Mail, Users, Heart, MapPin } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with refined gradient overlay */}
        <Image
          src="/images/orgue_vue_01-2.jpg"
          alt="Grand orgue de l'Église Saint-Joseph-le-Bienveillant"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brown/80 via-wood-dark/75 to-brown/85" />

        {/* Refined decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-wood-light/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-burgundy/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}} />

        <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="backdrop-blur-md bg-white/15 rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Un orgue exceptionnel pour Voisins-le-Bretonneux
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl mb-10 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Soutenez la création d&apos;un instrument unique à l&apos;Église Saint-Joseph-le-Bienveillant
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/projet" className="btn-primary text-lg px-10 py-4 hover:scale-105 transition-transform">
                Découvrir le projet
              </Link>
              <Link href="/soutenir" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-accent-blue text-lg px-10 py-4 hover:scale-105 transition-transform">
                Nous soutenir
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">1071</div>
                <div className="text-sm md:text-base opacity-90">Tuyaux</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">41</div>
                <div className="text-sm md:text-base opacity-90">Registres</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">3</div>
                <div className="text-sm md:text-base opacity-90">Claviers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-warm opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-wood/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-serif text-center mb-6 text-accent-blue"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Notre Vision
          </motion.h2>
          <motion.p
            className="text-xl text-center mb-16 mx-auto text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Un projet ambitieux alliant tradition et modernité pour créer un patrimoine musical exceptionnel
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1: L'Orgue */}
            <motion.div
              className="glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Music className="w-16 h-16 text-accent-blue mb-6 mx-auto" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif mb-4 text-accent-blue">L&apos;Orgue</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Un instrument contemporain avec 1071 tuyaux, 41 registres et 3 claviers manuels.
                Une palette sonore généreuse et raffinée pour la liturgie et les concerts.
              </p>
            </motion.div>

            {/* Card 2: La Vision */}
            <motion.div
              className="glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-16 h-16 text-accent-blue mb-6 mx-auto" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif mb-4 text-accent-blue">La Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Créer un orgue unique qui honore la tradition tout en embrassant l&apos;innovation.
                Un instrument à l&apos;échelle du lieu et de ses ambitions culturelles.
              </p>
            </motion.div>

            {/* Card 3: L'Impact */}
            <motion.div
              className="glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Theater className="w-16 h-16 text-accent-blue mb-6 mx-auto" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif mb-4 text-accent-blue">L&apos;Impact</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Enrichir la vie culturelle de Voisins-le-Bretonneux par des concerts, festivals et
                programmes éducatifs. Promouvoir le patrimoine musical auprès de tous.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Progress */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-brown opacity-20" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-burgundy/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="glass-strong rounded-3xl p-10 md:p-16 border-2 border-white/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-accent-blue">
              Progression des dons
            </h2>
            <p className="text-center text-gray-700 text-xl mb-10">
              Aidez-nous à atteindre notre objectif
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="bg-white/30 backdrop-blur-sm rounded-full h-8 overflow-hidden border border-white/40">
                <motion.div
                  className="gradient-brown h-full rounded-full flex items-center justify-end pr-6 shadow-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: '35%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  <span className="text-white text-base font-bold">35%</span>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xl font-semibold mb-10">
              <span className="text-accent-burgundy text-2xl">23 310 € collectés</span>
              <span className="text-gray-600">Objectif à définir</span>
            </div>

            <div className="text-center">
              <Link href="/soutenir" className="btn-primary inline-block text-lg px-12 py-5">
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
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/Bois-_1494.jpg"
                  alt="Construction chez PESCE Frères"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/PHOTO-2023-10-20-10-30-34-10.jpg"
                  alt="Visite de l'atelier PESCE"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/3D1.jpg"
                  alt="Rendu 3D de l'orgue"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              <p className="text-gray-600 text-sm mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1 inline" /> Église Saint-Joseph le Bienveillant
              </p>
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
              <p className="text-gray-600 text-sm mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1 inline" /> Église Saint-Joseph le Bienveillant
              </p>
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
              <p className="text-gray-600 text-sm mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1 inline" /> Église Saint-Joseph le Bienveillant
              </p>
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
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-warm opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-dark/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-6 text-accent-blue">
            Comment nous soutenir
          </h2>
          <p className="text-center text-gray-700 text-xl mb-16 mx-auto leading-relaxed">
            Votre soutien est essentiel pour réaliser ce projet exceptionnel.
            Découvrez les différentes façons de contribuer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Option 1: Sponsor a pipe */}
            <motion.div
              className="glass-strong rounded-2xl p-10 text-center hover:scale-105 transition-all duration-300 border border-white/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Music className="w-20 h-20 mx-auto mb-6 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif mb-4 text-accent-blue">Parrainer un tuyau</h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Devenez propriétaire d&apos;une partie de l&apos;orgue en parrainant un tuyau,
                un clavier ou le buffet.
              </p>
              <Link href="/parrainage" className="btn-secondary">
                En savoir plus
              </Link>
            </motion.div>

            {/* Option 2: Make a donation */}
            <motion.div
              className="glass-strong rounded-2xl p-10 text-center hover:scale-105 transition-all duration-300 border-2 border-accent-blue/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-20 h-20 mx-auto mb-6 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif mb-4 text-accent-blue">Faire un don</h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Soutenez le projet avec un don libre. Chaque contribution compte et
                bénéficie d&apos;avantages fiscaux.
              </p>
              <Link href="/soutenir" className="btn-primary">
                Faire un don
              </Link>
            </motion.div>

            {/* Option 3: Become a member */}
            <motion.div
              className="glass-strong rounded-2xl p-10 text-center hover:scale-105 transition-all duration-300 border border-white/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Users className="w-20 h-20 mx-auto mb-6 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-3xl font-serif mb-4 text-accent-blue">Adhérer à l&apos;association</h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
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

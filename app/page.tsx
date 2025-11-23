'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Music, Sparkles, Theater, Heart, Users, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section - New Modern Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/orgue_vue_01-2.jpg"
          alt="Grand orgue de l'Église Saint-Joseph-le-Bienveillant"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Hero Content - Left aligned */}
        <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 max-w-3xl">
          {/* Availability indicator */}
          <motion.div
            className="flex items-center space-x-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm md:text-base font-medium tracking-wide">
              Ouvert aux dons et parrainages
            </span>
          </motion.div>

          {/* Main heading - Two lines */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Construire un orgue.
            <br />
            Créer l&apos;avenir.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Un projet ambitieux pour Voisins-le-Bretonneux. Un orgue exceptionnel pour l&apos;Église Saint-Joseph-le-Bienveillant.
          </motion.p>

          {/* CTA Button - Dark style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/soutenir"
              className="inline-block bg-charcoal hover:bg-charcoal/90 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Nous soutenir
            </Link>
          </motion.div>
        </div>

        {/* Side navigation dots - decorative */}
        <motion.div
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
        </motion.div>
      </section>

      {/* Project Overview - Streamlined */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-accent-blue">
              Notre Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un projet ambitieux alliant tradition et modernité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Music className="w-12 h-12 text-accent-blue mb-4 mx-auto" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-3 text-accent-blue">L&apos;Orgue</h3>
              <p className="text-gray-700 leading-relaxed">
                Un instrument contemporain avec 1071 tuyaux, 41 registres et 3 claviers manuels.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-12 h-12 text-accent-blue mb-4 mx-auto" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-3 text-accent-blue">La Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Créer un orgue unique qui honore la tradition tout en embrassant l&apos;innovation.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Theater className="w-12 h-12 text-accent-blue mb-4 mx-auto" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-3 text-accent-blue">L&apos;Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Enrichir la vie culturelle par des concerts, festivals et programmes éducatifs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Progress - Streamlined */}
      <section className="py-24 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-3 text-accent-blue">
              Progression des dons
            </h2>
            <p className="text-center text-gray-700 text-lg mb-12">
              Aidez-nous à atteindre notre objectif
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="bg-white/50 rounded-full h-6 overflow-hidden">
                <motion.div
                  className="bg-accent-blue h-full rounded-full flex items-center justify-end pr-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: '35%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <span className="text-white text-sm font-semibold">35%</span>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-10">
              <span className="text-accent-burgundy text-2xl font-semibold">23 310 € collectés</span>
              <span className="text-gray-600">Objectif à définir</span>
            </div>

            <div className="text-center">
              <Link href="/soutenir" className="btn-primary inline-block px-8 py-3">
                Faire un don
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News - Streamlined */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-accent-blue">
            Actualités
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

      {/* Upcoming Events - Streamlined */}
      <section className="py-24 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-accent-blue">
            Prochains événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Event 1 */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-accent-burgundy font-serif text-lg mb-3">13 Juin 2025</div>
              <h3 className="text-xl font-serif mb-2 text-gray-900">
                Concert de l&apos;Orchestre de l&apos;académie de Versailles
              </h3>
              <p className="text-gray-600 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Église Saint-Joseph
              </p>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-accent-blue font-serif text-lg mb-3">09 Février 2025</div>
              <h3 className="text-xl font-serif mb-2 text-gray-900">
                Les Petits Chanteurs de la Croix du Bois
              </h3>
              <p className="text-gray-600 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Église Saint-Joseph
              </p>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-wood font-serif text-lg mb-3">18 Janvier 2025</div>
              <h3 className="text-xl font-serif mb-2 text-gray-900">
                Choeurs Cadences et Viva Voce
              </h3>
              <p className="text-gray-600 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Église Saint-Joseph
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/concerts" className="text-accent-blue hover:underline font-semibold text-lg">
              Voir tous les événements →
            </Link>
          </div>
        </div>
      </section>

      {/* Support Options - Streamlined */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-accent-blue">
            Comment nous soutenir
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Votre soutien est essentiel pour réaliser ce projet exceptionnel
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1: Sponsor a pipe */}
            <div className="text-center p-8 rounded-lg bg-gradient-warm hover:shadow-lg transition-shadow">
              <Music className="w-12 h-12 mx-auto mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-3 text-accent-blue">Parrainer un tuyau</h3>
              <p className="text-gray-700 mb-6">
                Devenez propriétaire d&apos;une partie de l&apos;orgue
              </p>
              <Link href="/parrainage" className="text-accent-blue hover:underline font-semibold">
                En savoir plus →
              </Link>
            </div>

            {/* Option 2: Make a donation */}
            <div className="text-center p-8 rounded-lg bg-accent-blue/10 hover:shadow-lg transition-shadow border-2 border-accent-blue/30">
              <Heart className="w-12 h-12 mx-auto mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-3 text-accent-blue">Faire un don</h3>
              <p className="text-gray-700 mb-6">
                Soutenez le projet avec un don libre
              </p>
              <Link href="/soutenir" className="btn-primary inline-block">
                Faire un don
              </Link>
            </div>

            {/* Option 3: Become a member */}
            <div className="text-center p-8 rounded-lg bg-gradient-warm hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-3 text-accent-blue">Adhérer</h3>
              <p className="text-gray-700 mb-6">
                Rejoignez notre communauté
              </p>
              <Link href="/soutenir#adhesion" className="text-accent-blue hover:underline font-semibold">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

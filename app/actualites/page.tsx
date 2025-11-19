'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ActualitesPage() {
  const articles = [
    {
      id: 'construction-decembre-2024',
      title: 'Construction en cours chez PESCE Frères',
      date: 'Décembre 2024',
      excerpt: 'Découvrez les dernières avancées de la construction de notre orgue dans les ateliers de Pau. Les tuyaux prennent forme et la console est en cours de finition.',
      icon: '🔨',
      color: 'bg-wood-light'
    },
    {
      id: 'visite-atelier-septembre-2024',
      title: 'Visite de l\'atelier PESCE',
      date: 'Septembre 2024',
      excerpt: 'Notre équipe a eu le privilège de visiter les ateliers de la manufacture PESCE Frères à Pau pour suivre l\'avancement de la fabrication de notre orgue.',
      icon: '🏗️',
      color: 'bg-wood'
    },
    {
      id: 'choix-fabricant',
      title: 'Choix du fabricant PESCE Frères',
      date: '2023',
      excerpt: 'Après une étude approfondie et plusieurs consultations, nous avons choisi la manufacture PESCE Frères et Fils pour réaliser notre orgue exceptionnel.',
      icon: '✅',
      color: 'bg-accent-blue'
    },
    {
      id: 'lancement-projet',
      title: 'Lancement du projet',
      date: '2022',
      excerpt: 'L\'association Les Amis de l\'Orgue est officiellement créée avec pour mission de soutenir la construction d\'un orgue à l\'Église Saint-Joseph-le-Bienveillant.',
      icon: '🎯',
      color: 'bg-accent-burgundy'
    },
    {
      id: 'etude-acoustique',
      title: 'Étude acoustique de l\'église',
      date: '2022',
      excerpt: 'Une étude acoustique approfondie de l\'église Saint-Joseph-le-Bienveillant confirme l\'excellence des conditions pour accueillir un grand orgue.',
      icon: '🎵',
      color: 'bg-wood-dark'
    },
    {
      id: 'premieres-esquisses',
      title: 'Premières esquisses du Père Valentin',
      date: '2021',
      excerpt: 'Le Père Paul Valentin CSC réalise les premières esquisses artistiques de l\'orgue, posant les bases de la vision esthétique du projet.',
      icon: '✏️',
      color: 'bg-brown-light'
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 gradient-warm">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent-blue"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Actualités
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Suivez l&apos;avancement du projet et les dernières nouvelles
          </motion.p>
        </div>
      </section>

      {/* Latest Featured Article */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="card group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`${articles[0].color} h-80 rounded-lg flex items-center justify-center text-white text-8xl`}>
                {articles[0].icon}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm text-accent-blue font-semibold mb-2">{articles[0].date}</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4 group-hover:text-accent-blue transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  {articles[0].excerpt}
                </p>
                <Link
                  href={`/actualites/${articles[0].id}`}
                  className="btn-primary inline-block self-start"
                >
                  Lire l&apos;article
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-accent-blue">
            Toutes les actualités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/actualites/${article.id}`} className="card group h-full flex flex-col">
                  <div className={`${article.color} h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl`}>
                    {article.icon}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-accent-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-accent-blue hover:underline font-semibold">
                      Lire la suite →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Progress Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-accent-blue text-center">
            Suivi de la Construction
          </h2>
          <div className="card">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                La construction de l&apos;orgue progresse régulièrement dans les ateliers de
                la manufacture PESCE Frères à Pau. Nous mettons à jour cette section avec
                des photos et des informations au fil de l&apos;avancement du projet.
              </p>

              {/* Timeline */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-accent-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Conception et plans</h4>
                    <p className="text-gray-600">Plans détaillés et spécifications finales ✓</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Fabrication du buffet</h4>
                    <p className="text-gray-600">Buffet en chêne massif en cours ⏳</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-300 text-gray-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Fabrication des tuyaux</h4>
                    <p className="text-gray-600">1071 tuyaux à fabriquer et harmoniser ⏳</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-300 text-gray-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Installation</h4>
                    <p className="text-gray-600">Installation dans l&apos;église</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-300 text-gray-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Harmonisation finale</h4>
                    <p className="text-gray-600">Ajustement final de l&apos;acoustique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

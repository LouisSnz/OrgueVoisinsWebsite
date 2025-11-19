'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Palette, Pencil, Factory, Calendar, Hammer, Sparkles, Target, Wrench, Piano, Music, Camera } from 'lucide-react';

export default function ProjetPage() {
  const [activeTab, setActiveTab] = useState('specifications');

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 gradient-warm">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent-blue"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Le Projet
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Un orgue contemporain d&apos;exception pour Voisins-le-Bretonneux
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="card">
            <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue">
              Un Instrument Unique
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p className="text-lg">
                Après une étude approfondie, l&apos;association a confié la réalisation de l&apos;orgue
                à la <strong>Manufacture PESCE Frères et Fils</strong>, établie à Pau dans les
                Pyrénées Atlantiques.
              </p>
              <p className="text-lg">
                Forte d&apos;une expérience depuis 1949 dans la restauration et la construction
                d&apos;orgues neufs, la manufacture PESCE propose un projet original et innovant,
                offrant de multiples possibilités musicales.
              </p>
              <p className="text-lg">
                Cet orgue ne sera pas un instrument &quot;passe-partout&quot;, mais un instrument raffiné
                doté d&apos;une palette de couleurs généreuse et large, alliant esthétique mixte,
                qualité traditionnelle et modernité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs for Specifications and Vision */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-5xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'specifications'
                  ? 'bg-accent-blue text-white'
                  : 'bg-white text-accent-blue hover:bg-accent-blue/10'
              }`}
            >
              Spécifications Techniques
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'vision'
                  ? 'bg-accent-blue text-white'
                  : 'bg-white text-accent-blue hover:bg-accent-blue/10'
              }`}
            >
              L&apos;Avant-Projet
            </button>
            <button
              onClick={() => setActiveTab('manufacturer')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'manufacturer'
                  ? 'bg-accent-blue text-white'
                  : 'bg-white text-accent-blue hover:bg-accent-blue/10'
              }`}
            >
              Le Facteur
            </button>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'specifications' && (
              <div className="card">
                <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue">
                  Caractéristiques Techniques
                </h2>

                {/* Key Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 gradient-warm rounded-lg">
                    <div className="text-5xl font-bold text-accent-blue mb-2">1071</div>
                    <div className="text-gray-700 font-medium">Tuyaux</div>
                  </div>
                  <div className="text-center p-6 gradient-warm rounded-lg">
                    <div className="text-5xl font-bold text-accent-blue mb-2">41</div>
                    <div className="text-gray-700 font-medium">Registres</div>
                  </div>
                  <div className="text-center p-6 gradient-warm rounded-lg">
                    <div className="text-5xl font-bold text-accent-blue mb-2">18</div>
                    <div className="text-gray-700 font-medium">Séries de tuyaux</div>
                  </div>
                </div>

                {/* Console Description */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-3 text-accent-burgundy">
                      Console
                    </h3>
                    <p className="text-gray-700 mb-4">
                      La console comprend 3 claviers manuels de 61 notes chacun :
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-700"><strong>Grand Orgue</strong> : Le clavier principal, offrant la puissance et la majesté</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-700"><strong>Positif</strong> : Des sonorités plus douces et expressives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-700"><strong>Récit</strong> : Un clavier expressif avec possibilité de nuances</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-3 text-accent-burgundy">
                      Pédalier
                    </h3>
                    <p className="text-gray-700">
                      Un pédalier de 32 notes permet de contrôler les 1071 tuyaux,
                      offrant une richesse harmonique exceptionnelle et une profondeur sonore
                      impressionnante.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-3 text-accent-burgundy">
                      Caractéristiques Sonores
                    </h3>
                    <p className="text-gray-700 mb-4">
                      L&apos;orgue s&apos;inspire de l&apos;esthétique contemporaine tout en intégrant
                      18 séries de tuyaux répartis sur 41 registres. Il se distingue par :
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-700">Des <strong>sonorités douces et chaudes</strong>, parfaitement adaptées à la liturgie</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-700">Une <strong>palette de couleurs généreuse</strong> permettant une grande variété de répertoires</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-700">Un <strong>style contemporain</strong> alliant tradition et innovation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span className="text-gray-700">Une <strong>esthétique mixte</strong> combinant qualité artisanale et modernité</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="card">
                <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue">
                  L&apos;Avant-Projet : Vision et Inspiration
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p className="text-lg">
                    Concevoir un orgue dans une église nouvellement construite représente une
                    opportunité rare et passionnante. Il s&apos;agit d&apos;interpréter l&apos;esprit
                    ancestral de cet instrument tout en proposant des solutions nouvelles,
                    adaptées à l&apos;architecture contemporaine.
                  </p>

                  <div className="glass-strong rounded-lg p-6 my-8">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-accent-burgundy">
                      Philosophie du Projet
                    </h3>
                    <p className="text-lg mb-4">
                      L&apos;orgue doit honorer la tradition tout en embrassant l&apos;innovation.
                      Il ne s&apos;agit pas simplement d&apos;installer un instrument, mais de
                      créer une œuvre d&apos;art qui dialogue avec son environnement.
                    </p>
                    <p className="text-lg">
                      L&apos;intégration visuelle et acoustique avec l&apos;architecture moderne de
                      l&apos;église Saint-Joseph-le-Bienveillant est au cœur de nos préoccupations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-accent-burgundy">
                      L&apos;Apport du Père Paul Valentin CSC
                    </h3>
                    <p className="text-lg mb-4">
                      Le Père Paul Valentin CSC a joué un rôle essentiel en tant que conseiller
                      spirituel et artistique. Ses esquisses originales dessinées à la main ont
                      guidé la réflexion sur l&apos;esthétique et l&apos;intégration de l&apos;instrument
                      dans l&apos;espace sacré.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-accent-burgundy">
                      Harmonie Visuelle
                    </h3>
                    <p className="text-lg mb-4">
                      Les couleurs douces et pastels de l&apos;église ont inspiré le choix des
                      essences de bois et des finitions. Le buffet en chêne massif s&apos;intègre
                      naturellement dans l&apos;architecture, créant un dialogue harmonieux entre
                      l&apos;ancien et le moderne.
                    </p>
                    <p className="text-lg">
                      L&apos;instrument devient ainsi partie intégrante de l&apos;espace sacré,
                      contribuant à créer une atmosphère propice au recueillement et à
                      l&apos;élévation spirituelle.
                    </p>
                  </div>

                  {/* Sketches Gallery Placeholder */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-accent-burgundy">
                      Galerie des Esquisses
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-wood-light h-64 rounded-lg flex items-center justify-center text-white">
                        <Palette className="w-20 h-20" strokeWidth={1.5} />
                      </div>
                      <div className="bg-wood h-64 rounded-lg flex items-center justify-center text-white">
                        <Pencil className="w-20 h-20" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 italic">
                      Esquisses originales du Père Paul Valentin CSC
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'manufacturer' && (
              <div className="card">
                <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue">
                  PESCE Frères et Fils
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-brown text-white rounded-full w-32 h-32 flex items-center justify-center">
                      <Factory className="w-16 h-16" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="text-lg">
                    La <strong>Manufacture PESCE Frères et Fils</strong> est une entreprise familiale
                    renommée dans le domaine de la facture d&apos;orgue, établie à Pau dans les
                    Pyrénées Atlantiques.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="gradient-warm p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-2 text-accent-blue flex items-center">
                        <Calendar className="w-5 h-5 mr-2" strokeWidth={1.5} /> Depuis 1949
                      </h4>
                      <p>Plus de 70 ans d&apos;expérience et de savoir-faire</p>
                    </div>
                    <div className="gradient-warm p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-2 text-accent-blue flex items-center">
                        <Hammer className="w-5 h-5 mr-2" strokeWidth={1.5} /> Expertise
                      </h4>
                      <p>Restauration et construction d&apos;orgues neufs</p>
                    </div>
                    <div className="gradient-warm p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-2 text-accent-blue flex items-center">
                        <Sparkles className="w-5 h-5 mr-2" strokeWidth={1.5} /> Innovation
                      </h4>
                      <p>Projets originaux et innovants</p>
                    </div>
                    <div className="gradient-warm p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-2 text-accent-blue flex items-center">
                        <Target className="w-5 h-5 mr-2" strokeWidth={1.5} /> Qualité
                      </h4>
                      <p>Artisanat d&apos;excellence et tradition</p>
                    </div>
                  </div>

                  <p className="text-lg">
                    La manufacture se distingue par sa capacité à créer des instruments uniques,
                    parfaitement adaptés à chaque lieu et chaque projet. Son approche allie
                    respect des traditions séculaires et utilisation de techniques modernes.
                  </p>

                  <div className="glass-strong rounded-lg p-6 my-8">
                    <h3 className="text-xl font-semibold mb-3 text-accent-burgundy">
                      Pourquoi PESCE Frères ?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span>Une expertise reconnue dans la création d&apos;orgues contemporains</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span>Une approche personnalisée, avec un instrument conçu spécifiquement pour notre église</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span>Un savoir-faire artisanal alliant qualité traditionnelle et innovation technique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        <span>Une palette sonore riche et variée, parfaitement adaptée à nos besoins liturgiques et musicaux</span>
                      </li>
                    </ul>
                  </div>

                  {/* Workshop Photos Placeholder */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-accent-burgundy">
                      L&apos;Atelier
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-wood-light h-48 rounded-lg flex items-center justify-center text-white">
                        <Wrench className="w-16 h-16" strokeWidth={1.5} />
                      </div>
                      <div className="bg-wood h-48 rounded-lg flex items-center justify-center text-white">
                        <Piano className="w-16 h-16" strokeWidth={1.5} />
                      </div>
                      <div className="bg-wood-dark h-48 rounded-lg flex items-center justify-center text-white">
                        <Music className="w-16 h-16" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 italic">
                      Photos de l&apos;atelier PESCE à Pau
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-accent-blue text-center">
            Galerie Photos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-gradient-brown h-64 rounded-lg hover:scale-105 transition-transform cursor-pointer flex items-center justify-center text-white"
              >
                <Camera className="w-20 h-20" strokeWidth={1.5} />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 italic">
            Photos de la construction, des tuyaux, de la console et du buffet
          </p>
        </div>
      </section>
    </div>
  );
}

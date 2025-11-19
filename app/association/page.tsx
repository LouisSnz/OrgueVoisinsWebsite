'use client';

import { motion } from 'framer-motion';
import { Music, Music2, BookOpen, Building2, Handshake, Piano, User, Church, Sparkles } from 'lucide-react';

export default function AssociationPage() {
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
            L&apos;Association
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Les Amis de l&apos;Orgue de Voisins-le-Bretonneux
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent-blue text-center">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-lg mb-4">
              L&apos;association &quot;Les Amis de l&apos;Orgue&quot; a pour mission de soutenir la construction
              d&apos;un orgue exceptionnel à l&apos;Église Saint-Joseph-le-Bienveillant de Voisins-le-Bretonneux.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-lg">
              Nous nous engageons à promouvoir la musique sacrée et le patrimoine culturel, tout en
              créant un lieu de rencontre et d&apos;échange autour de l&apos;art de l&apos;orgue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Story */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-accent-blue">
            Notre Histoire
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="text-lg">
              L&apos;association est née de l&apos;opportunité exceptionnelle offerte par la construction
              d&apos;une nouvelle église à Voisins-le-Bretonneux. L&apos;Église Saint-Joseph-le-Bienveillant,
              avec son architecture moderne et lumineuse, représente un écrin idéal pour accueillir un
              orgue d&apos;exception.
            </p>
            <p className="text-lg">
              Dès les premières discussions, il est apparu évident que l&apos;instrument devait être
              à l&apos;échelle du lieu et de ses ambitions. C&apos;est ainsi qu&apos;est né le projet d&apos;un
              orgue contemporain, alliant tradition et innovation, capable de servir aussi bien la
              liturgie que les concerts.
            </p>
            <p className="text-lg">
              Grâce au soutien de la paroisse et de la communauté locale, l&apos;association a pu
              concrétiser ce rêve en choisissant la manufacture PESCE Frères et Fils pour réaliser
              cet instrument unique.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-accent-blue text-center">
            Nos Objectifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Music2 className="w-12 h-12 mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-semibold mb-3">Événements Culturels</h3>
              <p className="text-gray-700">
                Organiser des concerts, festivals, expositions et conférences pour promouvoir
                la musique d&apos;orgue et la culture musicale.
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-12 h-12 mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-semibold mb-3">Programmes Éducatifs</h3>
              <p className="text-gray-700">
                Développer des initiatives pédagogiques pour sensibiliser le public, en particulier
                les jeunes, à la richesse de la musique d&apos;orgue.
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-12 h-12 mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-semibold mb-3">Patrimoine Musical</h3>
              <p className="text-gray-700">
                Promouvoir le patrimoine musical et la facture d&apos;orgue, en valorisant
                l&apos;artisanat d&apos;excellence et les traditions musicales.
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Handshake className="w-12 h-12 mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-semibold mb-3">Engagement Communautaire</h3>
              <p className="text-gray-700">
                Fédérer la communauté de Voisins-le-Bretonneux et Saint-Quentin-en-Yvelines
                autour d&apos;un projet culturel porteur de sens.
              </p>
            </motion.div>

            <motion.div
              className="card md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Piano className="w-12 h-12 mb-4 text-accent-blue" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-semibold mb-3">Soutien au Projet</h3>
              <p className="text-gray-700">
                Collecter les fonds nécessaires à l&apos;installation de l&apos;orgue et assurer
                son rayonnement culturel à long terme à travers des concerts et manifestations
                de qualité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-accent-blue text-center">
            L&apos;Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-brown rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <User className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Olivier Sansoz</h3>
              <p className="text-accent-blue font-medium mb-3">Président</p>
              <p className="text-gray-700 text-sm">
                Passionné de musique sacrée, Olivier coordonne les activités de l&apos;association
                et assure le lien avec les différents partenaires du projet.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-brown rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <User className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Équipe de bénévoles</h3>
              <p className="text-accent-blue font-medium mb-3">Membres actifs</p>
              <p className="text-gray-700 text-sm">
                Une équipe dévouée de bénévoles contribue à l&apos;organisation des événements
                et à la promotion du projet.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-serif mb-4">Contact</h3>
            <p className="text-gray-700 mb-2">Pour toute question ou pour rejoindre notre équipe :</p>
            <a
              href="mailto:contact@orgue-voisins.fr"
              className="text-accent-blue hover:underline font-semibold"
            >
              contact@orgue-voisins.fr
            </a>
          </div>
        </div>
      </section>

      {/* The Church */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-accent-blue text-center">
            L&apos;Église Saint-Joseph-le-Bienveillant
          </h2>
          <div className="card">
            <div className="bg-wood-light h-64 rounded-lg mb-6 flex items-center justify-center text-white">
              <Church className="w-32 h-32" strokeWidth={1.5} />
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p className="text-lg">
                L&apos;Église Saint-Joseph-le-Bienveillant est un édifice moderne et lumineux,
                inauguré récemment à Voisins-le-Bretonneux. Son architecture contemporaine
                offre un cadre exceptionnel pour la musique sacrée.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="text-center p-4 bg-gradient-warm rounded-lg">
                  <div className="text-3xl font-bold text-accent-blue mb-1">800+</div>
                  <div className="text-sm text-gray-600">Places assises</div>
                </div>
                <div className="text-center p-4 bg-gradient-warm rounded-lg">
                  <Sparkles className="w-10 h-10 text-accent-blue mb-1 mx-auto" strokeWidth={1.5} />
                  <div className="text-sm text-gray-600">Architecture moderne</div>
                </div>
                <div className="text-center p-4 bg-gradient-warm rounded-lg">
                  <Music className="w-10 h-10 text-accent-blue mb-1 mx-auto" strokeWidth={1.5} />
                  <div className="text-sm text-gray-600">Acoustique étudiée</div>
                </div>
              </div>
              <p className="text-lg">
                L&apos;acoustique a été soigneusement étudiée pour accueillir un orgue de qualité.
                La capacité de plus de 800 personnes fait de cette église un lieu idéal pour les
                concerts et les célébrations liturgiques de grande envergure.
              </p>
              <p className="text-lg">
                La luminosité naturelle de l&apos;édifice et ses volumes généreux créent une
                atmosphère propice au recueillement et à l&apos;écoute musicale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

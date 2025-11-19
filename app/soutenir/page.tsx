'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SoutenirPage() {
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState('');

  const suggestedAmounts = [50, 100, 250, 500];

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
            Nous Soutenir
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Votre soutien est essentiel pour réaliser ce projet exceptionnel
          </motion.p>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-accent-blue text-center">
              L&apos;instrument doit être à l&apos;échelle du lieu et de ses ambitions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-lg mb-4">
              L&apos;Église Saint-Joseph-le-Bienveillant, avec sa capacité de plus de 800 personnes
              et son acoustique étudiée, mérite un orgue d&apos;exception. Ce projet représente un
              investissement important pour créer un patrimoine culturel durable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-lg">
              Chaque contribution, quelle que soit sa taille, nous rapproche de notre objectif
              et permet de concrétiser ce rêve musical et culturel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-accent-blue text-center">
            Notre Progression
          </h2>
          <div className="card">
            <div className="mb-6">
              <div className="bg-gray-200 rounded-full h-8 overflow-hidden">
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
            <div className="flex justify-between text-xl font-semibold mb-4">
              <span className="text-accent-burgundy">23 310 € collectés</span>
              <span className="text-gray-600">Objectif en cours</span>
            </div>
            <p className="text-gray-600 text-center">
              Mis à jour mensuellement par l&apos;équipe de l&apos;association
            </p>
          </div>
        </div>
      </section>

      {/* Three Support Options */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-accent-blue text-center">
            Trois façons de contribuer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1: Sponsor a pipe */}
            <motion.div
              className="card flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-2xl font-serif font-bold text-accent-blue mb-3">
                  Parrainer un tuyau
                </h3>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 mb-6">
                  Devenez propriétaire d&apos;une partie de l&apos;orgue en parrainant un tuyau,
                  un clavier, la console ou le buffet magnifique.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p><strong>Petits tuyaux :</strong> Quelques centimètres</p>
                  <p><strong>Tuyaux moyens :</strong> Jusqu&apos;à 2,5m</p>
                  <p><strong>Grands tuyaux :</strong> 5m et plus</p>
                  <p><strong>Claviers :</strong> 3 disponibles</p>
                  <p><strong>Console et buffet :</strong> Pièces uniques</p>
                </div>
                <div className="bg-gradient-warm p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold mb-2">Reconnaissance :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Plaque commémorative dans l&apos;église</li>
                    <li>• Gravure sur l&apos;élément parrainé (option nominative)</li>
                  </ul>
                </div>
              </div>
              <Link href="/parrainage" className="btn-secondary w-full text-center">
                En savoir plus
              </Link>
            </motion.div>

            {/* Option 2: Make a donation */}
            <motion.div
              className="card flex flex-col h-full border-2 border-accent-blue"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💝</div>
                <h3 className="text-2xl font-serif font-bold text-accent-blue mb-3">
                  Faire un don
                </h3>
                <div className="inline-block bg-accent-blue text-white text-sm px-3 py-1 rounded-full">
                  Recommandé
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 mb-6">
                  Soutenez le projet avec un don libre. Chaque contribution compte et
                  bénéficie d&apos;avantages fiscaux selon la législation française.
                </p>

                {/* Donation Form */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Montant suggéré</label>
                    <div className="grid grid-cols-2 gap-2">
                      {suggestedAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setDonationAmount(amount)}
                          className={`py-2 rounded-lg font-semibold transition-all ${
                            donationAmount === amount
                              ? 'bg-accent-blue text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {amount} €
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ou montant libre</label>
                    <input
                      type="number"
                      placeholder="Montant en €"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    />
                  </div>
                </div>

                <div className="bg-gradient-warm p-4 rounded-lg mb-6 text-sm">
                  <p className="font-semibold mb-1">Avantages fiscaux</p>
                  <p>Déduction fiscale selon la législation française en vigueur</p>
                </div>
              </div>
              <a
                href="https://www.helloasso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Faire un don sécurisé
              </a>
              <p className="text-xs text-gray-500 text-center mt-2">
                Paiement sécurisé via HelloAsso
              </p>
            </motion.div>

            {/* Option 3: Become a member */}
            <motion.div
              className="card flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-serif font-bold text-accent-blue mb-3">
                  Adhérer à l&apos;association
                </h3>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 mb-6">
                  Rejoignez notre communauté et participez activement à la vie de
                  l&apos;association Les Amis de l&apos;Orgue.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-accent-blue mr-2">✓</span>
                    <span className="text-sm text-gray-700">Actualités exclusives sur le projet</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent-blue mr-2">✓</span>
                    <span className="text-sm text-gray-700">Invitations aux événements spéciaux</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent-blue mr-2">✓</span>
                    <span className="text-sm text-gray-700">Participation aux assemblées générales</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent-blue mr-2">✓</span>
                    <span className="text-sm text-gray-700">Soutien aux activités culturelles</span>
                  </div>
                </div>
                <div className="bg-gradient-warm p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold mb-1">Cotisation annuelle</p>
                  <p className="text-2xl font-bold text-accent-blue">À définir</p>
                </div>
              </div>
              <Link href="/contact" className="btn-secondary w-full text-center">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-accent-blue text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Comment sont utilisés les fonds collectés ?',
                answer: 'Tous les fonds sont directement affectés à la construction et l\'installation de l\'orgue, ainsi qu\'aux activités culturelles de l\'association. Une gestion transparente est assurée avec des comptes rendus réguliers.'
              },
              {
                question: 'Les dons sont-ils déductibles des impôts ?',
                answer: 'Oui, conformément à la législation française, les dons à notre association ouvrent droit à une réduction d\'impôt. Un reçu fiscal vous sera automatiquement envoyé.'
              },
              {
                question: 'Que se passe-t-il si l\'objectif est dépassé ?',
                answer: 'Les fonds supplémentaires seront utilisés pour l\'entretien de l\'orgue, l\'organisation de concerts et le développement de programmes éducatifs autour de la musique d\'orgue.'
              },
              {
                question: 'Quand l\'orgue sera-t-il terminé ?',
                answer: 'La construction est en cours dans les ateliers PESCE à Pau. L\'installation et l\'harmonisation finale sont prévues selon l\'avancement du projet. Suivez nos actualités pour rester informé.'
              },
              {
                question: 'Comment recevoir ma reconnaissance pour mon parrainage ?',
                answer: 'Pour les parrainages, votre nom sera inscrit sur la plaque commémorative dans l\'église. Pour les parrainages nominatifs, il sera également gravé sur l\'élément parrainé. Contactez-nous pour plus de détails.'
              },
            ].map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer font-semibold text-lg text-accent-blue hover:text-accent-burgundy transition-colors">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MentionsLegalesPage() {
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
            Mentions Légales
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Informations légales concernant le site
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Éditeur du site */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Éditeur du site
              </h2>
              <p className="mb-2">
                Le site <strong>www.orgue-voisins.fr</strong> est édité par l&apos;association :
              </p>
              <p className="mb-2">
                <strong>Les Amis de l&apos;Orgue de Voisins-le-Bretonneux</strong>
              </p>
              <p className="mb-2">
                Association loi 1901<br />
                Siège social : Voisins-le-Bretonneux, France
              </p>
              <p className="mb-2">
                Président : <strong>Olivier Sansoz</strong><br />
                Email : <a href="mailto:contact@orgue-voisins.fr" className="text-accent-blue hover:underline">contact@orgue-voisins.fr</a>
              </p>
            </div>

            {/* Directeur de la publication */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication du site est <strong>Olivier Sansoz</strong>, en sa qualité de Président de l&apos;association.
              </p>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Hébergement
              </h2>
              <p className="mb-2">
                Le site est hébergé par :
              </p>
              <p className="mb-2">
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                Les marques et logos reproduits sur ce site sont déposés par les sociétés qui en sont propriétaires.
              </p>
            </div>

            {/* Protection des données personnelles */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Protection des données personnelles
              </h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse : <a href="mailto:contact@orgue-voisins.fr" className="text-accent-blue hover:underline">contact@orgue-voisins.fr</a>
              </p>
              <p className="mt-4">
                Pour plus d&apos;informations sur la protection de vos données, consultez notre{' '}
                <Link href="/politique-confidentialite" className="text-accent-blue hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Cookies
              </h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être disponibles.
              </p>
            </div>

            {/* Crédits */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Crédits
              </h2>
              <p className="mb-2">
                Conception et développement : Les Amis de l&apos;Orgue de Voisins-le-Bretonneux
              </p>
              <p className="mb-2">
                Photographies : Manufacture PESCE Frères et Fils, Les Amis de l&apos;Orgue
              </p>
              <p>
                Technologies : Next.js, React, TypeScript, Tailwind CSS
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 p-8 glass-strong rounded-2xl">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent-blue">
              Une question ?
            </h3>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant les mentions légales, vous pouvez nous contacter :
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-block"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

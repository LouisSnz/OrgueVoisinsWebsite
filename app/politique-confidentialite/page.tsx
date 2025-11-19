'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PolitiqueConfidentialitePage() {
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
            Politique de Confidentialité
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Protection de vos données personnelles
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <div>
              <p className="text-lg mb-4">
                L&apos;association <strong>Les Amis de l&apos;Orgue de Voisins-le-Bretonneux</strong> accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
              <p className="text-sm text-gray-600 italic">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Responsable du traitement */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Responsable du traitement des données
              </h2>
              <p>
                Le responsable du traitement des données personnelles est :
              </p>
              <p className="mt-4">
                <strong>Les Amis de l&apos;Orgue de Voisins-le-Bretonneux</strong><br />
                Représentée par Olivier Sansoz, Président<br />
                Email : <a href="mailto:contact@orgue-voisins.fr" className="text-accent-blue hover:underline">contact@orgue-voisins.fr</a>
              </p>
            </div>

            {/* Données collectées */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Données personnelles collectées
              </h2>
              <p className="mb-4">
                Nous collectons les données suivantes lorsque vous utilisez notre site :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Formulaire de contact</strong> : nom, prénom, adresse email, message</li>
                <li><strong>Formulaire de don</strong> : nom, prénom, adresse email, montant du don, informations de paiement (traitées de manière sécurisée par notre prestataire de paiement)</li>
                <li><strong>Newsletter</strong> : adresse email</li>
                <li><strong>Formulaire de parrainage</strong> : nom, prénom, adresse email, choix de parrainage</li>
                <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, durée de visite (via cookies)</li>
              </ul>
            </div>

            {/* Finalités du traitement */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Finalités du traitement
              </h2>
              <p className="mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de contact</li>
                <li>Traiter vos dons et émettre les reçus fiscaux</li>
                <li>Gérer les parrainages d&apos;éléments de l&apos;orgue</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Améliorer la navigation sur notre site</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </div>

            {/* Base légale */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Base légale du traitement
              </h2>
              <p className="mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Votre consentement</strong> : pour l&apos;inscription à la newsletter</li>
                <li><strong>L&apos;exécution d&apos;un contrat</strong> : pour le traitement des dons et parrainages</li>
                <li><strong>Notre intérêt légitime</strong> : pour améliorer nos services et notre site</li>
                <li><strong>Une obligation légale</strong> : pour la conservation de certaines données comptables et fiscales</li>
              </ul>
            </div>

            {/* Durée de conservation */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Durée de conservation des données
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Formulaires de contact</strong> : 3 ans à compter du dernier contact</li>
                <li><strong>Dons</strong> : 10 ans (obligation légale comptable)</li>
                <li><strong>Newsletter</strong> : jusqu&apos;à votre désinscription</li>
                <li><strong>Cookies</strong> : 13 mois maximum</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Destinataires des données
              </h2>
              <p className="mb-4">
                Vos données personnelles sont destinées aux services internes de l&apos;association et peuvent être transmises à :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nos prestataires de services (hébergement, paiement en ligne)</li>
                <li>Les autorités administratives ou judiciaires sur réquisition</li>
              </ul>
              <p className="mt-4">
                Aucune donnée n&apos;est vendue ou cédée à des tiers à des fins commerciales.
              </p>
            </div>

            {/* Vos droits */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Vos droits
              </h2>
              <p className="mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
                <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
                <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
                <li><strong>Droit de retirer votre consentement</strong> : pour les traitements basés sur le consentement</li>
              </ul>
              <p className="mt-6">
                Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@orgue-voisins.fr" className="text-accent-blue hover:underline">contact@orgue-voisins.fr</a>
              </p>
              <p className="mt-4">
                Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">www.cnil.fr</a>).
              </p>
            </div>

            {/* Sécurité */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Sécurité des données
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l&apos;accès non autorisé, la divulgation, l&apos;altération ou la destruction. Cependant, aucune transmission de données sur Internet n&apos;est totalement sécurisée.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Cookies
              </h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <p className="mb-4">
                <strong>Types de cookies utilisés :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies nécessaires</strong> : essentiels au fonctionnement du site</li>
                <li><strong>Cookies de performance</strong> : pour analyser l&apos;utilisation du site</li>
              </ul>
              <p className="mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti de leur dépôt.
              </p>
            </div>

            {/* Modification de la politique */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Modification de la politique
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 p-8 glass-strong rounded-2xl">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent-blue">
              Questions concernant vos données ?
            </h3>
            <p className="text-gray-700 mb-4">
              Pour toute question relative à la protection de vos données personnelles :
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

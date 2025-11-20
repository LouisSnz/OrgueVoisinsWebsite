'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CGUPage() {
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
            Conditions Générales d&apos;Utilisation
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Conditions d&apos;utilisation du site
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <div>
              <p className="text-lg mb-4">
                Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation du site internet <strong>www.orgue-voisins.fr</strong> édité par l&apos;association <strong>Les Amis de l&apos;Orgue de Voisins-le-Bretonneux</strong>.
              </p>
              <p className="mb-4">
                En accédant et en utilisant ce site, vous acceptez sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions, nous vous invitons à ne pas utiliser le site.
              </p>
              <p className="text-sm text-gray-600 italic">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Objet du site */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Objet du site
              </h2>
              <p className="mb-4">
                Le site <strong>www.orgue-voisins.fr</strong> a pour objet de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Présenter le projet de construction d&apos;un orgue à l&apos;Église Saint-Joseph-le-Bienveillant</li>
                <li>Informer sur les activités de l&apos;association Les Amis de l&apos;Orgue</li>
                <li>Permettre de soutenir le projet par des dons et parrainages</li>
                <li>Publier les actualités et événements liés au projet</li>
                <li>Faciliter le contact avec l&apos;association</li>
              </ul>
            </div>

            {/* Accès au site */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Accès au site
              </h2>
              <p className="mb-4">
                Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet. Tous les frais supportés par l&apos;utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
              <p className="mb-4">
                L&apos;association se réserve le droit de modifier, suspendre ou interrompre l&apos;accès au site à tout moment et sans préavis, notamment pour des raisons de maintenance, de mise à jour ou pour toute autre raison, sans que cela n&apos;ouvre droit à une quelconque indemnité.
              </p>
              <p>
                L&apos;association met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au site, mais n&apos;est tenue à aucune obligation d&apos;y parvenir.
              </p>
            </div>

            {/* Utilisation du site */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Utilisation du site
              </h2>
              <p className="mb-4">
                L&apos;utilisateur s&apos;engage à utiliser le site de manière loyale et conforme à sa destination. Il est notamment interdit :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>D&apos;utiliser le site à des fins illégales ou frauduleuses</li>
                <li>De porter atteinte aux droits de propriété intellectuelle de l&apos;association</li>
                <li>De diffuser des contenus illicites, diffamatoires, injurieux ou contraires à l&apos;ordre public</li>
                <li>De perturber le fonctionnement du site ou d&apos;y introduire des virus ou programmes malveillants</li>
                <li>De tenter d&apos;accéder de manière non autorisée au site ou à ses systèmes</li>
              </ul>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L&apos;ensemble des éléments du site (structure, textes, images, logos, sons, vidéos, bases de données, etc.) sont protégés par le droit d&apos;auteur, le droit des marques et/ou le droit des bases de données.
              </p>
              <p className="mb-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l&apos;association.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un quelconque de ses éléments sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>

            {/* Contenus utilisateurs */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Contenus utilisateurs
              </h2>
              <p className="mb-4">
                En soumettant des contenus via le formulaire de contact ou tout autre moyen mis à disposition sur le site, l&apos;utilisateur :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Garantit être titulaire de tous les droits nécessaires sur ces contenus</li>
                <li>Autorise l&apos;association à utiliser, reproduire et diffuser ces contenus dans le cadre de ses activités</li>
                <li>S&apos;engage à ce que ces contenus ne portent pas atteinte aux droits de tiers et ne soient pas contraires à la loi</li>
              </ul>
            </div>

            {/* Dons et parrainages */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Dons et parrainages
              </h2>
              <p className="mb-4">
                Les dons effectués via le site sont irrévocables et donnent droit, conformément à la législation en vigueur, à une réduction d&apos;impôt.
              </p>
              <p className="mb-4">
                Un reçu fiscal sera adressé au donateur par email ou par courrier postal.
              </p>
              <p className="mb-4">
                Les parrainages d&apos;éléments de l&apos;orgue sont soumis à des conditions spécifiques détaillées sur la page dédiée. L&apos;association se réserve le droit de refuser tout parrainage sans avoir à se justifier.
              </p>
            </div>

            {/* Liens hypertextes */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Liens hypertextes
              </h2>
              <p className="mb-4">
                Le site peut contenir des liens vers des sites tiers. L&apos;association n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur utilisation.
              </p>
              <p>
                La création de liens vers le site est autorisée sous réserve qu&apos;ils ne portent pas atteinte à l&apos;image de l&apos;association et qu&apos;ils respectent les droits de propriété intellectuelle.
              </p>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Données personnelles
              </h2>
              <p>
                L&apos;utilisation du site implique le traitement de données personnelles. Pour en savoir plus sur la collecte, l&apos;utilisation et la protection de vos données, veuillez consulter notre{' '}
                <Link href="/politique-confidentialite" className="text-accent-blue hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Limitation de responsabilité
              </h2>
              <p className="mb-4">
                L&apos;association s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur le site. Toutefois, elle ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.
              </p>
              <p className="mb-4">
                L&apos;association décline toute responsabilité :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pour les dommages directs ou indirects résultant de l&apos;utilisation du site</li>
                <li>Pour les interruptions ou dysfonctionnements du site</li>
                <li>Pour les virus pouvant infecter l&apos;équipement informatique de l&apos;utilisateur</li>
                <li>Pour l&apos;utilisation faite par l&apos;utilisateur des informations du site</li>
              </ul>
            </div>

            {/* Force majeure */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Force majeure
              </h2>
              <p>
                L&apos;association ne pourra être tenue responsable en cas de force majeure ou d&apos;événement hors de son contrôle (catastrophe naturelle, guerre, grève, panne d&apos;électricité, etc.) qui empêcherait l&apos;exécution de ses obligations.
              </p>
            </div>

            {/* Modification des CGU */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Modification des CGU
              </h2>
              <p>
                L&apos;association se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prendront effet dès leur mise en ligne. Il est donc conseillé de consulter régulièrement cette page.
              </p>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Droit applicable et juridiction
              </h2>
              <p className="mb-4">
                Les présentes CGU sont régies par le droit français.
              </p>
              <p>
                En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes CGU, et à défaut de règlement amiable, les tribunaux français seront seuls compétents.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
                Contact
              </h2>
              <p>
                Pour toute question concernant les présentes CGU, vous pouvez nous contacter :
              </p>
              <p className="mt-4">
                <strong>Les Amis de l&apos;Orgue de Voisins-le-Bretonneux</strong><br />
                Email : <a href="mailto:contact@orgue-voisins.fr" className="text-accent-blue hover:underline">contact@orgue-voisins.fr</a>
              </p>
            </div>
          </div>

          {/* CTA Contact */}
          <div className="mt-12 p-8 glass-strong rounded-2xl">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent-blue">
              Une question sur les CGU ?
            </h3>
            <p className="text-gray-700 mb-4">
              N&apos;hésitez pas à nous contacter pour toute clarification :
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

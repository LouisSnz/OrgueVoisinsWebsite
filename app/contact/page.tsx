'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { User, Mail, MapPin, Map, Car, Train } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your backend or email service
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

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
            Contact
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nous sommes à votre écoute
          </motion.p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue">
                Informations de contact
              </h2>

              <div className="space-y-6">
                <div className="glass-strong rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <User className="w-10 h-10 text-accent-blue" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Contact principal</h3>
                      <p className="text-gray-700">Olivier Sansoz</p>
                      <p className="text-gray-600 text-sm">Président de l&apos;association</p>
                    </div>
                  </div>
                </div>

                <div className="glass-strong rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <Mail className="w-10 h-10 text-accent-blue" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:contact@orgue-voisins.fr"
                        className="text-accent-blue hover:underline text-lg"
                      >
                        contact@orgue-voisins.fr
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        Nous répondons généralement sous 48h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-strong rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <MapPin className="w-10 h-10 text-accent-blue" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                      <p className="text-gray-700">Église Saint-Joseph-le-Bienveillant</p>
                      <p className="text-gray-700">Voisins-le-Bretonneux</p>
                      <p className="text-gray-700">Yvelines (78)</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-accent-blue">
                    Horaires d&apos;ouverture
                  </h3>
                  <p className="text-gray-700 mb-2">
                    L&apos;église est ouverte aux horaires des célébrations et événements.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pour visiter l&apos;orgue ou en savoir plus, contactez-nous par email.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="text-3xl font-serif font-bold mb-6 text-accent-blue">
                  Envoyez-nous un message
                </h2>

                {isSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                    <p className="font-semibold">Message envoyé avec succès!</p>
                    <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('name', { required: 'Le nom est requis' })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('email', {
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Adresse email invalide'
                        }
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="votre@email.fr"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('subject', { required: 'Veuillez sélectionner un sujet' })}
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="general">Question générale</option>
                      <option value="donation">Question sur les dons</option>
                      <option value="sponsorship">Parrainage</option>
                      <option value="event">Information sur un événement</option>
                      <option value="press">Demande presse</option>
                      <option value="other">Autre</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Le message est requis',
                        minLength: {
                          value: 10,
                          message: 'Le message doit contenir au moins 10 caractères'
                        }
                      })}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
                      placeholder="Votre message..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Privacy Checkbox */}
                  <div>
                    <label className="flex items-start">
                      <input
                        {...register('privacy', {
                          required: 'Vous devez accepter la politique de confidentialité'
                        })}
                        type="checkbox"
                        className="mt-1 mr-2"
                      />
                      <span className="text-sm text-gray-700">
                        J&apos;accepte la politique de confidentialité et autorise le traitement de mes données personnelles <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="text-red-500 text-sm mt-1">{errors.privacy.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-primary w-full">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-accent-blue text-center">
            Nous trouver
          </h2>
          <div className="card">
            <div className="aspect-video bg-gradient-brown rounded-lg flex items-center justify-center text-white">
              <div className="text-center">
                <Map className="w-24 h-24 mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-xl font-semibold mb-2">Église Saint-Joseph-le-Bienveillant</p>
                <p className="mb-4">Voisins-le-Bretonneux, Yvelines (78)</p>
                <a
                  href="https://www.google.com/maps/search/Église+Saint-Joseph-le-Bienveillant+Voisins-le-Bretonneux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block bg-white/20 border-white hover:bg-white hover:text-accent-blue"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="gradient-warm p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Car className="w-5 h-5 mr-2" strokeWidth={1.5} /> En voiture
                </h4>
                <p className="text-sm text-gray-700">
                  Parking disponible à proximité de l&apos;église.
                  Accès facile depuis la N12 et l&apos;A86.
                </p>
              </div>
              <div className="gradient-warm p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Train className="w-5 h-5 mr-2" strokeWidth={1.5} /> Transports en commun
                </h4>
                <p className="text-sm text-gray-700">
                  Bus et RER à proximité. Gare de Saint-Quentin-en-Yvelines accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
            Newsletter
          </h2>
          <p className="text-gray-700 mb-8">
            Recevez nos actualités et les annonces de nos événements directement dans votre boîte mail.
          </p>
          <div className="card max-w-5xl mx-auto">
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                required
              />
              <button type="submit" className="btn-primary">
                S&apos;inscrire à la newsletter
              </button>
              <p className="text-xs text-gray-500">
                Nous envoyons des mises à jour occasionnelles. Pas de spam.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

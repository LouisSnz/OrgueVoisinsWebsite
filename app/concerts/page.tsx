'use client';

import { motion } from 'framer-motion';

export default function ConcertsPage() {
  const upcomingEvents = [
    {
      id: '1',
      date: '13',
      month: 'JUIN',
      year: '2025',
      title: 'Concert de l\'Orchestre de l\'académie de Versailles',
      description: 'Un concert exceptionnel avec l\'orchestre de l\'académie de Versailles. Un programme varié alliant œuvres classiques et contemporaines.',
      location: 'Église Saint-Joseph le Bienveillant, Voisins-le-Bretonneux',
      time: '20h00',
      color: 'bg-accent-burgundy'
    },
    {
      id: '2',
      date: '09',
      month: 'FÉV',
      year: '2025',
      title: 'Les Petits Chanteurs de la Croix du Bois',
      description: 'Concert des célèbres Petits Chanteurs de la Croix du Bois. Une soirée exceptionnelle de musique sacrée avec ce chœur d\'enfants de renommée internationale.',
      location: 'Église Saint-Joseph le Bienveillant, Voisins-le-Bretonneux',
      time: '18h00',
      color: 'bg-accent-blue'
    },
    {
      id: '3',
      date: '18',
      month: 'JAN',
      year: '2025',
      title: 'Concert avec les Chœurs Cadences et Viva Voce',
      description: 'Concert avec les chœurs Cadences et Viva Voce. Un programme de chants polyphoniques et œuvres chorales.',
      location: 'Église Saint-Joseph le Bienveillant, Voisins-le-Bretonneux',
      time: '17h00',
      color: 'bg-wood'
    },
  ];

  const pastEvents = [
    {
      title: 'Concert inaugural de la saison',
      date: 'Octobre 2024',
      description: 'Lancement de la saison musicale avec un concert d\'orgue et chœur.'
    },
    {
      title: 'Présentation du projet',
      date: 'Septembre 2024',
      description: 'Présentation publique du projet d\'orgue et visite virtuelle des ateliers.'
    },
  ];

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
            Concerts & Événements
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Découvrez notre programmation culturelle
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-accent-blue text-center">
            Prochains événements
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  {/* Date Card */}
                  <div className={`${event.color} text-white rounded-lg p-6 text-center flex flex-col justify-center`}>
                    <div className="text-5xl font-bold mb-2">{event.date}</div>
                    <div className="text-xl mb-1">{event.month}</div>
                    <div className="text-lg opacity-90">{event.year}</div>
                  </div>

                  {/* Event Details */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-accent-blue">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600 flex items-center">
                        <span className="mr-2">📍</span>
                        {event.location}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <span className="mr-2">🕐</span>
                        {event.time}
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {event.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href={`mailto:contact@orgue-voisins.fr?subject=Réservation - ${event.title}`}
                        className="btn-secondary inline-block"
                      >
                        Réserver / Plus d&apos;infos
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className="py-16 px-4 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="card">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent-blue">
              Informations pratiques
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">📍 Lieu</h4>
                <p>Église Saint-Joseph-le-Bienveillant</p>
                <p>Voisins-le-Bretonneux, Yvelines (78)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎫 Entrée</h4>
                <p>
                  La plupart de nos concerts sont à entrée libre, avec participation
                  libre au profit de l&apos;association. Certains événements peuvent
                  nécessiter une réservation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🚗 Accès & Parking</h4>
                <p>Parking disponible à proximité de l&apos;église.</p>
                <p>Accès en transport en commun : Bus et RER à proximité.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📧 Contact</h4>
                <p>
                  Pour plus d&apos;informations :{' '}
                  <a href="mailto:contact@orgue-voisins.fr" className="text-accent-blue hover:underline">
                    contact@orgue-voisins.fr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-accent-blue text-center">
            Événements passés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-accent-blue font-semibold mb-2">{event.date}</p>
                <h3 className="text-xl font-serif font-bold mb-3">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-accent-blue">
            Restez informé
          </h2>
          <p className="text-gray-700 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les annonces de nos prochains
            concerts et événements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-accent-blue"
            />
            <button className="btn-primary">
              S&apos;inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

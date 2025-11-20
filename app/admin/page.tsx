'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Load Netlify Identity Widget
    const identityScript = document.createElement('script')
    identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    document.head.appendChild(identityScript)

    // Load Decap CMS
    const cmsScript = document.createElement('script')
    cmsScript.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    cmsScript.onload = () => {
      // Initialize CMS with inline config
      if (window.CMS) {
        window.CMS.init({
          config: {
            backend: {
              name: 'git-gateway',
              branch: 'main'
            },
            local_backend: true,
            media_folder: 'public/images',
            public_folder: '/images',
            locale: 'fr',
            collections: [
              {
                name: 'actualites',
                label: 'Actualités',
                folder: 'content/actualites',
                create: true,
                slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
                fields: [
                  { label: 'Titre', name: 'title', widget: 'string' },
                  { label: 'Date de publication', name: 'date', widget: 'datetime' },
                  { label: 'Extrait', name: 'excerpt', widget: 'text' },
                  { label: 'Image principale', name: 'image', widget: 'image' },
                  { label: 'Contenu', name: 'body', widget: 'markdown' },
                  { label: 'Catégorie', name: 'category', widget: 'select', options: ['Actualité', 'Construction', 'Événement', 'Annonce'] },
                  { label: 'Publié', name: 'published', widget: 'boolean', default: true }
                ]
              },
              {
                name: 'concerts',
                label: 'Concerts & Événements',
                folder: 'content/concerts',
                create: true,
                slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
                fields: [
                  { label: 'Titre', name: 'title', widget: 'string' },
                  { label: 'Date de l\'événement', name: 'eventDate', widget: 'datetime' },
                  { label: 'Heure', name: 'time', widget: 'string', default: '20h00' },
                  { label: 'Lieu', name: 'location', widget: 'string', default: 'Église Saint-Joseph le Bienveillant' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Image', name: 'image', widget: 'image', required: false },
                  { label: 'Détails', name: 'body', widget: 'markdown', required: false },
                  { label: 'Lien billetterie', name: 'ticketLink', widget: 'string', required: false },
                  { label: 'Prix', name: 'price', widget: 'string', required: false, default: 'Entrée libre' },
                  { label: 'Publié', name: 'published', widget: 'boolean', default: true },
                  { label: 'Type', name: 'eventType', widget: 'select', options: ['Concert', 'Conférence', 'Visite', 'Festival', 'Autre'] }
                ]
              },
              {
                name: 'pages',
                label: 'Pages',
                files: [
                  {
                    label: 'Page d\'accueil',
                    name: 'home',
                    file: 'content/pages/home.md',
                    fields: [
                      { label: 'Titre hero', name: 'heroTitle', widget: 'string' },
                      { label: 'Sous-titre hero', name: 'heroSubtitle', widget: 'text' },
                      { label: 'Image hero', name: 'heroImage', widget: 'image' },
                      { label: 'Section Vision - Titre', name: 'visionTitle', widget: 'string' },
                      { label: 'Section Vision - Texte', name: 'visionText', widget: 'text' },
                      {
                        label: 'Cartes Vision',
                        name: 'visionCards',
                        widget: 'list',
                        fields: [
                          { label: 'Titre', name: 'title', widget: 'string' },
                          { label: 'Description', name: 'description', widget: 'text' },
                          { label: 'Icône', name: 'icon', widget: 'select', options: ['Music', 'Sparkles', 'Theater'] }
                        ]
                      }
                    ]
                  },
                  {
                    label: 'L\'Association',
                    name: 'association',
                    file: 'content/pages/association.md',
                    fields: [
                      { label: 'Mission - Titre', name: 'missionTitle', widget: 'string' },
                      { label: 'Mission - Texte', name: 'missionText', widget: 'markdown' },
                      { label: 'Histoire - Titre', name: 'historyTitle', widget: 'string' },
                      { label: 'Histoire - Texte', name: 'historyText', widget: 'markdown' },
                      {
                        label: 'Équipe',
                        name: 'team',
                        widget: 'list',
                        fields: [
                          { label: 'Nom', name: 'name', widget: 'string' },
                          { label: 'Rôle', name: 'role', widget: 'string' },
                          { label: 'Description', name: 'description', widget: 'text' },
                          { label: 'Photo', name: 'photo', widget: 'image', required: false }
                        ]
                      }
                    ]
                  },
                  {
                    label: 'Le Projet',
                    name: 'projet',
                    file: 'content/pages/projet.md',
                    fields: [
                      { label: 'Description', name: 'description', widget: 'markdown' },
                      { label: 'Nombre de tuyaux', name: 'pipes', widget: 'number', default: 1071 },
                      { label: 'Nombre de registres', name: 'registers', widget: 'number', default: 41 },
                      { label: 'Nombre de claviers', name: 'keyboards', widget: 'number', default: 3 },
                      {
                        label: 'Galerie photos',
                        name: 'gallery',
                        widget: 'list',
                        fields: [
                          { label: 'Image', name: 'image', widget: 'image' },
                          { label: 'Légende', name: 'caption', widget: 'string' }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: 'settings',
                label: 'Paramètres',
                files: [
                  {
                    label: 'Informations générales',
                    name: 'general',
                    file: 'content/settings/general.json',
                    fields: [
                      { label: 'Nom de l\'association', name: 'siteName', widget: 'string' },
                      { label: 'Email de contact', name: 'contactEmail', widget: 'string' },
                      { label: 'Président', name: 'president', widget: 'string' },
                      { label: 'Adresse', name: 'address', widget: 'text' },
                      {
                        label: 'Réseaux sociaux',
                        name: 'social',
                        widget: 'object',
                        fields: [
                          { label: 'Facebook', name: 'facebook', widget: 'string', required: false },
                          { label: 'Instagram', name: 'instagram', widget: 'string', required: false },
                          { label: 'YouTube', name: 'youtube', widget: 'string', required: false }
                        ]
                      },
                      {
                        label: 'Progression des dons',
                        name: 'donations',
                        widget: 'object',
                        fields: [
                          { label: 'Montant collecté', name: 'collected', widget: 'number' },
                          { label: 'Objectif', name: 'goal', widget: 'number', required: false },
                          { label: 'Afficher l\'objectif', name: 'showGoal', widget: 'boolean', default: false }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        })
      }
    }
    document.head.appendChild(cmsScript)

    // Initialize Netlify Identity
    identityScript.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', (user: any) => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/'
            })
          }
        })
      }
    }

    return () => {
      // Cleanup scripts on unmount
      identityScript.remove()
      cmsScript.remove()
    }
  }, [])

  return <div id="nc-root" />
}

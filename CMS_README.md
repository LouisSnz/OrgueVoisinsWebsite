# Guide d'utilisation du CMS

## Introduction

Le site dispose d'un système de gestion de contenu (CMS) qui permet de modifier facilement le contenu du site sans avoir besoin de connaissances techniques.

## Accès au CMS

1. **URL d'administration** : Allez sur `https://votre-site.com/admin`
2. **Connexion** : Utilisez votre compte Netlify Identity pour vous connecter

## Fonctionnalités disponibles

### 1. Gestion des Actualités

Créez, modifiez et publiez des articles d'actualité :

- **Titre** : Le titre de l'actualité
- **Date de publication** : Date de publication de l'article
- **Extrait** : Courte description affichée sur la page d'accueil
- **Image principale** : Image principale de l'article
- **Contenu** : Contenu complet de l'article (format Markdown)
- **Catégorie** : Type d'actualité (Actualité, Construction, Événement, Annonce)
- **Publié** : Activer/désactiver la publication

### 2. Gestion des Concerts & Événements

Ajoutez et gérez vos événements :

- **Titre** : Nom de l'événement
- **Date de l'événement** : Date et heure de l'événement
- **Heure** : Heure de début (ex: "20h00")
- **Lieu** : Lieu de l'événement
- **Description** : Description courte
- **Image** : Image de l'événement (optionnel)
- **Détails** : Informations détaillées (format Markdown)
- **Lien billetterie** : Lien vers la billetterie si disponible
- **Prix** : Information sur le prix ("Entrée libre", "10€", etc.)
- **Type** : Type d'événement (Concert, Conférence, Visite, Festival, Autre)

### 3. Gestion des Pages

Modifiez le contenu des pages principales :

#### Page d'accueil
- Titre et sous-titre du hero
- Image de fond
- Section Vision (titre, texte, cartes)

#### Page L'Association
- Mission et histoire
- Membres de l'équipe

#### Page Le Projet
- Description du projet
- Spécifications techniques
- Galerie de photos

### 4. Paramètres généraux

Modifiez les informations générales du site :

- **Nom de l'association**
- **Email de contact**
- **Président**
- **Adresse**
- **Réseaux sociaux** (Facebook, Instagram, YouTube)
- **Progression des dons**
  - Montant collecté
  - Objectif (optionnel)
  - Affichage de l'objectif

## Comment créer un nouvel article d'actualité

1. Connectez-vous au CMS (`/admin`)
2. Cliquez sur "Actualités" dans le menu
3. Cliquez sur "New Actualités"
4. Remplissez les champs :
   - Titre
   - Date de publication
   - Extrait (environ 150 caractères)
   - Téléchargez une image
   - Écrivez le contenu en Markdown
   - Choisissez une catégorie
   - Cochez "Publié" pour le rendre visible
5. Cliquez sur "Publish" puis "Publish now"
6. L'article apparaîtra automatiquement sur le site

## Comment ajouter un événement

1. Connectez-vous au CMS (`/admin`)
2. Cliquez sur "Concerts & Événements"
3. Cliquez sur "New Concerts & Événements"
4. Remplissez les informations de l'événement
5. Cliquez sur "Publish"
6. L'événement apparaîtra sur la page des concerts

## Comment modifier la page d'accueil

1. Connectez-vous au CMS
2. Cliquez sur "Pages"
3. Cliquez sur "Page d'accueil"
4. Modifiez les champs souhaités
5. Cliquez sur "Publish"

## Format Markdown

Le contenu des articles utilise le format Markdown. Voici quelques exemples :

```markdown
# Titre niveau 1
## Titre niveau 2
### Titre niveau 3

**Texte en gras**
*Texte en italique*

- Liste à puces
- Item 2
- Item 3

1. Liste numérotée
2. Item 2
3. Item 3

[Lien](https://example.com)

![Image](/images/mon-image.jpg)
```

## Gestion des images

### Télécharger une image
1. Dans le CMS, cliquez sur le champ image
2. Cliquez sur "Choose an image"
3. Soit choisissez une image existante, soit téléchargez une nouvelle image
4. Les images sont automatiquement stockées dans `/public/images/`

### Bonnes pratiques
- Utilisez des images de qualité (min. 1200px de largeur)
- Compressez les images avant de les télécharger
- Nommez vos images de manière descriptive (ex: `concert-juin-2025.jpg`)
- Format recommandé : JPG pour les photos, PNG pour les logos

## Workflow Git

Le CMS sauvegarde automatiquement les modifications dans votre dépôt Git :

1. Chaque modification crée un commit
2. Les changements sont automatiquement poussés vers la branche configurée
3. Le site se reconstruit automatiquement après chaque modification

## Support technique

Pour toute question ou problème technique :
- Email : contact@orgue-voisins.fr
- Documentation Decap CMS : https://decapcms.org/docs/

## Configuration avancée

Le fichier de configuration du CMS se trouve dans `/public/admin/config.yml`.

Pour modifier la configuration :
1. Éditez le fichier `config.yml`
2. Committez et poussez les changements
3. Le CMS utilisera automatiquement la nouvelle configuration

## Notes importantes

- Toujours cliquer sur "Publish" pour sauvegarder vos modifications
- Les brouillons sont sauvegardés mais pas publiés sur le site
- Vous pouvez prévisualiser le contenu avant de publier
- Les modifications peuvent prendre quelques minutes pour apparaître sur le site (temps de reconstruction)

## Astuces

1. **Prévisualisation** : Utilisez le mode prévisualisation pour voir le résultat avant de publier
2. **Brouillons** : Sauvegardez en tant que brouillon si vous n'êtes pas prêt à publier
3. **Organisation** : Utilisez des noms de fichiers cohérents avec des dates (AAAA-MM-JJ-titre)
4. **SEO** : Remplissez toujours l'extrait pour améliorer le référencement

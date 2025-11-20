# Guide d'utilisation du CMS - Un Orgue pour Voisins

Ce site utilise **Static CMS** pour gérer le contenu facilement, sans avoir besoin de modifier le code directement.

## Accès au CMS

### En développement local

1. Démarrer le serveur local:
   ```bash
   npm run dev
   ```

2. Démarrer le proxy backend pour Static CMS (dans un autre terminal):
   ```bash
   npx @staticcms/proxy-server
   ```

3. Ouvrir le CMS dans votre navigateur:
   ```
   http://localhost:3000/admin
   ```

### En production (après déploiement)

1. Aller sur `https://votre-site.com/admin`
2. Se connecter avec les identifiants Netlify Identity (ou autre backend configuré)

## Utilisation du CMS

### 📰 Gérer les Actualités

- Dans le menu latéral, cliquer sur "Actualités"
- Pour créer une nouvelle actualité:
  - Cliquer sur "Nouvelle actualité"
  - Remplir le formulaire (titre, date, extrait, image, contenu)
  - Choisir une catégorie
  - Publier en cochant "Publié"
  - Cliquer sur "Sauvegarder"

### 🎵 Gérer les Concerts & Événements

- Dans le menu latéral, cliquer sur "Concerts & Événements"
- Pour créer un nouvel événement:
  - Cliquer sur "Nouveau concert"
  - Remplir les informations (titre, date, heure, lieu, description)
  - Ajouter une image si disponible
  - Indiquer le prix et le lien billetterie si applicable
  - Cliquer sur "Sauvegarder"

### 📄 Modifier les Pages

- Dans le menu latéral, cliquer sur "Pages"
- Choisir la page à modifier (Accueil, Association, Projet)
- Éditer le contenu en Markdown
- Cliquer sur "Sauvegarder"

### ⚙️ Paramètres Généraux

- Dans le menu latéral, cliquer sur "Paramètres"
- Modifier:
  - Informations de l'association (nom, email, président, adresse)
  - Liens des réseaux sociaux
  - Progression des dons (montant collecté, objectif)
- Cliquer sur "Sauvegarder"

## Format Markdown

Le CMS utilise le format Markdown pour le contenu. Voici quelques exemples:

```markdown
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3

**Texte en gras**
*Texte en italique*

- Liste à puces
- Deuxième élément

1. Liste numérotée
2. Deuxième élément

[Texte du lien](https://example.com)

![Texte alternatif de l'image](/images/mon-image.jpg)
```

## Workflow Git

Lorsque vous sauvegardez du contenu dans le CMS:

1. Les modifications sont committées dans le dépôt Git
2. Le site est automatiquement redéployé (si configuré avec Netlify/Vercel)
3. Les modifications apparaissent sur le site en quelques minutes

## Besoin d'aide?

Pour toute question ou problème:
- Consulter la [documentation de Static CMS](https://www.staticcms.org/docs)
- Contacter l'administrateur technique du site

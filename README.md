# Les Amis de l'Orgue - Website

A modern, elegant website for the "Les Amis de l'Orgue" association, supporting the construction of an exceptional organ at Église Saint-Joseph-le-Bienveillant in Voisins-le-Bretonneux, France.

## 🎵 About the Project

This website showcases the organ construction project, promotes concerts and cultural events, and facilitates donations and sponsorships for the association.

## ✨ Features

- **Modern Design**: Glassmorphism effects, smooth gradients, and elegant typography
- **Responsive**: Mobile-first approach, seamless across all devices
- **SEO Optimized**: Proper meta tags, sitemap, and structured data
- **Performance**: Built with Next.js for optimal loading speeds
- **Accessible**: WCAG compliant design
- **Multilingual Ready**: Built with French as the primary language

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Fonts**: Playfair Display (serif) & Inter (sans-serif)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LouisSnz/OrgueVoisinsWebsite.git
cd OrgueVoisinsWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
OrgueVoisinsWebsite/
├── app/                      # Next.js app directory
│   ├── association/         # About page
│   ├── actualites/          # News page
│   ├── projet/              # Project details page
│   ├── concerts/            # Events page
│   ├── soutenir/            # Support/Donation page
│   ├── parrainage/          # Sponsorship page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── sitemap.ts           # SEO sitemap
├── components/              # Reusable components
│   ├── Navigation.tsx       # Header navigation
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
│   ├── images/              # Image files
│   └── robots.txt           # SEO robots file
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Design System

### Color Palette

- **Primary (Wood Tones)**:
  - Light: `#D4A574`
  - Default: `#C8A882`
  - Dark: `#8B6F47`

- **Secondary (Browns)**:
  - Light: `#5D4E37`
  - Default: `#4A3728`

- **Accent Colors**:
  - Blue: `#2C3E50`
  - Burgundy: `#8B4049`

- **Neutrals**:
  - Cream: `#F5F5DC`
  - Light Gray: `#E8E8E8`
  - Charcoal: `#333333`

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Scale**: H1: 48px, H2: 36px, H3: 28px, Body: 16-18px

## 📄 Pages

1. **Accueil (Home)** - Hero section, project overview, latest news
2. **L'Association** - Mission, history, team, church information
3. **Actualités** - News articles and construction updates
4. **Le Projet** - Organ specifications, manufacturer info, gallery
5. **Concerts & Événements** - Upcoming and past events
6. **Nous Soutenir** - Donation options and support methods
7. **Parrainage** - Pipe sponsorship details and pricing
8. **Contact** - Contact form and location information

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any API keys or environment-specific variables here
# NEXT_PUBLIC_SITE_URL=https://orgue-voisins.fr
```

### Update Content

Most content is currently hardcoded in the page components. For a production setup, consider:

- Integrating a headless CMS (Contentful, Strapi, or WordPress)
- Setting up a database for dynamic content
- Implementing an admin panel for content management

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to:
- Netlify
- Railway
- AWS Amplify
- Any platform supporting Next.js

## 🎯 Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100

## 📝 Content Management

For non-technical staff to manage content, consider integrating:

1. **Strapi** (self-hosted, free)
2. **Contentful** (cloud-based, free tier available)
3. **WordPress** (with headless API)

This would allow easy updates to:
- News articles
- Event information
- Donation progress
- Photo galleries
- Team members

## 🤝 Contributing

This is a project for the "Les Amis de l'Orgue" association. For contributions or suggestions:

1. Contact: contact@orgue-voisins.fr
2. Create an issue for bugs or feature requests

## 📧 Contact

**Les Amis de l'Orgue**
- Email: contact@orgue-voisins.fr
- Website: https://orgue-voisins.fr
- Contact: Olivier Sansoz (President)

## 📄 License

Copyright © 2025 Les Amis de l'Orgue - Voisins-le-Bretonneux

## 🙏 Acknowledgments

- **PESCE Frères et Fils** - Organ manufacturers
- **Père Paul Valentin CSC** - Artistic advisor
- **Église Saint-Joseph-le-Bienveillant** - Host church
- All donors and supporters of the project

---

**Built with ❤️ for the love of organ music and cultural heritage**

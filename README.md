# Manoutech – Studio Technologique

Site web officiel de **Manoutech**, un studio technologique qui construit des produits **web, mobiles et data** rapides à déployer.

**URL:** [manoutech.com](https://manoutech.com)

---

## 🚀 Features

- **Produits Web** – SaaS B2B/B2C, dashboards, APIs robustes et scalables
- **Apps Mobiles** – React Native performantes, iOS & Android
- **Data & AI** – Pipelines data, LLM ops, copilots métier
- **Product Ops** – Analytics, growth loops, SEO
- **DevOps & Infrastructure** – Kubernetes, Docker, CI/CD, monitoring
- **Services Additionnels** – UX/Design, Conseil & Strategy, Testing, Support 24/7, Sécurité, Intégrations

### Pages Principales

| Page | Description |
|------|-------------|
| `/` | Landing page hero avec Services Grid |
| `/services` | Tous les services avec détails complets |
| `/equipe` | Profils des membres de l'équipe |
| `/projects` | Cas d'usage et projets réalisés |
| `/blog` | Articles technologiques et insights |
| `/contact` | Formulaire de contact |
| `/pricing` | Plans tarifaires |
| `/stack` | Tech stack utilisée |
| `/careers` | Offres d'emploi |

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 16.1.6, React 19.2.3 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4, CSS Modules |
| **Content** | Contentlayer (MDX) |
| **Email** | Resend |
| **Icons** | Lucide React |
| **Package Manager** | Yarn 1.22.19 |
| **Deployment** | Vercel |

---

## 📦 Installation

### Prérequis
- **Node.js** 18+ 
- **Yarn** 1.22.19+

### Setup Local

```bash
# Cloner le repo
git clone https://github.com/7emma/manoutech.git
cd manoutech

# Installer les dépendances
yarn install

# Lancer le dev server
yarn dev
```

Le site sera accessible à **[http://localhost:3000](http://localhost:3000)**

---

## 🚀 Développement

### Scripts Disponibles

```bash
# Dev server (hot reload)
yarn dev

# Build pour production
yarn build

# Lancer le build produit
yarn start

# Linter (ESLint)
yarn lint

# Compiler le contenu (Contentlayer)
yarn content
```

### Structure du Projet

```
manoutech/
├── app/                    # Next.js app router
│   ├── page.tsx           # Landing page
│   ├── services/          # Services page
│   ├── equipe/            # Team page
│   ├── projects/          # Projects/cases page
│   ├── blog/              # Blog listing
│   ├── contact/           # Contact form
│   ├── careers/           # Careers page
│   ├── pricing/           # Pricing page
│   ├── stack/             # Tech stack page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles + CSS variables
├── components/            # React components
│   ├── Hero.tsx           # Hero section
│   ├── ServicesGrid.tsx   # Services showcase
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── BlogList.tsx       # Blog listing
│   └── ...
├── styles/                # Global stylesheets
│   ├── hero.css
│   ├── services.css
│   └── ...
├── mockdata/              # Data mocking
│   ├── services.ts        # Services definitions
│   ├── equipe.ts          # Team members
│   ├── projects.ts        # Project cases
│   ├── pricing.ts         # Pricing plans
│   ├── blog.ts            # Blog posts
│   └── ...
├── content/               # MDX content files
├── lib/                   # Utilities
│   └── site.ts            # Site configuration
├── types/                 # TypeScript types
├── public/                # Static assets
├── contentlayer.config.ts # Contentlayer config
├── next.config.ts         # Next.js config
├── tailwind.config.ts     # Tailwind config
├── tsconfig.json          # TypeScript config
└── package.json
```

### Variables CSS Globales

Les couleurs brand sont définies dans `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --brand-dark-blue: #242675;
  --brand-dark-gray: #3E4347;
  --brand-light-gray: #7A7F84;
  --primary: #242675;
  --accent: #3E4347;
  --neutral: #7A7F84;
}
```

### Ajouter une Nouvelle Page

1. Créer un dossier dans `app/` (ex: `app/nouvelle-page/`)
2. Ajouter `page.tsx` avec le contenu
3. Optionnel: créer un fichier CSS dans `styles/`

```tsx
// app/nouvelle-page/page.tsx
export default function NouvellePage() {
  return (
    <div>
      <h1>Nouvelle Page</h1>
    </div>
  );
}
```

### Ajouter un Nouveau Service

Éditer `mockdata/services.ts`:

```typescript
{
  id: "mon-service",
  icon: "⬡",
  label: "Mon Service",
  title: "Mon Service Complet",
  tagline: "Sous-titre",
  desc: "Description complète...",
  accent: "#242675",
  tags: ["Tag1", "Tag2"],
  points: ["Point 1", "Point 2"],
  stat: { val: "42%", unit: "croissance", label: "moyenne" },
}
```

---

## 📝 Content Management

### Blog & Articles (MDX)

Les articles sont stockés dans `content/` et gérés via **Contentlayer**.

Créer un nouvel article:

```bash
touch content/mon-article.mdx
```

```mdx
---
title: "Mon Article"
date: "2026-03-11"
description: "Description pour SEO"
tags: ["typescript", "react"]
---

# Contenu du article

Votre contenu en Markdown...
```

Compiler les changements:
```bash
yarn content
```

### Données Mock

Toutes les données dynamiques sont dans `mockdata/`:
- `services.ts` – Services/offres
- `equipe.ts` – Team members
- `projects.ts` – Case studies
- `blog.ts` – Articles
- `pricing.ts` – Plans tarifaires
- `careers.ts` – Job offers
- `stack.ts` – Tech stack

---

## 🔗 Integration

### Email (Resend)

Les formulaires utilisent **Resend** pour l'envoi d'emails. Configuration dans les routes API:

```bash
# Ajouter votre clé API Resend
export RESEND_API_KEY=your_key_here
```

### Analytics (Optionnel)

À intégrer: Vercel Analytics, Mixpanel, ou Google Analytics.

---

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Push vers GitHub
git push origin main

# Le déploiement auto se déclenche sur Vercel
```

### Build Manual

```bash
yarn build
yarn start
```

---

## 🎨 Design System

### Couleurs Brand
- **Dark Blue**: `#242675` – Primary color
- **Dark Gray**: `#3E4347` – Secondary text
- **Light Gray**: `#7A7F84` – Tertiary text
- **White**: `#ffffff` – Background

### Typographie
- **Headings**: Space Grotesk (variable)
- **Body**: Space Grotesk / DM Sans (modulable)
- **Monospace**: DM Mono (code)

### Composants Réutilisables
- `Hero` – Section hero
- `ServicesGrid` – Grid des services (accueil)
- `BlogList` – Listing blog
- `Header` – Navigation
- `Footer` – Pied de page

---

## 🧪 Testing & Quality

### Linting

```bash
yarn lint
```

### TypeScript Check

```bash
npx tsc --noEmit
```

---

## 📋 Checklist Avant Prod

- [ ] Remplacer les images placeholder (`public/`)
- [ ] Mettre à jour les profils équipe (`mockdata/equipe.ts`)
- [ ] Ajouter vrais projets (`mockdata/projects.ts`)
- [ ] Configurer Resend API key
- [ ] Vérifier tous les liens (LinkedIn, email, etc.)
- [ ] Tester formulaires (contact, newsletter)
- [ ] Audit SEO (meta descriptions, Open Graph)
- [ ] Audit Lighthouse (performance, accessibility)
- [ ] Tester sur mobile
- [ ] Mettre à jour Privacy Policy & Terms

---

## 🤝 Contribution

1. Fork le repo
2. Créer une branche feature (`git checkout -b feature/ma-feature`)
3. Commit (`git commit -m "Ajouter ma-feature"`)
4. Push (`git push origin feature/ma-feature`)
5. Ouvrir une Pull Request

---

## 📞 Contact

- **Email**: hello@manoutech.com
- **LinkedIn**: [Manoutech](https://www.linkedin.com)
- **Site**: [manoutech.com](https://manoutech.com)

---

## 📄 Licence

Propriétaire – Manoutech Corp. Tous droits réservés.

---

## 🙋 Support

Pour toute question ou bug, ouvrir une issue dans le repo GitHub.

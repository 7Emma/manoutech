# ✅ Setup Checklist - Admin System

## Phase 1: Configuration Services Externes

### Supabase Database
- [ ] Créer compte sur https://supabase.com
- [ ] Créer nouveau projet
- [ ] Aller à "SQL Editor" → "New Query"
- [ ] Copier le contenu de `db-setup.sql`
- [ ] Exécuter le script (bouton ▶)
- [ ] Aller à "SQL Editor" → "New Query"
- [ ] Copier le contenu de `db-functions.sql`
- [ ] Exécuter le script (bouton ▶)
- [ ] Aller à "Settings" → "API"
- [ ] Copier `Project URL` → Coller dans `.env.local` comme `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Copier `Service Role Key` (attention: secret!) → Coller comme `SUPABASE_SERVICE_ROLE_KEY`

### Resend (Email)
- [ ] Créer compte sur https://resend.com
- [ ] Créer/copier la clé API
- [ ] Coller dans `.env.local` comme `RESEND_API_KEY`

## Phase 2: Variables d'Environnement

- [ ] Créer fichier `.env.local` à la racine du projet
- [ ] Remplir avec:
```
NEXT_PUBLIC_SUPABASE_URL=<from Supabase>
SUPABASE_SERVICE_ROLE_KEY=<from Supabase>
RESEND_API_KEY=<from Resend>
ADMIN_EMAIL=your-email@example.com
NEXT_PUBLIC_ADMIN_PASSWORD=strong_password_123
NEXT_PUBLIC_URL=http://localhost:3000
NODE_ENV=development
```

## Phase 3: Installation Dépendances

- [ ] `yarn install` (si pas déjà fait)
- [ ] Vérifier que `@supabase/supabase-js`, `zod`, `resend` sont dans `package.json`

## Phase 4: Test Local

- [ ] Lancer: `yarn dev`
- [ ] Vérifier que le serveur démarre sans erreurs
- [ ] Aller à http://localhost:3000/admin/login
- [ ] Entrer le mot de passe défini dans `NEXT_PUBLIC_ADMIN_PASSWORD`
- [ ] Vérifier qu'on peut accéder au dashboard
- [ ] Vérifier que le logout fonctionne

## Phase 5: Intégrer les Formulaires

### Contact Form
- [ ] Utiliser `ContactFormNew.tsx` ou adapter ton formulaire existant
- [ ] Vérifier que ça envoie à POST `/api/contact`
- [ ] Tester: Soumettre un message
- [ ] Vérifier en admin → Messages qu'il apparaît
- [ ] Vérifier que tu reçois un email de notification

### Newsletter
- [ ] Utiliser `NewsletterForm.tsx`
- [ ] Ajouter à la page (footer, hero, etc.)
- [ ] Tester: S'abonner avec un email
- [ ] Vérifier en admin → Newsletter que l'abonné apparaît
- [ ] Vérifier que tu reçois un email de bienvenue

## Phase 6: Admin Panel Features

### Dashboard
- [ ] Vérifier stats (messages, abonnés)
- [ ] Vérifier que les liens vers les pages fonctionnent

### Messages
- [ ] [ ] Voir la liste des messages
- [ ] Cliquer sur un message → Voir le détail
- [ ] Vérifier que le message est marqué "lu"
- [ ] Bouton "Répondre par email" → Ouvre client email
- [ ] Bouton "Archiver" → Message disparaît de la liste
- [ ] Bouton "Supprimer" → Message supprimé

### Newsletter
- [ ] Voir la liste des abonnés
- [ ] Bouton "Copier tous les emails" → Copie dans presse-papier

### Blog (Optionnel pour maintenant)
- [ ] Page affichée mais vide (à implémenter plus tard)

## Phase 7: Tests de bout en bout

- [ ] Formulaire contact → Message reçu en admin ✓
- [ ] Notification email à l'admin ✓
- [ ] Newsletter subscription ✓
- [ ] Email de bienvenue newsletter ✓
- [ ] Admin peut archiver/supprimer messages ✓
- [ ] Admin peut voir les abonnés ✓

## Phase 8: Avant Prod (Déploiement Vercel)

- [ ] Push code sur GitHub
- [ ] Connect repo à Vercel
- [ ] Ajouter les variables d'env dans Vercel dashboard:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `RESEND_API_KEY`
  - [ ] `ADMIN_EMAIL`
  - [ ] `NEXT_PUBLIC_ADMIN_PASSWORD`
  - [ ] `NEXT_PUBLIC_URL=https://votre-domaine.com`
- [ ] Deploy!
- [ ] Tester sur la version live

## 📋 Fichiers créés

### Core System
- `lib/db.ts` – Client Supabase
- `lib/auth.ts` – Authentification
- `lib/email.ts` – Envoi emails
- `lib/validation.ts` – Validation (Zod)

### API Routes
- `app/api/contact/route.ts`
- `app/api/newsletter/route.ts`
- `app/api/admin/login/route.ts`
- `app/api/admin/logout/route.ts`
- `app/api/messages/route.ts`
- `app/api/messages/[id]/route.ts`

### Admin Pages
- `app/admin/layout.tsx` – Layout + navigation
- `app/admin/page.tsx` – Dashboard
- `app/admin/login/page.tsx` – Login page
- `app/admin/messages/page.tsx` – Messages list
- `app/admin/messages/[id]/page.tsx` – Message detail
- `app/admin/newsletter/page.tsx` – Newsletter management
- `app/admin/blog/page.tsx` – Blog management

### Components
- `components/ContactFormNew.tsx`
- `components/NewsletterForm.tsx`

### Config & Docs
- `.env.local.example` – Template env vars
- `db-setup.sql` – Database schema
- `ADMIN_STRUCTURE.md` – Architecture
- `IMPLEMENTATION_GUIDE.md` – Guide détaillé
- `SETUP_CHECKLIST.md` – Ce fichier

## 🆘 Support

### Erreurs courantes

**"NEXT_PUBLIC_SUPABASE_URL is missing"**
→ Vérifier `.env.local` existe et relancer `yarn dev`

**Messages n'apparaissent pas en admin**
→ Vérifier que `db-setup.sql` a été exécuté dans Supabase

**Pas d'email reçu**
→ Vérifier `RESEND_API_KEY` et `ADMIN_EMAIL` en `.env.local`

**Login ne fonctionne pas**
→ Vérifier `NEXT_PUBLIC_ADMIN_PASSWORD` est défini

## 🎯 Prochaines améliorations optionnelles

- [ ] Ajouter pagination sur messages
- [ ] Ajouter recherche/filtrage
- [ ] Bulk actions (archiver plusieurs)
- [ ] Rate limiting sur contact form
- [ ] reCAPTCHA
- [ ] Éditeur blog complet
- [ ] Export CSV des abonnés
- [ ] Analytics/statistiques
- [ ] Dark mode
- [ ] Notifications push

---

**Status**: En cours de setup
**Last Updated**: 2026-03-12

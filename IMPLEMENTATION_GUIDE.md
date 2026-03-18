# Guide d'implémentation Admin

## ✅ Étapes complétées

1. **Dépendances installées**
   - `@supabase/supabase-js`
   - `zod` (validation)
   - `resend` (email)

2. **Fichiers créés**
   - **lib/** – Utilitaires (db, auth, email, validation)
   - **types/** – Types TypeScript
   - **app/api/** – Routes API (contact, newsletter, messages, admin login/logout)
   - **app/admin/** – Pages admin (login, dashboard, messages, newsletter, blog)

3. **DB Setup SQL** – Fichier `db-setup.sql` pour créer les tables

## 🚀 Étapes suivantes

### 1. Setup Supabase

1. Aller à https://supabase.com
2. Créer un nouveau projet
3. Aller à "SQL Editor" → Copier le contenu de `db-setup.sql`
4. Exécuter le script
5. Copier les credentials:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY`

### 2. Setup Resend (Email)

1. Aller à https://resend.com
2. Créer un compte
3. Créer une clé API
4. Copier dans `.env.local`: `RESEND_API_KEY`

### 3. Variables d'environnement

Créer `.env.local` à la racine:

```bash
# Database
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_email@example.com

# Admin Auth
NEXT_PUBLIC_ADMIN_PASSWORD=your_strong_password

# App
NEXT_PUBLIC_URL=http://localhost:3000
NODE_ENV=development
```

### 4. Tester localement

```bash
# Installer les dépendances (si pas fait)
yarn install

# Lancer le dev server
yarn dev
```

Tester les routes:
- **Login**: http://localhost:3000/admin/login
- **Contact form**: POST `/api/contact`
- **Newsletter**: POST `/api/newsletter`

### 5. Intégrer le formulaire de contact existant

Mettre à jour `components/ContactForm.tsx` ou la page contact pour envoyer à `/api/contact`:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, name, message }),
})
```

### 6. Intégrer la newsletter

Ajouter un formulaire newsletter qui appelle `/api/newsletter`:

```typescript
const response = await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
})
```

## 📋 Fichiers clés

| Fichier | Rôle |
|---------|------|
| `lib/db.ts` | Client Supabase |
| `lib/auth.ts` | Authentification admin |
| `lib/email.ts` | Envoi emails (Resend) |
| `lib/validation.ts` | Schémas Zod |
| `app/api/contact/route.ts` | Endpoint contact |
| `app/api/newsletter/route.ts` | Endpoint newsletter |
| `app/admin/layout.tsx` | Layout admin (auth wrapper) |
| `app/admin/page.tsx` | Dashboard |
| `app/admin/messages/page.tsx` | Listing messages |
| `app/admin/messages/[id]/page.tsx` | Détail message |
| `app/admin/newsletter/page.tsx` | Gestion newsletter |

## 🔧 Troubleshooting

### Erreur: "NEXT_PUBLIC_SUPABASE_URL is missing"
→ Vérifier `.env.local` est à la racine et relancer `yarn dev`

### Erreur: "Failed to fetch messages"
→ Vérifier que la table `contact_messages` existe en Supabase (exécuter `db-setup.sql`)

### Emails non reçus
→ Vérifier la clé `RESEND_API_KEY` et l'email `ADMIN_EMAIL`

### Login ne fonctionne pas
→ Vérifier `NEXT_PUBLIC_ADMIN_PASSWORD` est défini et non vide

## 🎯 Fonctionnalités à ajouter (optionnel)

- [ ] Pagination sur les messages
- [ ] Recherche/filtrage messages
- [ ] Bulk actions (archiver plusieurs messages)
- [ ] Templates de réponse email
- [ ] Statistiques (messages par mois, etc.)
- [ ] Suppression automatique des messages après 90j
- [ ] Rate limiting pour le contact form
- [ ] reCAPTCHA sur le contact form
- [ ] Export CSV des abonnés
- [ ] Éditeur blog (créer/éditer articles)

## 🚀 Déploiement (Vercel)

1. Push le code sur GitHub
2. Connect le repo à Vercel
3. Ajouter les variables d'env dans Vercel dashboard
4. Deploy!

Vercel lira les env vars automatiquement.

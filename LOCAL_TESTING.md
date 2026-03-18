# 🧪 Testing Local - Guide complet

Après avoir setup Supabase et Resend, voici comment tester tout localement.

## Step 1: `.env.local` final

Vérifier que le fichier `.env.local` à la racine contient:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...xxxxxxx

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
ADMIN_EMAIL=your-email@example.com

# Admin
NEXT_PUBLIC_ADMIN_PASSWORD=strong_password_123

# App
NEXT_PUBLIC_URL=http://localhost:3000
NODE_ENV=development
```

## Step 2: Installer dépendances

```bash
cd /path/to/manoutech
yarn install
```

Vérifier que ces packages sont listés:
- `@supabase/supabase-js`
- `zod`
- `resend`

## Step 3: Lancer le dev server

```bash
yarn dev
```

Devrait afficher:
```
> next dev --webpack
...
Ready in 1.23s

Local:        http://localhost:3000
Environments: .env.local
```

✅ Si pas d'erreurs, on continue!

## Step 4: Tester le Login Admin

1. Ouvrir http://localhost:3000/admin/login
2. Voir un formulaire avec "Mot de passe"
3. Entrer le mot de passe configuré dans `.env.local`
4. Cliquer "Se connecter"
5. ✅ Devrait rediriger vers `/admin` (Dashboard)

Si ça fonctionne:
- Cookie `admin_token` a été créé ✓
- Session DB créée ✓
- Auth fonctionne ✓

## Step 5: Tester le Dashboard

Une fois logué:

1. Voir 3 cartes de stats:
   - Messages (0 au départ)
   - Newsletter (0 au départ)
   - Articles (0 au départ)
2. Cliquer "Consulter messages" → Page vide (normal)
3. Cliquer "Abonnés" → Page vide (normal)
4. Cliquer "Déconnexion" → Redirection vers `/admin/login`

✅ Si tout fonctionne, l'admin panel marche!

## Step 6: Tester le formulaire Contact

### 6.1 Trouver/créer la page contact

Vérifier si tu as une page contact. Si oui:
- `app/contact/page.tsx`
- `app/pages/contact.tsx`
- Ou la remplacer

### 6.2 Utiliser le composant ContactFormNew

Remplacer ou ajouter le formulaire:

```tsx
import ContactFormNew from '@/components/ContactFormNew'

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <ContactFormNew />
    </div>
  )
}
```

### 6.3 Tester l'envoi

1. Aller à la page contact
2. Remplir:
   - Nom: `John Doe`
   - Email: `test@example.com`
   - Message: `This is a test message from local testing`
3. Cliquer "Envoyer le message"
4. ✅ Voir "Message envoyé avec succès!"

### 6.4 Vérifier en Admin

1. Aller à http://localhost:3000/admin/messages
2. ✅ Voir le message dans la liste:
   - Email: `test@example.com`
   - Nom: `John Doe`
   - Statut: `● Nouveau` (bleu)

### 6.5 Vérifier l'email reçu

1. Ouvrir ta boîte email (`ADMIN_EMAIL`)
2. ✅ Tu devrais avoir un email:
   - **De**: `contact@manoutech.com`
   - **Sujet**: `Nouveau message de John Doe`
   - **Corps**: Le message + lien "Voir le message"

Si tu reçois cet email, **tout fonctionne!** 🎉

## Step 7: Tester le détail du message

1. En admin, cliquer sur le message
2. Voir `/admin/messages/[id]` avec:
   - Email: `test@example.com`
   - Nom: `John Doe`
   - Texte complet du message
   - Statut: changé en "✓ Lu"
   - Boutons: Répondre, Archiver, Supprimer
3. ✅ Cliquer "Archiver"
4. Revenir à `/admin/messages`
5. ✅ Le message a disparu de la liste (archivé)

## Step 8: Tester la Newsletter

### 8.1 Ajouter le formulaire

Créer ou remplacer un formulaire newsletter (footer, hero, etc.):

```tsx
import NewsletterForm from '@/components/NewsletterForm'

export default function Footer() {
  return (
    <footer>
      <h2>Newsletter</h2>
      <NewsletterForm />
    </footer>
  )
}
```

### 8.2 Tester l'inscription

1. Entrer un email: `newsletter-test@example.com`
2. Cliquer "S'abonner"
3. ✅ Voir "Inscription réussie!"

### 8.3 Vérifier en Admin

1. Aller à http://localhost:3000/admin/newsletter
2. ✅ Voir l'abonné:
   - Email: `newsletter-test@example.com`
   - Date: aujourd'hui

### 8.4 Vérifier l'email de bienvenue

1. Ouvrir la boîte email du subscriber
2. ✅ Email reçu:
   - **De**: `hello@manoutech.com`
   - **Sujet**: `Bienvenue sur Manoutech Newsletter`

## Step 9: Tester les Pages Admin Complètes

### Dashboard
- [ ] Stats affichées
- [ ] Liens fonctionnent

### Messages
- [ ] Liste visible
- [ ] Cliquer un message → détail
- [ ] Marquer comme lu
- [ ] Archiver
- [ ] Supprimer
- [ ] Lien email "Répondre" fonctionne

### Newsletter
- [ ] Abonnés listés
- [ ] Bouton "Copier emails" fonctionne

### Blog
- [ ] Page affichée (vide pour maintenant)

## Step 10: Vérifier les Cookies

Ouvrir DevTools (F12) → Application → Cookies:

Tu devrais voir:
```
admin_token: xxxxxxxxxxxxx (HttpOnly)
```

Si tu vois ce cookie, la session est stockée ✓

## ✅ Test Checklist

- [ ] Login fonctionne
- [ ] Dashboard affiche les stats
- [ ] Formulaire contact envoie message
- [ ] Admin voit le message
- [ ] Email de notification reçu
- [ ] Voir détail du message
- [ ] Archiver le message fonctionne
- [ ] Newsletter subscription fonctionne
- [ ] Email de bienvenue reçu
- [ ] Admin voit les abonnés
- [ ] Logout fonctionne

## 🆘 Troubleshooting

### "NEXT_PUBLIC_SUPABASE_URL is missing"
```bash
# Vérifier .env.local
cat .env.local | grep NEXT_PUBLIC_SUPABASE_URL

# Relancer le dev server
yarn dev
```

### "Failed to save message" (erreur 500)
```
Vérifier:
1. Supabase est accessible (peut-être serveur down?)
2. db-setup.sql a été exécuté
3. db-functions.sql a été exécuté
4. Service Role Key est correct
```

### "Invalid password" (login admin)
```
Vérifier:
1. NEXT_PUBLIC_ADMIN_PASSWORD est défini
2. Tu entres exactement le bon mot de passe
3. Pas d'espace avant/après
```

### "Email sending failed"
```
Vérifier:
1. RESEND_API_KEY est correct et complet
2. ADMIN_EMAIL est un email valide
3. Quota Resend pas dépassé (100/jour plan gratuit)
```

### "Message not found" (quand je clique sur un message)
```
Vérifier:
1. Le message a vraiment été créé en DB
2. L'ID dans l'URL est correct
3. La session admin est valide
```

## 📊 Base de données inspection

Si tu veux vérifier directement en Supabase:

1. Aller à Supabase Dashboard
2. Cliquer "Table Editor"
3. Voir les tables:
   - `contact_messages` → Les messages
   - `newsletter_subscribers` → Les abonnés
   - `admin_sessions` → Les sessions actives

## 🎯 Prochaines étapes après tests réussis

1. **Intégrer les formulaires partout** (pages, footer, etc.)
2. **Customiser les emails** (ajouter ton logo, couleurs)
3. **Améliorer l'UI admin** (plus de fonctionnalités)
4. **Setup Vercel** → Déployer en prod
5. **Ajouter plus de features** (stats, cleanup, etc.)

---

**Si tous les tests passent, tu es prêt pour le déploiement!** 🚀


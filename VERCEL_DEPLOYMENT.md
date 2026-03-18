# 🚀 Deployment Vercel - Guide complet

Une fois que tout fonctionne localement, on déploie sur Vercel (gratuit, rapide, recommandé pour Next.js).

## Prerequisites

- ✅ Supabase setup (BD + fonctions SQL)
- ✅ Resend setup (clé API)
- ✅ Tests locaux réussis
- Code pushé sur GitHub

## Step 1: Préparer le code pour Vercel

### 1.1 Vérifier `.gitignore`

Le fichier `.gitignore` à la racine devrait contenir:

```
.env.local
.env.*.local
node_modules/
.next/
dist/
build/
```

✅ `.env.local` est ignoré (pas uploadé sur GitHub)

### 1.2 Push sur GitHub

```bash
git add .
git commit -m "Setup admin system with Supabase and Resend"
git push origin main
```

✅ Code pushé!

## Step 2: Créer un compte Vercel

1. Aller à https://vercel.com
2. Cliquer "Sign Up"
3. Choisir "Continue with GitHub"
4. Autoriser Vercel à accéder à ton GitHub
5. ✅ Compte créé

## Step 3: Importer le projet

1. Dashboard Vercel → Cliquer "New Project" ou "Import Project"
2. Sélectionner le repo `manoutech` (ou `next-web`)
3. Vercel scan automatiquement:
   - Framework: Next.js ✓
   - Root Directory: manoutech (ou /)
4. Cliquer "Import"

## Step 4: Ajouter les variables d'environnement

Avant de déployer, ajouter les env vars:

1. Voir la page "Configure Project"
2. Section **Environment Variables**
3. Ajouter chaque variable:

### Variables à ajouter:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...xxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
ADMIN_EMAIL=your-email@example.com
NEXT_PUBLIC_ADMIN_PASSWORD=strong_password_123
NEXT_PUBLIC_URL=https://your-domain.vercel.app
NODE_ENV=production
```

**⚠️ Attention:**
- `SUPABASE_SERVICE_ROLE_KEY` = Secret! Mais safe sur Vercel
- `RESEND_API_KEY` = Secret aussi
- `NEXT_PUBLIC_*` = Publiques (visible côté client, mais ok)
- `NEXT_PUBLIC_URL` = L'URL de ton site en prod

### Exemple:

```
NEXT_PUBLIC_SUPABASE_URL: https://xyzabc.supabase.co
SUPABASE_SERVICE_ROLE_KEY: eyJhbGciOiJIUzI1NiIs...
RESEND_API_KEY: re_8Nx4z3qPp7kLmNvWxYaB
ADMIN_EMAIL: emmanuel@manoutech.com
NEXT_PUBLIC_ADMIN_PASSWORD: MyStr0ng!P@ssw0rd
NEXT_PUBLIC_URL: https://manoutech.vercel.app
NODE_ENV: production
```

## Step 5: Déployer

1. Cliquer "Deploy"
2. ⏳ Vercel construit et déploie (2-5 min)
3. ✅ Voir "Congratulations! Your deployment is ready"

Tu reçois une URL:
```
https://manoutech-xxxxx.vercel.app
```

## Step 6: Tester en prod

### 6.1 Tester le login

1. Aller à `https://your-domain.vercel.app/admin/login`
2. Entrer le mot de passe
3. ✅ Dashboard accessible

### 6.2 Tester un message de contact

1. Aller à la page contact
2. Envoyer un message
3. ✅ Message reçu en admin
4. ✅ Email de notification envoyé

### 6.3 Vérifier DB en Supabase

1. Supabase Dashboard → Table Editor
2. `contact_messages` → Voir le message reçu depuis prod ✓

## Step 7: Custom Domain (optionnel)

Si tu as un domaine personnel:

1. Vercel Dashboard → Settings → Domains
2. Ajouter ton domaine (ex: `manoutech.com`)
3. Suivre les instructions DNS (ajouter CNAME, etc.)
4. Une fois validé, ça remplace l'URL Vercel

Exemple:
```
Avant: https://manoutech-xyz123.vercel.app
Après: https://manoutech.com
```

## Step 8: Configuration DNS (si custom domain)

Chez ton provider DNS (Godaddy, Namecheap, etc.):

1. Ajouter un record CNAME:
   ```
   Nom: www
   Type: CNAME
   Valeur: cname.vercel-dns.com
   ```

2. Si tu veux aussi `manoutech.com` sans www:
   ```
   Nom: @
   Type: A
   Valeur: 76.76.19.165
   ```

3. Attendre 5-30 minutes que le DNS se propage

4. Revérifier dans Vercel que le domaine est validé ✓

## Step 9: Sauvegarder les URLs

Une fois en prod, noter:

```
Admin URL: https://your-domain.com/admin/login
Contact: https://your-domain.com/contact
Newsletter: (formulaire dans le site)
```

Partager l'URL admin avec les autres admins (si y en a).

## ✅ Checklist

- [ ] Code pushé sur GitHub
- [ ] Compte Vercel créé
- [ ] Projet importé
- [ ] Env vars ajoutées (8 variables)
- [ ] Déploiement réussi
- [ ] Admin login fonctionne
- [ ] Message de contact fonctionne
- [ ] Email reçu
- [ ] Custom domain setup (optionnel)

## 📊 Monitoring

Après déploiement:

1. **Vercel Analytics** (gratuit)
   - Dashboard → Analytics
   - Voir le traffic

2. **Supabase Monitoring**
   - Dashboard → Monitoring
   - Voir les requêtes, erreurs

3. **Resend Analytics**
   - Dashboard → Analytics
   - Voir les emails envoyés/reçus

## 🔄 Updates/Changes

Après déploiement, si tu changes le code:

1. Push sur GitHub:
   ```bash
   git add .
   git commit -m "Feature: Add xyz"
   git push origin main
   ```

2. Vercel déploie **automatiquement** (auto-deploy)

3. En ~2-3 min, les changements sont en prod

Pas besoin de faire quoi que ce soit d'autre!

## 🆘 Troubleshooting

### Erreur: "NEXT_PUBLIC_SUPABASE_URL is missing"
→ Vérifier que les env vars sont ajoutées dans Vercel

### Erreur: "Failed to save message"
→ Vérifier que:
1. Les env vars sont correctes
2. Supabase est accessible (status.supabase.com)
3. Les fonctions SQL existent

### Erreur: "Build failed"
→ Aller à "Deployments" → Voir les logs

### Admin login ne fonctionne pas
→ Vérifier `NEXT_PUBLIC_ADMIN_PASSWORD` en Vercel env vars

### Emails non envoyés
→ Vérifier `RESEND_API_KEY` et quota Resend

### Custom domain ne fonctionne pas
→ Vérifier que le DNS a propagé (peut prendre du temps)
→ Aller à https://mxtoolbox.com et vérifier les records

## 🔐 Sécurité

### Recommandations

1. **Secrets sécurisés**
   - Ne JAMAIS partager les API keys
   - Les garder dans Vercel env vars
   - Utiliser des secrets différents pour chaque env

2. **Rate limiting**
   - À ajouter pour `/api/contact` (éviter spam)
   - À implémenter plus tard

3. **Backups**
   - Supabase backups (automatique)
   - Exporter les données régulièrement

4. **Monitoring**
   - Vérifier régulièrement les logs
   - Surveiller les erreurs

## 📈 Scaling

Si tu as bcp de traffic:

1. **Supabase**
   - Upgrade plan si besoin
   - Ajouter indexes (fait avec les fonctions SQL)

2. **Resend**
   - Upgrade plan si bcp d'emails
   - Plan gratuit = 100/jour suffisant pour portfolio

3. **Vercel**
   - Plan gratuit suffit (auto-scaling)
   - Upgrade si besoin features avancées

## 📞 Support & Resources

- Vercel Docs: https://vercel.com/docs
- Vercel Community: https://vercel.com/community
- GitHub Issues: Ouvrir une issue si bug

---

**Deployment réussi! 🎉**

Ton site est maintenant en prod avec:
- Admin panel fonctionnel
- Messages de contact
- Newsletter subscribers
- Emails automatiques

**Prochaines améliorations optionnelles:**
- Rate limiting
- More stats & analytics
- Blog editor complet
- Dark mode
- Notifications push

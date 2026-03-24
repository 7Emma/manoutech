# 📚 Guides - Index

Tous les guides pour setuper et utiliser le système admin.

## 🎯 START HERE

### 1. **MASTER_CHECKLIST.md** ← START

Guide complet avec toutes les étapes. C'est par là qu'il faut commencer!

Suit cet ordre:

1. PHASE 1: Préparation
2. PHASE 2: Setup Supabase
3. PHASE 3: Setup Resend
4. PHASE 4: Configuration Local
5. PHASE 5-9: Implementation & Deploy

---

## 📖 GUIDES DÉTAILLÉS

### **SUPABASE_SETUP.md**

Setup complet de Supabase (database).

**À faire si:**

- Tu dois créer un compte Supabase
- Tu dois exécuter les scripts SQL
- Tu dois récupérer les credentials

**Durée:** 15 min

---

### **RESEND_SETUP.md**

Setup complet de Resend (emails).

**À faire si:**

- Tu dois créer un compte Resend
- Tu dois générer une API key
- Tu veux tester l'envoi d'emails

**Durée:** 5 min

---

### **LOCAL_TESTING.md**

Guide pour tester tout localement avant de déployer.

**À faire si:**

- Tu veux tester l'admin panel
- Tu veux tester les formulaires
- Tu veux vérifier que les emails arrivent

**Durée:** 30 min

**Includes:**

- Login test
- Contact form test
- Newsletter test
- Admin features test
- Troubleshooting

---

### **VERCEL_DEPLOYMENT.md**

Guide pour déployer en production sur Vercel.

**À faire si:**

- Tu veux mettre ton site en prod
- Tu veux configurer un custom domain
- Tu veux setup auto-deploy

**Durée:** 20 min

**Includes:**

- Import project
- Environment variables
- Deployment
- Custom domain
- Monitoring

---

### **SQL_SETUP.md**

Guide sur les fonctions SQL stockées.

**À faire si:**

- Tu veux comprendre les fonctions SQL
- Tu veux ajouter tes propres fonctions
- Tu veux utiliser `.rpc()` dans ton code

**Durée:** 10 min

---

### **IMPLEMENTATION_GUIDE.md**

Étapes et détails techniques de l'implémentation.

**À faire si:**

- Tu veux comprendre l'architecture
- Tu veux modifier le code
- Tu veux ajouter des features

**Durée:** 15 min

---

### **ADMIN_STRUCTURE.md**

Architecture générale du système admin.

**À faire si:**

- Tu veux comprendre comment tout fonctionne
- Tu veux voir la structure des fichiers
- Tu veux modifier l'architecture

**Durée:** 20 min

---

## 🗂️ SETUP CHECKLISTS

### **SETUP_CHECKLIST.md**

Checklist phase par phase du setup.

Sections:

- [ ] Phase 1: Configuration Services
- [ ] Phase 2: Variables d'env
- [ ] Phase 3: Installation dépendances
- [ ] Phase 4: Tests local
- [ ] Phase 5: Intégrer formulaires
- [ ] Phase 6: Tests complets
- [ ] Phase 7: Avant production
- [ ] Plus d'améliorations optionnelles

---

## 🗂️ DATABASE FILES

### **db-setup.sql**

Crée les tables de base.

Exécuter en: Supabase → SQL Editor

Tables créées:

- `contact_messages`
- `newsletter_subscribers`
- `blog_drafts`
- `admin_sessions`

---

### **db-functions.sql**

Crée les fonctions SQL (20+).

Exécuter en: Supabase → SQL Editor

Après `db-setup.sql`!

Fonctions créées:

- Messages: get, create, archive, delete, etc.
- Newsletter: subscribe, get subscribers, count
- Stats: get dashboard stats
- Sessions: create, verify, delete
- Cleanup: old messages, expired sessions

---

## 📊 QUICK REFERENCE

### File Structure

```
Guides & Documentation:
├── MASTER_CHECKLIST.md      ← START HERE
├── GUIDES.md                 (ce fichier)
├── SUPABASE_SETUP.md
├── RESEND_SETUP.md
├── LOCAL_TESTING.md
├── VERCEL_DEPLOYMENT.md
├── SQL_SETUP.md
├── IMPLEMENTATION_GUIDE.md
├── ADMIN_STRUCTURE.md
└── SETUP_CHECKLIST.md

Database:
├── db-setup.sql
└── db-functions.sql

Code:
├── app/api/...
├── app/admin/...
├── lib/...
├── components/...
└── types/...
```

---

## ⏱️ TIME ESTIMATES

| Guide                | Durée  | Difficulté |
| -------------------- | ------ | ---------- |
| MASTER_CHECKLIST     | 1h30   | 🟢 Easy    |
| SUPABASE_SETUP       | 15 min | 🟢 Easy    |
| RESEND_SETUP         | 5 min  | 🟢 Easy    |
| LOCAL_TESTING        | 30 min | 🟡 Medium  |
| VERCEL_DEPLOYMENT    | 20 min | 🟢 Easy    |
| SQL_SETUP            | 10 min | 🟡 Medium  |
| IMPLEMENTATION_GUIDE | 15 min | 🟡 Medium  |

**Total:** ~2h pour setup complet

---

## 🚀 QUICK START COMMANDS

```bash
# 1. Setup dépendances
yarn install

# 2. Créer .env.local (copier de .env.local.example)
cp .env.local.example .env.local
# Puis remplir les valeurs

# 3. Lancer le dev server
yarn dev

# 4. Tester
# - Admin login: http://localhost:3000/admin/login
# - Contact form: submit un message
# - Vérifier: /admin/messages

# 5. Deploy
git push origin main
# Vercel deploy automatiquement
```

---

## 🎯 USE CASES

### "Je veux juste le setup rapidement"

→ Lire `MASTER_CHECKLIST.md` et suivre l'ordre

### "J'ai une erreur"

→ Chercher dans le guide correspondant (SUPABASE_SETUP, LOCAL_TESTING, etc.)
→ Section Troubleshooting

### "Je veux customiser le code"

→ Lire `IMPLEMENTATION_GUIDE.md` + `ADMIN_STRUCTURE.md`

### "Je veux ajouter des fonctionnalités"

→ Lire `SQL_SETUP.md` pour ajouter des fonctions SQL
→ Créer les routes API/pages comme les existantes

### "Je veux déployer"

→ Lire `VERCEL_DEPLOYMENT.md`

### "Je veux comprendre comment ça marche"

→ Lire `ADMIN_STRUCTURE.md`
→ Puis regarder le code dans `app/admin/` et `lib/`

---

## ✨ FEATURES

✅ Admin authentication (login/logout)
✅ Contact form + messages
✅ Newsletter subscribers
✅ Automatic emails
✅ Admin dashboard with stats
✅ Message management (archive, delete)
✅ SQL functions (secure & fast)
✅ Production ready

---

## 📝 NOTES

- Tous les guides sont en français
- Les guides sont auto-contenus (on peut les lire indépendamment)
- Les étapes sont numérotées et claires
- Troubleshooting inclus dans chaque guide
- Ressources externes linkées

---

## 🔄 NEXT STEPS

1. Ouvrir `MASTER_CHECKLIST.md`
2. Suivre PHASE 1 → PHASE 9 dans l'ordre
3. Si tu bloques, chercher la solution dans le guide correspondant
4. Une fois fini, ton site aura un système admin complet! 🎉

---

**Version:** 1.0  
**Created:** 2024-03-12  
**Status:** ✅ Complete

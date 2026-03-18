# 🚀 Setup Supabase - Guide complet

## Step 1: Créer un compte Supabase

1. Aller à https://supabase.com
2. Cliquer "Sign Up"
3. S'enregistrer avec Email ou GitHub
4. Vérifier l'email

## Step 2: Créer un nouveau projet

1. Dashboard Supabase → "New Project"
2. Remplir:
   - **Name**: `manoutech` (ou ton choix)
   - **Database Password**: Generate strong password → **Copier et sauvegarder!**
   - **Region**: Choisir le plus proche (ex: `eu-west-1` pour Europe)
3. Cliquer "Create new project"
4. ⏳ Attendre 2-3 minutes que le projet se crée

## Step 3: Exécuter les scripts SQL

Une fois le projet créé:

### 3.1 Créer les tables

1. Aller à l'onglet **"SQL Editor"** (à gauche)
2. Cliquer "New Query"
3. Copier le contenu de `db-setup.sql` (voir ci-dessous)
4. Coller dans l'éditeur
5. Cliquer le bouton "▶" (Run) en haut à droite
6. ✅ Attendre confirmation

### 3.2 Créer les fonctions SQL

1. Cliquer "New Query" à nouveau
2. Copier le contenu de `db-functions.sql`
3. Coller dans l'éditeur
4. Cliquer "▶" (Run)
5. ✅ Attendre confirmation

**✅ Les tables et fonctions sont créées!**

## Step 4: Récupérer les credentials

1. Aller à **Settings** (⚙️ en bas à gauche)
2. Cliquer **API**
3. Voir l'écran avec:
   ```
   Project URL: https://xxxxxxxxxx.supabase.co
   anon key: eyJhbGc...
   service_role key: eyJhbGc...
   ```

### 4.1 Copier Project URL
- Copier `https://xxxxxxxxxx.supabase.co`
- C'est ta `NEXT_PUBLIC_SUPABASE_URL`

### 4.2 Copier Service Role Key
- ⚠️ **ATTENTION**: C'est secret! Ne jamais le partager
- Copier la clé complète (commence par `eyJ...`)
- C'est ta `SUPABASE_SERVICE_ROLE_KEY`

## Step 5: Vérifier que tout fonctionne

Dans **SQL Editor**, exécuter:

```sql
-- Vérifier les tables existent
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';

-- Devrait afficher:
-- contact_messages
-- newsletter_subscribers
-- blog_drafts
-- admin_sessions
```

Et:

```sql
-- Vérifier les fonctions existent
SELECT proname 
FROM pg_proc 
WHERE proname LIKE '%message%';

-- Devrait afficher:
-- get_messages
-- get_message
-- create_message
-- mark_message_read
-- toggle_message_archived
-- delete_message
-- count_unread_messages
```

## Step 6: Copier les credentials dans `.env.local`

Créer/éditer le fichier `.env.local` à la racine du projet:

```bash
# ===== SUPABASE =====
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...xxxxxxx

# ===== EMAIL (sera fait après) =====
RESEND_API_KEY=
ADMIN_EMAIL=your-email@example.com

# ===== ADMIN =====
NEXT_PUBLIC_ADMIN_PASSWORD=choose_strong_password_123

# ===== APP =====
NEXT_PUBLIC_URL=http://localhost:3000
NODE_ENV=development
```

**⚠️ Important:**
- Ne JAMAIS commit `.env.local` (il est dans `.gitignore`)
- Service Role Key = Secret! Ne jamais partager
- NEXT_PUBLIC_* = Variables publiques (ok d'être visibles)
- Autres = Variables serveur seulement

## Step 7: Tester la connexion

Créer un test file `test-supabase.ts`:

```typescript
// lib/test-supabase.ts
import { supabase } from './db'

export async function testConnection() {
  try {
    // Test 1: Récupérer les messages
    const { data, error } = await supabase.rpc('get_dashboard_stats')
    
    if (error) {
      console.error('❌ Error:', error)
      return false
    }
    
    console.log('✅ Supabase connected!')
    console.log('Stats:', data)
    return true
  } catch (err) {
    console.error('❌ Connection failed:', err)
    return false
  }
}
```

Puis en CLI:
```bash
node -r ts-node/register lib/test-supabase.ts
```

## ✅ Checklist

- [ ] Compte Supabase créé
- [ ] Projet Supabase créé
- [ ] `db-setup.sql` exécuté
- [ ] `db-functions.sql` exécuté
- [ ] Credentials copiés (Project URL + Service Role Key)
- [ ] `.env.local` créé avec les credentials
- [ ] Tables vérifiées en SQL Editor
- [ ] Fonctions vérifiées en SQL Editor
- [ ] Connection test réussi

## 🎯 Prochaines étapes après Supabase

1. **Setup Resend** → Clé API email
2. **Test local** → `yarn dev`
3. **Tester login** → http://localhost:3000/admin/login
4. **Intégrer formulaires** → Contact + Newsletter
5. **Test complet** → Messages + emails
6. **Deploy** → Vercel

## 🆘 Troubleshooting

### Erreur: "Project is still initializing"
→ Attendre quelques minutes. Les projets Supabase prennent du temps

### Erreur: "Could not find NEXT_PUBLIC_SUPABASE_URL"
→ Vérifier `.env.local` existe et relancer `yarn dev`

### Erreur: "function does not exist"
→ `db-functions.sql` n'a pas été exécuté. Relancer!

### Erreur: "permission denied"
→ Utiliser `Service Role Key`, pas `Anon key`

### Les tables ne sont pas créées
→ Vérifier le résultat de `db-setup.sql` (erreurs affichées?)

## 📞 Support Supabase

- Docs: https://supabase.com/docs
- GitHub Issues: https://github.com/supabase/supabase
- Discord: https://discord.supabase.com

---

**Une fois terminé, signale et on continue à l'étape 2: Setup Resend**

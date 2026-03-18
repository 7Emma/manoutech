# Setup SQL pour Supabase

## 📋 Étapes

### 1. Créer les tables
Exécuter le contenu de `db-setup.sql` en Supabase SQL Editor

### 2. Créer les fonctions SQL
Exécuter le contenu de `db-functions.sql` en Supabase SQL Editor

## 📝 Contenu des fichiers

### `db-setup.sql`
Crée les 4 tables principales:
- `contact_messages` – Messages de contact
- `newsletter_subscribers` – Abonnés newsletter
- `blog_drafts` – Brouillons articles
- `admin_sessions` – Sessions admin

Ajoute aussi les indexes pour les performances.

### `db-functions.sql`
Crée les fonctions SQL pour:

#### Messages
- `get_messages(limit, offset, include_archived)` – Récupère messages avec pagination
- `get_message(id)` – Détail d'un message
- `create_message(email, name, message)` – Crée un message
- `mark_message_read(id)` – Marque comme lu
- `toggle_message_archived(id)` – Archive/désarchive
- `delete_message(id)` – Supprime
- `count_unread_messages()` – Compte non-lus

#### Newsletter
- `subscribe_newsletter(email)` – S'abonner (insert/update)
- `get_subscribers(limit, offset)` – Récupère abonnés
- `count_subscribers()` – Compte abonnés

#### Stats
- `get_dashboard_stats()` – Récupère toutes les stats dashboard

#### Admin Sessions
- `create_admin_session(token, expires_at)` – Crée session
- `verify_admin_session(token)` – Vérifie session valide
- `delete_admin_session(token)` – Supprime session

#### Cleanup
- `cleanup_old_messages()` – Supprime messages archivés > 90j
- `cleanup_expired_sessions()` – Supprime sessions expirées

## 🔄 Comment ça marche

Plutôt que d'utiliser les méthodes Supabase JS:
```typescript
// ❌ Avant
await supabase
  .from('contact_messages')
  .select('*')
  .eq('archived', false)
  .order('created_at', { ascending: false })
```

On appelle les fonctions SQL avec `.rpc()`:
```typescript
// ✅ Après
await supabase.rpc('get_messages', {
  p_limit: 50,
  p_offset: 0,
  p_include_archived: false,
})
```

**Avantages:**
- Logique DB en SQL (plus performant)
- Validation au niveau DB
- Transactions atomiques
- Réutilisable facilement

## 🚀 À faire après Supabase setup

1. Go to Supabase dashboard
2. Navigate to "SQL Editor"
3. Create a new query
4. Copy `db-setup.sql` and execute
5. Create another query
6. Copy `db-functions.sql` and execute
7. Done! Fonctions disponibles

## ✅ Vérification

Pour vérifier que tout fonctionne:

Dans "SQL Editor", exécuter:
```sql
SELECT * FROM pg_proc WHERE proname LIKE '%message%';
```

Devrait montrer les fonctions créées (get_messages, create_message, etc.)

## 📊 Exemple: Créer un message

```typescript
// TypeScript
const { data, error } = await supabase.rpc('create_message', {
  p_email: 'user@example.com',
  p_name: 'John Doe',
  p_message: 'Hello world!',
})

if (error) console.error(error)
else console.log('Message créé:', data[0])
```

## 🐛 Troubleshooting

**Erreur: "function does not exist"**
→ S'assurer que `db-functions.sql` a été exécuté

**Erreur: "permission denied"**
→ Vérifier que le Service Role Key est utilisé (pas l'Anon key)

**Erreur: "invalid input syntax"**
→ Vérifier les types des paramètres (UUID, TEXT, INT, etc.)

## 📌 Notes

- Tous les `p_` préfixes = parameters
- Supabase utilise PostgreSQL
- Les fonctions sont `PLPGSQL`
- RLS (Row Level Security) activé mais bypass avec Service Role

## 🔗 Ressources

- [Supabase RPC Docs](https://supabase.com/docs/reference/javascript/rpc)
- [PostgreSQL Functions](https://www.postgresql.org/docs/current/sql-createfunction.html)
- [PL/pgSQL Guide](https://www.postgresql.org/docs/current/plpgsql.html)

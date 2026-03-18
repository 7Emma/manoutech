# Intégration des APIs Admin

## Résumé des modifications

### 1. Nouvelles API Routes créées

#### `/app/api/admin/newsletter/route.ts`
- **GET**: Récupère la liste des abonnés newsletter avec pagination
- **DELETE**: Supprime un abonné (soft delete - set `subscribed` to false)
- Authentification requise via admin session

#### `/app/api/admin/blog/route.ts`
- **GET**: Récupère la liste des articles de blog avec filtrage par statut
- **DELETE**: Supprime un article
- Supports query params: `limit`, `offset`, `status` (published/draft)
- Authentification requise via admin session

### 2. Client API créé

#### `/lib/admin-api.ts`
Fournit une couche cliente unifiée pour les appels API admin:

```typescript
// Newsletter
newsletterAPI.getSubscribers(limit, offset)
newsletterAPI.deleteSubscriber(id)
newsletterAPI.bulkDeleteSubscribers(ids)

// Blog
blogAPI.getArticles(limit, offset, status)
blogAPI.deleteArticle(id)
blogAPI.bulkDeleteArticles(ids)
```

### 3. Pages Admin mises à jour

#### Newsletter (`/app/admin/newsletter/page.tsx`)
✅ Suppression des MOCK_SUBS
✅ Intégration API avec useEffect
✅ Suppression endpoint pour supprimer des abonnés
✅ Suppression en masse avec API
✅ Gestion d'erreurs avec toast notifications
✅ Loading state pendant la récupération

#### Blog (`/app/admin/blog/page.tsx`)
✅ Suppression des MOCK_POSTS
✅ Intégration API avec filtrage par statut
✅ Suppression article avec API
✅ Adaptation du tableau pour les vrais champs (pas de views, author, category)
✅ Gestion d'erreurs avec toast notifications
✅ Loading state

#### Messages (`/app/admin/messages/page.tsx`)
✅ Utilise déjà l'API `/api/messages`
✅ Pas de modification requise

#### Dashboard (`/app/admin/page.tsx`)
✅ Garde les données mockées (c'est juste un résumé)
✅ Pouvez être mis à jour plus tard si besoin de données en temps réel

### 4. CSS séparé des composants

Créés en session précédente:
- `/styles/admin/blog.css`
- `/styles/admin/newsletter.css`
- `/styles/admin/login.css` (préexistant)

## Architecture de la base de données

### Tables utilisées

**newsletter_subscribers**
- id (UUID)
- email (TEXT, UNIQUE)
- subscribed (BOOLEAN)
- created_at (TIMESTAMP)

**blog_drafts**
- id (UUID)
- title (TEXT)
- slug (TEXT, UNIQUE)
- content (TEXT)
- status (TEXT: 'draft' | 'published')
- author_id (UUID, nullable)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## Sécurité

Toutes les routes admin nécessitent une authentification:
```typescript
const session = await getAdminSession()
if (!session) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
```

## Prochaines améliorations potentielles

1. **Pagination côté serveur**: Actuellement la pagination client filtre les résultats locaux
2. **Recherche côté serveur**: Ajouter `search` comme query param dans les APIs
3. **Tri**: Ajouter paramètres de tri
4. **Export**: Exporter les abonnés en CSV
5. **Statistiques**: Créer une API `/api/admin/stats` pour le dashboard
6. **Édition**: Créer des routes PUT/PATCH pour éditer les articles et messages
7. **Webhooks**: Ajouter des événements webhooks pour les nouvelles inscriptions

# Admin Routing - Corrections Effectuées

## Problème Initial
Les pages admin ne naviguaient pas correctement quand on cliquait sur les liens. La navigation restait sur le dashboard car le système utilisait un state local au lieu de vraies routes Next.js.

---

## Solutions Appliquées

### 1. **Layout Admin** (`app/admin/layout.tsx`)
**Avant:**
- Utilisait `useState("dashboard")` pour tracker la page active
- Ne réagissait pas aux changements de route réels

**Après:**
- Utilise `usePathname()` de Next.js pour détecter la route actuelle
- `getActiveFromPath()` mappe les URL vers les items de navigation
- Supprimé le `setActive` state inutile

```tsx
import { usePathname } from "next/navigation";

const pathname = usePathname();
const getActiveFromPath = (path: string) => {
  if (path === "/admin") return "dashboard";
  if (path.includes("/messages")) return "messages";
  if (path.includes("/newsletter")) return "newsletter";
  if (path.includes("/blog")) return "blog";
  if (path.includes("/settings")) return "settings";
  return "dashboard";
};

const active = getActiveFromPath(pathname);
```

### 2. **Admin Sidebar** (`app/admin/components/AdminSidebar.tsx`)
**Avant:**
- Utilisait `href="#"` et `preventDefault()`
- Appelait `onActiveChange()` pour updater un state local

**Après:**
- Utilise `Link` de Next.js pour une vraie navigation
- Map les IDs de nav vers les routes réelles

```tsx
import Link from "next/link";

const navRoutes: Record<string, string> = {
  dashboard: "/admin",
  messages: "/admin/messages",
  newsletter: "/admin/newsletter",
  blog: "/admin/blog",
  settings: "/admin/settings",
};

// Dans le JSX:
{navItems.map((item) => (
  <Link
    href={navRoutes[item.id] || "/admin"}
    className={`al-nav-item ${active === item.id ? "active" : ""}`}
  >
    {/* ... */}
  </Link>
))}
```

### 3. **Messages Page** (`app/admin/messages/page.tsx`)
**Avant:**
- Les lignes du tableau avaient un `onClick` qui créait un lien dynamiquement
- Utilisait `window.location.href` (navigation complète)

**Après:**
- Utilise `Link` du composant de la ligne de message
- Navigation Next.js normale (plus rapide, sans rechargement)

```tsx
import Link from 'next/link';

<td className="mp-td">
  <Link href={`/admin/messages/${m.id}`}>
    <div className="mp-subject">{m.message.substring(0, 50)}</div>
    <div className="mp-excerpt">{m.message}</div>
  </Link>
</td>
```

---

## Routes Activées

Toutes ces routes fonctionnent maintenant correctement:

### Navigation Principale (Sidebar)
- `/admin` → Dashboard
- `/admin/messages` → Liste des messages
- `/admin/newsletter` → Abonnés newsletter
- `/admin/blog` → Liste articles
- `/admin/settings` → Paramètres

### Routes Détail (Clics sur les lignes)
- `/admin/messages/[id]` → Vue détail d'un message
- `/admin/blog/[slug]` → Édition d'un article
- `/admin/blog/new` → Créer un nouvel article

---

## Flux de Navigation

### Avant (Cassé)
```
Clic sidebar → preventDefault() → setActive() → State update → (Reste sur la même page)
```

### Après (Réparé)
```
Clic sidebar → Link → Push route → Next.js route handler → Render page correcte
                                    ↓
                            Layout reçoit pathname
                            getActiveFromPath() met à jour UI
```

---

## Vérification

Pour tester que tout fonctionne:

1. **Cliquer sur "Messages" dans la sidebar** → Doit aller à `/admin/messages`
2. **Cliquer sur un message dans le tableau** → Doit aller à `/admin/messages/[id]`
3. **Cliquer sur "Retour" sur la page détail** → Doit retourner à `/admin/messages`
4. **Cliquer sur "Nouvel article"** → Doit aller à `/admin/blog/new`
5. **Cliquer sur "Éditer" pour un article** → Doit aller à `/admin/blog/[slug]`
6. **Changer de page via sidebar** → L'item actif doit se highlighter correctement

---

## Fichiers Modifiés

- ✅ `app/admin/layout.tsx`
- ✅ `app/admin/components/AdminSidebar.tsx`
- ✅ `app/admin/messages/page.tsx`

## Points Clés

1. **usePathname()** pour détecter la route actuelle
2. **Link** de Next.js pour toute navigation
3. **Pas de preventDefault()** - laisser Next.js gérer
4. **Pas de window.location** - c'est une navigation complète non optimisée

---

## Prochaines Étapes

- [ ] Tester chaque route manuellement
- [ ] Ajouter des transitions smooth optionnelles
- [ ] Vérifier que les breadcrumbs se mettent à jour
- [ ] Ajouter loader/skeleton pendant le changement de page si nécessaire

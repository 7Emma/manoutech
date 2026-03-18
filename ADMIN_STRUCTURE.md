# Structure Admin & Messages

## 1. Dépendances à ajouter

```bash
yarn add @supabase/supabase-js next-auth nodemailer zod
yarn add -D @types/nodemailer
```

## 2. Variables d'env (`.env.local`)

```
# Database
NEXT_PUBLIC_SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_key

# Auth
NEXTAUTH_SECRET=generate_with: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000

# Email
RESEND_API_KEY=your_key
ADMIN_EMAIL=your_email@example.com

# Admin
NEXT_PUBLIC_ADMIN_PASSWORD=strong_password_here
```

## 3. Structure BD (Supabase SQL)

```sql
-- Messages de contact
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now(),
  archived BOOLEAN DEFAULT FALSE
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT now()
);

-- Blog drafts
CREATE TABLE blog_drafts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  status TEXT DEFAULT 'draft', -- draft, published
  author_id UUID,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Admin sessions (simple)
CREATE TABLE admin_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- Indexes
CREATE INDEX idx_messages_read ON contact_messages(read);
CREATE INDEX idx_messages_created ON contact_messages(created_at DESC);
CREATE INDEX idx_subscribers_email ON newsletter_subscribers(email);
```

## 4. Structure des fichiers

```
app/
├── api/
│   ├── contact/
│   │   └── route.ts          # POST contact form
│   ├── newsletter/
│   │   └── route.ts          # POST subscribe
│   ├── admin/
│   │   ├── login/
│   │   │   └── route.ts      # POST admin login
│   │   └── logout/
│   │       └── route.ts      # POST admin logout
│   └── messages/
│       ├── route.ts          # GET all messages (protected)
│       └── [id]/
│           ├── route.ts      # GET single message (protected)
│           └── read/
│               └── route.ts  # PATCH mark as read (protected)
├── admin/
│   ├── layout.tsx            # Auth wrapper + sidebar
│   ├── page.tsx              # Dashboard
│   ├── messages/
│   │   ├── page.tsx          # Messages listing
│   │   └── [id]/
│   │       └── page.tsx      # Message detail
│   ├── newsletter/
│   │   └── page.tsx          # Subscribers list
│   ├── blog/
│   │   ├── page.tsx          # Drafts list
│   │   ├── new/
│   │   │   └── page.tsx      # Create new draft
│   │   └── [slug]/
│   │       └── page.tsx      # Edit draft
│   ├── settings/
│   │   └── page.tsx          # Admin settings
│   └── login/
│       └── page.tsx          # Login page
├── contact/
│   └── page.tsx              # Contact form (existing)
└── ...

lib/
├── db.ts                      # Supabase client
├── auth.ts                    # Auth utilities
├── email.ts                   # Email helpers (Resend)
├── validation.ts             # Zod schemas
└── middleware.ts             # Auth middleware

types/
├── database.ts               # Database types
└── api.ts                    # API response types
```

## 5. Implémentation clés

### `lib/db.ts` – Supabase client
```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
```

### `lib/validation.ts` – Zod schemas
```typescript
import { z } from 'zod'

export const contactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  message: z.string().min(10),
})

export const newsletterSchema = z.object({
  email: z.string().email(),
})
```

### `app/api/contact/route.ts` – Contact form
```typescript
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validation'
import { supabase } from '@/lib/db'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name, message } = contactSchema.parse(body)

    // Save to DB
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ email, name, message }])

    if (error) throw error

    // Send email to admin
    await resend.emails.send({
      from: 'contact@manoutech.com',
      to: process.env.ADMIN_EMAIL!,
      subject: `Nouveau message de ${name}`,
      html: `
        <p><strong>${name}</strong> (${email}) a envoyé un message:</p>
        <p>${message}</p>
        <a href="${process.env.NEXT_PUBLIC_URL}/admin/messages">Voir le message</a>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}
```

### `app/admin/page.tsx` – Dashboard
```typescript
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/db'

export default async function AdminDashboard() {
  const token = cookies().get('admin_token')?.value
  if (!token) redirect('/admin/login')

  const [messages, subscribers] = await Promise.all([
    supabase.from('contact_messages').select('*').eq('read', false),
    supabase.from('newsletter_subscribers').select('*').eq('subscribed', true),
  ])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Messages non-lus" value={messages.data?.length || 0} />
        <StatCard label="Subscribers" value={subscribers.data?.length || 0} />
        <StatCard label="Articles" value={0} />
      </div>
    </div>
  )
}
```

### `app/admin/messages/page.tsx` – Messages listing
```typescript
import Link from 'next/link'
import { supabase } from '@/lib/db'

export default async function MessagesPage() {
  const { data: messages } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Nom</th>
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Statut</th>
          </tr>
        </thead>
        <tbody>
          {messages?.map((msg) => (
            <tr key={msg.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{msg.email}</td>
              <td className="p-2">{msg.name}</td>
              <td className="p-2">{new Date(msg.created_at).toLocaleDateString()}</td>
              <td className="p-2">
                <Link href={`/admin/messages/${msg.id}`}>
                  <span className={msg.read ? 'text-gray-400' : 'font-bold'}>
                    {msg.read ? 'Lu' : 'Nouveau'}
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

## 6. Authentification simple (sans NextAuth)

### `lib/auth.ts`
```typescript
import { cookies } from 'next/headers'
import crypto from 'crypto'
import { supabase } from './db'

export async function adminLogin(password: string) {
  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    throw new Error('Invalid password')
  }

  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days

  await supabase.from('admin_sessions').insert([
    { token, expires_at: expiresAt },
  ])

  const cookieStore = await cookies()
  cookieStore.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 30 * 24 * 60 * 60,
  })
}

export async function getAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  if (!token) return null

  const { data } = await supabase
    .from('admin_sessions')
    .select('*')
    .eq('token', token)
    .single()

  if (!data || new Date(data.expires_at) < new Date()) return null

  return data
}
```

### `app/admin/login/page.tsx`
```typescript
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        body: JSON.stringify({ password }),
      })
      if (!res.ok) throw new Error('Invalid password')
      router.push('/admin')
    } catch (err) {
      setError('Mot de passe incorrect')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full p-2 border rounded mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  )
}
```

## 7. Middleware de protection

### `app/admin/layout.tsx`
```typescript
import { getAdminSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav className="space-y-2">
          <a href="/admin" className="block p-2 hover:bg-gray-800">Dashboard</a>
          <a href="/admin/messages" className="block p-2 hover:bg-gray-800">Messages</a>
          <a href="/admin/newsletter" className="block p-2 hover:bg-gray-800">Newsletter</a>
          <a href="/admin/blog" className="block p-2 hover:bg-gray-800">Blog</a>
          <form action="/api/admin/logout" method="POST">
            <button className="w-full text-left p-2 hover:bg-gray-800">Logout</button>
          </form>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  )
}
```

## 8. Prochaines étapes

1. Setup Supabase + tables SQL
2. Installer dépendances
3. Créer routes API (contact, newsletter)
4. Créer pages admin (login, dashboard, messages)
5. Tester le flow complet

**Besoin que je commence l'implémentation?**

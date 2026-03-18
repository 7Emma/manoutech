export type ContactMessage = {
  id: string
  email: string
  name: string
  message: string
  read: boolean
  archived: boolean
  created_at: string
}

export type NewsletterSubscriber = {
  id: string
  email: string
  subscribed: boolean
  created_at: string
}

export type BlogDraft = {
  id: string
  title: string
  slug: string
  content: string | null
  status: 'draft' | 'published'
  author_id: string | null
  created_at: string
  updated_at: string
}

export type AdminSession = {
  id: string
  token: string
  expires_at: string
  created_at: string
}

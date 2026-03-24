import { z } from 'zod'

export const contactSchema = z.object({
  email: z.string().email('Email invalide'),
  name: z.string().min(2, 'Le nom doit avoir au moins 2 caractères'),
  message: z.string().min(10, 'Le message doit avoir au moins 10 caractères'),
})

export type ContactInput = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Email invalide'),
})

export type NewsletterInput = z.infer<typeof newsletterSchema>

export const adminLoginSchema = z.object({
  password: z.string().min(1, 'Mot de passe requis'),
})

export type AdminLoginInput = z.infer<typeof adminLoginSchema>

export const blogCreateSchema = z.object({
  title: z.string().min(3, 'Le titre doit avoir au moins 3 caractères'),
  slug: z.string().min(3, 'Le slug doit avoir au moins 3 caractères').optional(),
  content: z.string().optional(),
  status: z.enum(['draft', 'published']).default('draft'),
})

export const blogUpdateSchema = blogCreateSchema.partial()

export type BlogCreateInput = z.infer<typeof blogCreateSchema>
export type BlogUpdateInput = z.infer<typeof blogUpdateSchema>

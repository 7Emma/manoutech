import { cookies } from 'next/headers'
import { randomBytes } from 'crypto'
import bcrypt from 'bcryptjs'
import { supabase } from './db'

const BOOTSTRAP_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
const BOOTSTRAP_EMAIL = process.env.ADMIN_EMAIL || 'admin@manoutech.com'

async function getOrBootstrapAdmin() {
  // Try to fetch existing admin user
  const { data: existing, error } = await supabase
    .from('admin_users')
    .select('id, email, password_hash')
    .limit(1)
    .maybeSingle()

  if (error) throw error
  if (existing) return existing

  // No admin user yet; bootstrap from env if available
  if (!BOOTSTRAP_PASSWORD) {
    throw new Error('No admin user found and no bootstrap password provided')
  }

  const password_hash = await bcrypt.hash(BOOTSTRAP_PASSWORD, 12)
  const { data: created, error: insertError } = await supabase
    .from('admin_users')
    .insert({ email: BOOTSTRAP_EMAIL, password_hash })
    .select('id, email, password_hash')
    .maybeSingle()

  if (insertError) throw insertError
  if (!created) throw new Error('Failed to bootstrap admin user')
  return created
}

export async function adminLogin(password: string) {
  const admin = await getOrBootstrapAdmin()

  const isValid = await bcrypt.compare(password, admin.password_hash)
  if (!isValid) throw new Error('Invalid password')

  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days

  // Create session using SQL function
  const { error } = await supabase.rpc('create_admin_session', {
    p_token: token,
    p_expires_at: expiresAt.toISOString(),
  })

  if (error) throw error

  const cookieStore = await cookies()
  cookieStore.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60,
  })

  return token
}

export async function adminLogout() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  if (token) {
    // Delete session using SQL function
    await supabase.rpc('delete_admin_session', {
      p_token: token,
    })
    cookieStore.delete('admin_token')
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  if (!token) return null

  // Verify session using SQL function
  const { data } = await supabase.rpc('verify_admin_session', {
    p_token: token,
  })

  if (!data || data.length === 0) return null

  const session = data[0]

  // Check if valid (not expired)
  if (!session.valid) {
    await supabase.rpc('delete_admin_session', {
      p_token: token,
    })
    cookieStore.delete('admin_token')
    return null
  }

  return session
}

export async function isAdminAuth() {
  const session = await getAdminSession()
  return !!session
}

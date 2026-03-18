import { cookies } from 'next/headers'
import { randomBytes } from 'crypto'
import { supabase } from './db'

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

if (!ADMIN_PASSWORD) {
  throw new Error('Missing NEXT_PUBLIC_ADMIN_PASSWORD in env')
}

export async function adminLogin(password: string) {
  if (password !== ADMIN_PASSWORD) {
    throw new Error('Invalid password')
  }

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

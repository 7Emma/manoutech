import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getAdminSession } from '@/lib/auth'
import { supabase } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const session = await getAdminSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { currentPassword, newPassword } = body || {}

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'currentPassword and newPassword are required' },
        { status: 400 }
      )
    }

    // Fetch admin user (single admin assumption)
    const { data: admin, error } = await supabase
      .from('admin_users')
      .select('id, password_hash')
      .limit(1)
      .maybeSingle()

    if (error) {
      console.error('Fetch admin error:', error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }

    if (!admin) {
      return NextResponse.json({ error: 'Admin user not found' }, { status: 404 })
    }

    const ok = await bcrypt.compare(currentPassword, admin.password_hash)
    if (!ok) {
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 })
    }

    const newHash = await bcrypt.hash(newPassword, 12)
    const { error: updateError } = await supabase
      .from('admin_users')
      .update({ password_hash: newHash })
      .eq('id', admin.id)

    if (updateError) {
      console.error('Update password error:', updateError)
      return NextResponse.json({ error: 'Failed to update password' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/auth'
import { supabase } from '@/lib/db'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json().catch(() => ({}))
    const { read } = body

    if (typeof read !== 'boolean') {
      return NextResponse.json({ error: 'read boolean required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('notifications')
      .update({ read })
      .eq('id', id)
      .select()
      .maybeSingle()

    if (error) {
      console.error('Notif update error:', error)
      return NextResponse.json({ error: 'Failed to update notification' }, { status: 500 })
    }

    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({ data })
  } catch (err) {
    console.error('Notif PATCH error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const { error } = await supabase.from('notifications').delete().eq('id', id)
    if (error) {
      console.error('Notif delete error:', error)
      return NextResponse.json({ error: 'Failed to delete notification' }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Notif DELETE error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

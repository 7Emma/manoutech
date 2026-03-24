import { NextRequest, NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/auth'
import { supabase } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const session = await getAdminSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: stats, error: statsError } = await supabase
      .rpc('get_dashboard_stats')
      .maybeSingle()

    if (statsError) {
      console.error('Dashboard stats error:', statsError)
      return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
    }

    // Blog counts
    const publishedPromise = supabase
      .from('blog_drafts')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published')

    const draftsPromise = supabase
      .from('blog_drafts')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'draft')

    const notifPromise = supabase
      .from('notifications')
      .select('*', { count: 'exact', head: true })
      .eq('read', false)

    const [publishedRes, draftsRes, notifRes] = await Promise.all([publishedPromise, draftsPromise, notifPromise])

    const blog = {
      published: publishedRes.count || 0,
      drafts: draftsRes.count || 0,
      total: (publishedRes.count || 0) + (draftsRes.count || 0),
    }

    return NextResponse.json({
      data: {
        totalMessages: stats?.total_messages || 0,
        unreadMessages: stats?.unread_messages || 0,
        subscribers: stats?.subscribers || 0,
        messagesThisMonth: stats?.messages_this_month || 0,
        blog,
        notifications: {
          unread: notifRes.count || 0,
          total: (notifRes.count || 0),
        },
      },
    })
  } catch (error) {
    console.error('Unexpected dashboard error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

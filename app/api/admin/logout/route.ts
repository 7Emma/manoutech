import { NextRequest, NextResponse } from 'next/server'
import { adminLogout } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    await adminLogout()

    // Redirect to login page
    return NextResponse.redirect(new URL('/admin/login', request.url), {
      status: 303,
    })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { adminLoginSchema } from '@/lib/validation'
import { adminLogin } from '@/lib/auth'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const { password } = adminLoginSchema.parse(body)

    // Attempt login
    await adminLogin(password)

    return NextResponse.json(
      {
        success: true,
        message: 'Connected',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: 'Validation error',
          details: error.flatten(),
        },
        { status: 400 }
      )
    }

    if (error instanceof Error && error.message === 'Invalid password') {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

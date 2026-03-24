import { NextRequest, NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validation'
import { supabase } from '@/lib/db'
import { sendNewsletterWelcomeEmail } from '@/lib/email'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const { email } = newsletterSchema.parse(body)

    // Subscribe using SQL function (handles insert/update)
    const { data, error } = await supabase.rpc('subscribe_newsletter', {
      p_email: email,
    })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    // Send welcome email + create notification
    try {
      await sendNewsletterWelcomeEmail(email)
      await supabase.from('notifications').insert({
        title: 'Nouvel abonné',
        message: `${email} vient de s'inscrire`,
        type: 'newsletter',
      })
    } catch (emailError) {
      console.error('Welcome email failed:', emailError)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inscription réussie',
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: 'Validation error',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

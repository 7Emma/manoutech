import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'
import { supabase } from '@/lib/db'
import { sendContactNotificationEmail } from '@/lib/email'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const { email, name, message } = contactSchema.parse(body)

    // Save to database using SQL function
    const { data, error } = await supabase.rpc('create_message', {
      p_email: email,
      p_name: name,
      p_message: message,
    })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      )
    }

    // Get the created message ID
    const messageId = data[0]?.id

    // Send email notification to admin
    try {
      await sendContactNotificationEmail(name, email, message, messageId)
      // Create in-app notification
      await supabase.from('notifications').insert({
        title: 'Nouveau message reçu',
        message: `${name} vous a écrit`,
        type: 'message',
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message envoyé avec succès',
        id: messageId,
      },
      { status: 201 }
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

    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

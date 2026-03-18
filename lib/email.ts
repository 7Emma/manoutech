import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const APP_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

if (!RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY')
}

if (!ADMIN_EMAIL) {
  throw new Error('Missing ADMIN_EMAIL')
}

const resend = new Resend(RESEND_API_KEY)

export async function sendContactNotificationEmail(
  senderName: string,
  senderEmail: string,
  message: string,
  messageId: string
) {
  try {
    await resend.emails.send({
      from: 'contact@manoutech.com',
      to: ADMIN_EMAIL,
      subject: `Nouveau message de ${senderName}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>De:</strong> ${senderName} (${senderEmail})</p>
        <hr />
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>
          <a href="${APP_URL}/admin/messages/${messageId}" style="background-color: #242675; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">
            Voir le message
          </a>
        </p>
      `,
    })

    return true
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

export async function sendNewsletterWelcomeEmail(email: string) {
  try {
    await resend.emails.send({
      from: 'hello@manoutech.com',
      to: email,
      subject: 'Bienvenue sur Manoutech Newsletter',
      html: `
        <h2>Bienvenue!</h2>
        <p>Merci de vous être abonné à notre newsletter.</p>
        <p>Vous recevrez les derniers articles et actualités de Manoutech.</p>
      `,
    })

    return true
  } catch (error) {
    console.error('Error sending welcome email:', error)
    throw error
  }
}

export async function sendReplyEmail(
  recipientEmail: string,
  message: string,
  senderName: string = 'Manoutech'
) {
  try {
    await resend.emails.send({
      from: 'hello@manoutech.com',
      to: recipientEmail,
      subject: `Réponse de ${senderName}`,
      html: `
        <h2>Réponse à votre message</h2>
        ${message.replace(/\n/g, '<br>')}
        <hr />
        <p>Merci de nous avoir contactés!</p>
      `,
    })

    return true
  } catch (error) {
    console.error('Error sending reply email:', error)
    throw error
  }
}

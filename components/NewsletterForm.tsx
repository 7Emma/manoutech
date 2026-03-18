'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const { details } = await response.json()
        const firstError = details?.[0]?.message || 'Erreur lors de l\'inscription'
        setErrorMessage(firstError)
        setStatus('error')
        return
      }

      setStatus('success')
      setEmail('')

      // Reset success message after 5s
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? 'Inscription...' : "S'abonner"}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}

      {status === 'success' && (
        <p className="text-green-600 text-sm mt-2">
          ✓ Inscription réussie! Vérifiez votre email.
        </p>
      )}
    </form>
  )
}

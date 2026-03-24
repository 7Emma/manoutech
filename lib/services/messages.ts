import { apiCall } from './client'
import type { ContactMessage } from '@/types/database'

export const messagesService = {
  async list(params?: { limit?: number; offset?: number; archived?: boolean }) {
    return apiCall<{ data: ContactMessage[]; pagination: any }>('/messages', {
      base: '/api',
      params,
    })
  },

  async get(id: string) {
    return apiCall<{ data: ContactMessage }>('/messages/' + id, { base: '/api' })
  },

  async toggleArchived(id: string) {
    return apiCall('/messages/' + id, {
      base: '/api',
      method: 'PATCH',
      body: { archived: true },
    })
  },

  async remove(id: string) {
    return apiCall('/messages/' + id, { base: '/api', method: 'DELETE' })
  },
}

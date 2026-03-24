import { apiCall } from './client'

export const notificationsService = {
  async list(limit = 50, offset = 0, status: 'all' | 'read' | 'unread' = 'all') {
    return apiCall<{ data: any[]; pagination: any }>('/notifications', {
      base: '/api/admin',
      params: { limit, offset, status: status === 'all' ? undefined : status },
    })
  },

  async mark(id: string, read: boolean) {
    return apiCall<{ data: any }>('/notifications/' + id, {
      base: '/api/admin',
      method: 'PATCH',
      body: { read },
    })
  },

  async remove(id: string) {
    return apiCall('/notifications/' + id, {
      base: '/api/admin',
      method: 'DELETE',
    })
  },
}

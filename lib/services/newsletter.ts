import { apiCall } from './client'

export const newsletterService = {
  async list(limit = 50, offset = 0) {
    return apiCall<{ data: any[]; pagination: any }>('/newsletter', {
      base: '/api/admin',
      params: { limit, offset },
    })
  },

  async remove(id: string) {
    return apiCall('/newsletter', {
      base: '/api/admin',
      method: 'DELETE',
      body: { id },
    })
  },

  async bulkRemove(ids: string[]) {
    return Promise.all(ids.map((id) => this.remove(id)))
  },
}

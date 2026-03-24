import { apiCall } from './client'
import type { BlogDraft } from '@/types/database'

export const blogService = {
  async list(limit = 50, offset = 0, status?: string) {
    const params: Record<string, string | number> = { limit, offset }
    if (status) params.status = status
    return apiCall<{ data: BlogDraft[]; pagination: any }>('/blog', {
      base: '/api/admin',
      params,
    })
  },

  async getBySlug(slug: string) {
    return apiCall<{ data: BlogDraft[]; pagination?: any }>('/blog', {
      base: '/api/admin',
      params: { slug },
    })
  },

  async create(payload: Partial<BlogDraft> & { title: string }) {
    return apiCall<{ data: BlogDraft }>('/blog', {
      base: '/api/admin',
      method: 'POST',
      body: payload,
    })
  },

  async get(id: string) {
    return apiCall<{ data: BlogDraft }>('/blog/' + id, { base: '/api/admin' })
  },

  async update(id: string, payload: Partial<BlogDraft>) {
    return apiCall<{ data: BlogDraft }>('/blog/' + id, {
      base: '/api/admin',
      method: 'PATCH',
      body: payload,
    })
  },

  async remove(id: string) {
    return apiCall('/blog', {
      base: '/api/admin',
      method: 'DELETE',
      body: { id },
    })
  },

  async bulkRemove(ids: string[]) {
    return Promise.all(ids.map((id) => this.remove(id)))
  },
}

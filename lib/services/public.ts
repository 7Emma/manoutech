import { apiCall } from './client'

export const publicService = {
  async sendContact(payload: { name: string; email: string; message: string }) {
    return apiCall<{ success: boolean; message: string; id?: string }>('/contact', {
      base: '/api',
      method: 'POST',
      body: payload,
    })
  },

  async subscribeNewsletter(payload: { email: string }) {
    return apiCall<{ success: boolean; message: string }>('/newsletter', {
      base: '/api',
      method: 'POST',
      body: payload,
    })
  },
}

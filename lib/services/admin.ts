import { apiCall } from './client'

export const adminService = {
  async login(password: string) {
    return apiCall<{ success: boolean; message: string }>('/login', {
      base: '/api/admin',
      method: 'POST',
      body: { password },
    })
  },

  async logout() {
    return apiCall('/logout', { base: '/api/admin', method: 'POST' })
  },

  async session() {
    return apiCall<{ success: boolean; session: any }>('/session', {
      base: '/api/admin',
    })
  },

  async changePassword(currentPassword: string, newPassword: string) {
    return apiCall<{ success: boolean }>('/password', {
      base: '/api/admin',
      method: 'POST',
      body: { currentPassword, newPassword },
    })
  },

  async dashboard() {
    return apiCall<{ data: {
      totalMessages: number
      unreadMessages: number
      subscribers: number
      messagesThisMonth: number
      blog: { published: number; drafts: number; total: number }
      notifications?: { unread: number; total: number }
    } }>('/dashboard', { base: '/api/admin' })
  },
}

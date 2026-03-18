// Admin API client for dashboard pages

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  params?: Record<string, string | number | boolean>
}

async function apiCall(endpoint: string, options: ApiOptions = {}) {
  const { method = 'GET', body, params } = options

  // Build URL with query params
  let url = `/api/admin${endpoint}`
  if (params) {
    const queryString = new URLSearchParams(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    ).toString()
    if (queryString) url += `?${queryString}`
  }

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error || `API error: ${response.statusText}`)
  }

  return response.json()
}

// Newsletter API
export const newsletterAPI = {
  async getSubscribers(limit = 50, offset = 0) {
    return apiCall('/newsletter', { params: { limit, offset } })
  },

  async deleteSubscriber(id: string) {
    return apiCall('/newsletter', {
      method: 'DELETE',
      body: { id },
    })
  },

  async bulkDeleteSubscribers(ids: string[]) {
    return Promise.all(ids.map(id => this.deleteSubscriber(id)))
  },
}

// Blog API
export const blogAPI = {
  async getArticles(limit = 50, offset = 0, status?: string) {
    const params: any = { limit, offset }
    if (status) params.status = status
    return apiCall('/blog', { params })
  },

  async deleteArticle(id: string) {
    return apiCall('/blog', {
      method: 'DELETE',
      body: { id },
    })
  },

  async bulkDeleteArticles(ids: string[]) {
    return Promise.all(ids.map(id => this.deleteArticle(id)))
  },
}

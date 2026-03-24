type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type ApiCallOptions = {
  method?: HttpMethod
  body?: any
  params?: Record<string, string | number | boolean | undefined>
  base?: '/api' | '/api/admin'
}

/**
 * Minimal fetch wrapper for relative API calls (works client-side).
 * Adds JSON headers, query params, and surfaces API errors as exceptions.
 */
export async function apiCall<T = any>(
  path: string,
  { method = 'GET', body, params, base = '/api' }: ApiCallOptions = {}
): Promise<T> {
  let url = `${base}${path.startsWith('/') ? path : `/${path}`}`

  if (params) {
    const qs = new URLSearchParams()
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) qs.append(k, String(v))
    })
    const queryString = qs.toString()
    if (queryString) url += `?${queryString}`
  }

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}))
    const message = errBody.error || errBody.message || res.statusText
    throw new Error(message)
  }

  // Some endpoints (DELETE) may return empty
  const text = await res.text()
  if (!text) return {} as T
  try {
    return JSON.parse(text) as T
  } catch {
    return text as unknown as T
  }
}

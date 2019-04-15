/* eslint-disable no-console */
import fetch from '../lib/fetch'

const isBrowser = typeof window !== 'undefined'
const HOST = `http://localhost:${process.env.PORT}`

const initFetch = fetch({
  baseURL: isBrowser ? window.location.origin : HOST,
  timeout: 60000
})

export const api = initFetch

export default {
  // get: async (url, params, headers = null) => api.get(url, params, { headers }),
  get: async (url, params, headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJiMTRkMTQ0My04ZGVkLWU0MTEtYjRjNy0wMDE1NWRjY2QzMTMiLCJ0cyI6MTU1NTE2MTIwNTgxN30.6U3FXzMDXbaqQ79aWYVMYc2AfXdJnW_r7wI4DG0fuyg` }) => api.get(url, params, { headers }),
  del: async url => api.delete(url, null),
  put: async (url, body) => api.put(url, body),
  post: async (url, body, headers = null) => api.post(url, body, { headers })
}

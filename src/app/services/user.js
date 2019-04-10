import http from './_http'

const User = {
  signIn: (data) => {
    const {
      username, password
    } = data
    const params = {
      username,
      password,
      generateCsrfToken: true,
      expirationPolicy: 'AFTER_LOGIN'
    }
    return http.post('/msvc/v1/login', params)
  },
  getRoles: headers => http.get('/msvc/v1/login', null, headers),

  signOut: () => http.del('/msvc/v1/login'),

  findUser: crmGuid => http.get(`/msvc/v1/userprofiles/find?crmGuid=${crmGuid}`),

  getMe: () => http.get('/msvc/v1/userprofiles/me'),

  resolveUserId: (entityType, entityId) => http
    .get(`/msvc/v1/userprofiles/resolution/resolve/${entityType}/${entityId}`),

  autocomplete: (entityType, params) => http
    .get(`/msvc/v1/userprofiles/resolution/autocomplete/${entityType}`, params)
}

export default User

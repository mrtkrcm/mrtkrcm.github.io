import http from './_http'

const headers = { 'cache-control': 'no-cache' }

const Languages = {
  getList: () => http.get('/msvc/v1/pages/locales', null, headers)
}

export default Languages

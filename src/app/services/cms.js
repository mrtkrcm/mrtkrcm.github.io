import http from './_http'

const Cms = {
  getPageByUrl: url => http.get('/msvc/v1/pageviews', {
    url
  })
}

export default Cms

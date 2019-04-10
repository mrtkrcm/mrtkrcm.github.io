import http from './_http'

const Place = {
  autocomplete: text => http.get(`/msvc/v1/places/suggestions?input=${text}`),
  getPlace: id => http.get(`/msvc/v1/places/items/${id}`)
}

export default Place

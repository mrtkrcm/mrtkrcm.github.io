import qs from 'query-string'

class City {
  constructor(context) {
    this.context = context
  }

  closest = params => this.context.http.get(`/msvc/v1/cities/closest/?${qs.stringify(params)}`)
}

export default City

import qs from 'query-string'

class Event {
  constructor(context) {
    this.context = context
  }

  getAttributes() {
    const params = {
      attributeType: 'EVENT_TYPE'
    }
    return this.context.http.get(`/msvc/v1/events/attributes/?${qs.stringify(params)}`)
  }
}

export default Event

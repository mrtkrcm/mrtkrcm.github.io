import qs from 'query-string'

/**
 * This class contains the services for Events. The constructor requires a context to be passed.
 * When using the Event Class, it will require a context to be passed. The context contains the
 * http object, which is specific for each environment
 */
class Event {
  constructor(context) {
    this.context = context
  }

  getAttributes() {
    const params = {
      attributeType: 'EVENT_TYPE',
      limit: 50
    }
    return this.context.http.get(`/msvc/v1/events/attributes/?${qs.stringify(params)}`)
  }

  get(id) {
    return this.context.http.get(`/msvc/v1/events/event/${id}`)
  }

  // Updates
  put(id, params) {
    return this.context.http.put(`/msvc/v1/events/event/${id}`, params)
  }

  // Change status
  updateStatus(id, status) {
    return this.context.http.put(`/msvc/v1/events/event/${id}/status`, status)
  }

  // Creates
  post(params) {
    return this.context.http.post('/msvc/v1/events/event', params)
  }

  del(id) {
    return this.context.http.del(`/msvc/v1/events/event/${id}`)
  }
}

export default Event

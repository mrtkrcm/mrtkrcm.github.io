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
      attributeType: 'EVENT_TYPE'
    }
    return this.context.http.get(`/msvc/v1/events/attributes/?${qs.stringify(params)}`)
  }
}

export default Event

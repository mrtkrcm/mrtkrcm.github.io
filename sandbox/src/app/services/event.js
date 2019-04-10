import qs from 'query-string'
import http from './_http'

const Event = {
  getEventAttributes: () => {
    const params = {
      attributeType: 'EVENT_TYPE'
    }

    return http.get(`/msvc/v1/events/attributes/?${qs.stringify(params)}`)
  }
}

export default Event

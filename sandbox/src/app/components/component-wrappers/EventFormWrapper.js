import React from 'react'
import http from '../../services/_http'
import EventForm from '../shared-components/dmi-mch-event-form/src'

const EventFormWrapper = () => (
  <EventForm
    id={10}
    context={{ http }}
    // context={{
    //   http: {
    //     get: (uri) => {
    //       if (uri === '/msvc/v1/events/attributes/?attributeType=EVENT_TYPE') {
    //         return {
    //           items: [
    //             {
    //               id: -8,
    //               type: 'Type',
    //               title: 'Other'
    //             },
    //             {
    //               id: -7,
    //               type: 'Type',
    //               title: 'Openings & receptions'
    //             },
    //             {
    //               id: -5,
    //               type: 'Type',
    //               title: 'Labs & lounges'
    //             }
    //           ],
    //           total: 11,
    //           hasMore: true,
    //           offset: 0,
    //           limit: 10
    //         }
    //       }
    //       return {}
    //     }
    //   }
    // }}
  />
)

export default EventFormWrapper

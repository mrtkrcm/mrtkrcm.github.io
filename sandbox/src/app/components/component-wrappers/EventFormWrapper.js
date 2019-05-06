/* eslint-disable max-len */
import React from 'react'
import Router from 'next/router'
import NoSSR from 'react-no-ssr'

import http from '../../services/_http'
import EventForm from '../shared-components/dmi-mch-event-form/src'


const EventFormWrapper = () => {
  const id = (Router.router && parseInt(Router.router.query.id, 0)) || null
  return (
    <NoSSR>
      <EventForm
        id={id}
        title={id ? `Edit Event #${id}` : 'Add Event'}
        submitButton={{
          show: true
        }}
        // In Sandbox
        // configuration={
        //   getEnvConfig.fe
        // }
        // .wag.whitelist.vip
        configuration={{
          eventsandexhibitions: {
            wag: {
              whitelist: {
                vip: '2000162',
                custom: '2000045'
              }
            }
          },
          cloudinary: {
            apiKey: 949933597977335,
            name: 'dqzqcuqf9'
          }
        }}
        context={{ http }}
      />
    </NoSSR>
  )
}

export default EventFormWrapper

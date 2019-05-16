/* eslint-disable max-len */
import React from 'react'
import Router from 'next/router'
import NoSSR from 'react-no-ssr'

import http from '../../services/_http'
import EventForm from '../shared-components/dmi-mch-event-form/src'


const EventFormWrapper = () => {
  const id = (Router.router && parseInt(Router.router.query.id, 0)) || null

  let submitEventForm = null
  let deleteEventForm = null

  const handleSubmitEventForm = (e) => {
    if (submitEventForm) {
      submitEventForm(e)
    }
  }

  const bindSubmitForm = (submitForm) => {
    submitEventForm = submitForm
  }

  const handleDeleteEventForm = (e) => {
    if (deleteEventForm) {
      deleteEventForm(e)
    }
  }

  const bindDeleteForm = (submitForm) => {
    deleteEventForm = submitForm
  }

  return (
    <NoSSR>
      <button onClick={handleSubmitEventForm} type='button'>Submit from outside</button>
      <button onClick={handleDeleteEventForm} type='button'>Delete from outside</button>
      <EventForm
        id={id}
        title={id ? `Edit Event #${id}` : 'Add Event'}
        showControls
        bindSubmitForm={bindSubmitForm}
        bindDeleteForm={bindDeleteForm}
        showAdvancedVisibilityPanel={false}
        language='en'
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

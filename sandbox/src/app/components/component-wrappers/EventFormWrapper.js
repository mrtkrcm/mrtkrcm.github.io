/* eslint-disable max-len */
import React, { useState } from 'react'
import Router from 'next/router'
import NoSSR from 'react-no-ssr'

import http from '../../services/_http'
import EventForm from '../shared-components/dmi-mch-event-form/src'


const EventFormWrapper = () => {
  const [isDirty, setDirty] = useState(false)
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

  const isFormDirty = (dirt) => {
    setDirty(dirt)
  }

  return (
    <NoSSR>
      <button onClick={handleSubmitEventForm} disabled={!isDirty} type='button'>Submit from outside</button>
      <button onClick={handleDeleteEventForm} type='button'>Delete from outside</button>
      <EventForm
        id={id}
        title={id ? `Edit Event #${id}` : 'Add Event'}
        showControls
        isDirty={isFormDirty}
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
        bodycolor='white'
        headerseparatorcolor='#dbdbdb'
      />
    </NoSSR>
  )
}

export default EventFormWrapper

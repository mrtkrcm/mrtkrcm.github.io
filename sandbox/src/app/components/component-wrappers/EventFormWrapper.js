/* eslint-disable max-len */
import React, { useState } from 'react'
import Router from 'next/router'
import NoSSR from 'react-no-ssr'

import http from '../../services/_http'
import EventForm from '../shared-components/dmi-mch-event-form/src'


const EventFormWrapper = () => {
  // Used mostly to disabled the button when form has no changes, and keep a "healthy" form.
  const [isDirty, setDirty] = useState(false)
  // Used mostly for button state. Will disable the button during Saving time
  const [isProcessing, setProcessing] = useState(false)
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

  const isFormProcessing = (processing) => {
    setProcessing(processing)
  }

  return (
    <NoSSR>
      <button onClick={handleSubmitEventForm} disabled={!isDirty || isProcessing} type='button'>Submit from outside</button>
      <button onClick={handleDeleteEventForm} type='button'>Delete from outside</button>
      <EventForm
        // debug
        id={id}
        title={id ? `Edit Event #${id}` : 'Add Event'}
        showControls
        isDirty={isFormDirty}
        isFormProcessing={isFormProcessing}
        bindSubmitForm={bindSubmitForm}
        bindArchiveForm={bindDeleteForm}
        displayRichEditor
        archiveCallback={() => {
          window.location.href = '/'
        }}
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
        showAdvancedVisibilityPanel
        showPublishingArchiveRadio
        // showAttributesPanel
        showAccessPanel
        // TODO
        showWarnings
      />
    </NoSSR>
  )
}

export default EventFormWrapper

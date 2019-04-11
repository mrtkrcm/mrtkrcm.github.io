import React, { useEffect, useState } from 'react'
import { Input, Form, Grid, TextArea, Label, Button } from 'semantic-ui-react'

import logger from 'dmi-mch-utils-logger'
// import Event from 'dmi-mch-services-event'

import Event from '../../../../../services/event'
import validateAxiosResponse from '../../../../../utils/validateAxiosResponse'

const getEventAttributes = async (context) => {
  console.log('context', context)
  try {
    // Event.setContext(context)
    const event = new Event(context)
    const eventAttributes = event.getEventAttributes()
    console.log('DONE', eventAttributes)
    if (validateAxiosResponse(eventAttributes)) {
      console.log('DONE')
    }
  } catch (e) {
    logger(e)
  }
}

const EventForm = (props) => {
  useEffect(() => {
    console.log('props', props)
    getEventAttributes(props.context)
  })

  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    description,
    user,
    setUser,
    autocompleteUserOptions,
    autocompletePlaceOptions,
    handlePlaceChange,
    setPlace,
    statusesDropdown,
    categoriesDropdown,
    place,
    actionBarTitle,
    pageTitle,
    isFormSubmitted,
    setIsFormSubmitted,
    formControls,
    maxCommentSize
  } = props

  return (
    <>
      <h2>New Event</h2>
      <Form onSubmit={handleSubmit}>
        <Button type='submit'>Submit</Button>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Location*'
                  options={[]}
                />
              </Form.Field>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Type of Event*'
                  options={[{ key: '0', value: 'Test', option: 'option', label: 'label' }]}
                />
              </Form.Field>
              <Form.Field>
                <label>Title*</label>
                <Input
                  id='title'
                  type='text'
                  name='title'
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.title && touched.title}
                />
                {errors.title && touched.title && <p className='help is-danger'>{errors.title}</p>}
              </Form.Field>
              <Form.Field>
                <label>Sub-Title</label>
                <Input type='text' />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <TextArea type='text' />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Image*</label>
                <Input type='text' />
              </Form.Field>
              <Form.Field>
                <label>Image caption</label>
                <Input type='text' />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </>
  )
}

export default EventForm

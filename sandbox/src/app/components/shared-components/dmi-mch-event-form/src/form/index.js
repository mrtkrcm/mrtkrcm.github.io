/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Grid, TextArea, Button, Radio, Image } from 'semantic-ui-react'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'
import Logger from 'dmi-mch-utils-logger'
import Event from 'dmi-mch-services-event'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import { buildSelectOptions } from 'dmi-mch-utils-dropdown'

import Account from '../../../dmi-mch-services-account/src'

const EventForm = (props) => {
  const [eventAttributesDropdown, setEventAttributesDropdown] = useState([])
  const [myAddresses, setMyAddresses] = useState([])
  const { context, setAddressessList } = props

  useEffect(() => {
    const event = new Event(context)
    // Fetching Event Attributes
    const fetchEventAttributes = async () => {
      try {
        const attributes = await event.getAttributes()
        if (ValidateAxiosResponse(attributes)) {
          const selectItem = {
            key: 'id',
            value: 'id',
            text: 'title',
            name: 'type'
          }
          const dropdownOptions = buildSelectOptions(attributes.data.items, selectItem)
          setEventAttributesDropdown(dropdownOptions)
        }
      } catch (e) {
        Logger(e)
      }
    }

    // Fetching the list of locations, first fetching myAccount
    const account = new Account(context)
    const fetchMyAccount = async () => {
      try {
        const myAcc = await account.getMine()
        if (ValidateAxiosResponse(myAcc)) {
          const myAddressesList = await account.getMineAddresses(myAcc.data[0].id)
          const selectItem = {
            key: 'locationId',
            value: 'locationId',
            text: 'name',
            name: 'myAddress'
          }
          setAddressessList(myAddressesList.data)
          const dropdownOptions = buildSelectOptions(myAddressesList.data, selectItem)
          setMyAddresses(dropdownOptions)
        }
      } catch (e) {
        Logger(e)
      }
    }

    fetchEventAttributes()
    fetchMyAccount()
  }, [context, setAddressessList])

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
    // description,
    // user,
    // setUser,
    // autocompleteUserOptions,
    // autocompletePlaceOptions,
    // handlePlaceChange,
    // setPlace,
    // statusesDropdown,
    // categoriesDropdown,
    // place,
    // actionBarTitle,
    // pageTitle,
    // isFormSubmitted,
    // setIsFormSubmitted,
    // formControls,
    // maxCommentSize
  } = props

  return (
    <>
      <h2>New Event</h2>
      <Form onSubmit={handleSubmit}>
        <Button type='submit'>Submit</Button>
        <h2>Key Information</h2>
        <Grid>
          {/* {console.log(currentEvent)} */}
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Type of Event*'
                  options={eventAttributesDropdown}
                  multiple
                  value={values.eventTypes}
                />
              </Form.Field>
              <Form.Field error={errors.title && touched.title}>
                <label htmlFor='title'>Title*</label>
                <Input
                  type='text'
                  name='title'
                  id='title'
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.title && touched.title}
                />
                {errors.title && touched.title && <p className='help is-danger'>{errors.title}</p>}
              </Form.Field>
              <Form.Field>
                <label>Sub-Title</label>
                <Input name='shortParagraphText' type='text' value={values.shortParagraphText} />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <TextArea name='longParagraphText' type='text' value={values.longParagraphText} />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Image*</label>
                <Image src={values.eventImage} />
              </Form.Field>
              <Form.Field>
                <label>Image caption</label>
                <Input type='text' />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h2>Venue</h2>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Location*'
                  name='locationId'
                  options={myAddresses}
                  value={values.locationId}
                />
              </Form.Field>
              <Form.Field>
                <label>Search Location / Venue</label>
                <Input type='text' />
              </Form.Field>
              <Form.Field>
                <label>Venue Name</label>
                <Input name='venueName' disabled type='text' value={values.venueName} />
              </Form.Field>
              <Form.Field>
                <label>Address Line</label>
                <Input
                  disabled
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
                <label>City</label>
                <Input disabled name='city' type='text' value={values.city} />
              </Form.Field>
              <Form.Field>
                <label>Country</label>
                <Input disabled name='country' type='text' value={values.country} />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>&nbsp;</label>
                <Button type='button'>Clear fields</Button>
              </Form.Field>
              <Form.Field>
                <label>Location detail (optional)</label>
                <Input disabled type='text' />
              </Form.Field>
              <Form.Field>
                <label>ZIP Code</label>
                <Input disabled type='text' />
              </Form.Field>
              <Form.Field>
                <label>State (U.S Only</label>
                <Input disabled type='text' />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h2>Date &amp; Time</h2>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Form.Field>
                <label>Date*</label>
                <DateInput
                  autoComplete='new-date'
                  name='date'
                  placeholder='Date'
                  value={values.date}
                  iconPosition='left'
                  // onChange={this.handleChange}
                />
                {/* <Input type='text' value={values.date} /> */}
                *Event date and time is in the Event Location/Venue’s time zone
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Start time*</label>
                <TimeInput
                  name='endtime'
                  placeholder='Start time'
                  value={values.startTime}
                  iconPosition='left'
                  // onChange={this.handleChange}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>End time*</label>
                <TimeInput
                  name='endtime'
                  placeholder='End time'
                  value={values.endTime}
                  iconPosition='left'
                  // onChange={this.handleChange}
                />
              </Form.Field>
            </Grid.Column>


          </Grid.Row>
        </Grid>
        <h2>Publishing</h2>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Form.Field>
                <label>Events is visible for</label>
                <Radio label='Public' />
                <Radio label='VIPs only' />
                <Radio label='Custom' />
              </Form.Field>
            </Grid.Column>


          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Form.Field>
                <label>Status</label>
                <Radio id='radioOne' name='status' label='Draft' onChange={handleChange} />
                <Radio id='radioTwo' name='status' label='Live' onChange={handleChange} />
              </Form.Field>
            </Grid.Column>


          </Grid.Row>
        </Grid>
      </Form>
    </>
  )
}

EventForm.propTypes = {
  context: PropTypes.object,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  id: PropTypes.number,
  setAddressessList: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default EventForm

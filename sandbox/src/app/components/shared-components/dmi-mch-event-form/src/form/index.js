/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Form, Grid, TextArea, Button, Radio, Image, Search } from 'semantic-ui-react'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'
import Logger from 'dmi-mch-utils-logger'
import Event from 'dmi-mch-services-event'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import { buildSelectOptions } from 'dmi-mch-utils-dropdown'

import Account from '../../../dmi-mch-services-account/src'
import Place from '../../../dmi-mch-services-place/src'

const EventForm = (props) => {
  const [eventAttributesDropdown, setEventAttributesDropdown] = useState([])
  const [myAddresses, setMyAddresses] = useState([])
  const [isCustomLocationEnabled, setCustomLocationEnabled] = useState(false)
  const [customLocationValue, setCustomLocationValue] = useState('')
  // const [customLocationId, setCustomLocationId] = useState(null)
  const [locationSuggestions, setLocationSuggestions] = useState([])

  const { context, setAddressessList } = props
  const place = new Place(context)

  // This function updates the fields in the location, parting from a placeId
  const updateVenueFromId = async (id) => {
    const selectedPlace = await place.get(id)
    if (ValidateAxiosResponse(selectedPlace)) {
      props.setFieldValue('venue', selectedPlace.data)
      props.setFieldValue('placeId', id)
    }
  }

  const handleResultSelect = async (e, { result }) => {
    setCustomLocationValue(result.title)
    updateVenueFromId(result.value)
  }

  const handleSearchChange = async (e, { value }) => {
    setCustomLocationValue(value)
    // this.setState({ isLoading: true, value })

    try {
      const matches = await place.autocomplete(value)
      // console.log('matches', matches)
      if (ValidateAxiosResponse(matches)) {
        const remappedData = matches.data.map(item => ({ key: item.id, value: item.id, title: item.name }))
        // console.log(remappedData)
        setLocationSuggestions(remappedData)
      }
    } catch (err) {
      Logger(err)
    }
  }

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
            value: 'placeId',
            text: 'name',
            name: 'myAddress'
          }
          setAddressessList(myAddressesList.data)
          let locationsList = [...myAddressesList.data.filter(location => location.placeId)]
          locationsList = [
            ...locationsList,
            ...[{ locationId: 0, placeId: '0', name: '- CREATE CUSTOM LOCATION -' }]
          ]
          const dropdownOptions = buildSelectOptions(locationsList, selectItem)
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
    handleSubmit,
    setFieldValue
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
      {/* {console.log('customLocationId', customLocationId)} */}
      <Form onSubmit={handleSubmit}>
        <Button type='submit'>Submit</Button>
        <h2>Key Information</h2>
        <Grid>
          {/* {console.log(currentEvent)} */}
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <Form.Select
                  name='eventTypes'
                  fluid
                  label='Type of Event*'
                  options={eventAttributesDropdown}
                  onChange={(e, { value }) => {
                    setFieldValue('eventTypes', value)
                  }}
                  // onBlur={handleBlur}
                  error={(errors.eventTypes && true) && touched.eventTypes && true}
                  multiple
                  value={values.eventTypes}
                />
                {errors.eventTypes && touched.eventTypes && <p className='help is-danger'>{errors.eventTypes}</p>}
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
                <Input
                  type='text'
                  name='shortParagraphText'
                  id='shortParagraphText'
                  value={values.shortParagraphText}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.shortParagraphText && touched.shortParagraphText}
                />
                {errors.imageCaption && touched.imageCaption && <p className='help is-danger'>{errors.imageCaption}</p>}
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
                <Input
                  type='text'
                  name='imageCaption'
                  id='imageCaption'
                  value={values.imageCaption}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.imageCaption && touched.imageCaption}
                />
                {errors.imageCaption && touched.imageCaption && <p className='help is-danger'>{errors.imageCaption}</p>}
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h2>Venue</h2>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Select
                fluid
                label='Location*'
                name='placeId'
                options={myAddresses}
                value={values.placeId}
                onChange={(e, { value }) => {
                  if (value !== '0') {
                    updateVenueFromId(value)
                  } else {
                    setCustomLocationEnabled(true)
                  }
                }}
              />
              <Form.Field>
                <label>Search Location / Venue</label>
                <Search
                  disabled={!isCustomLocationEnabled}
                  onResultSelect={handleResultSelect}
                  onSearchChange={handleSearchChange}
                  results={locationSuggestions}
                  value={customLocationValue}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>Venue Name</label>
                <div>{values.venue.name}</div>
              </Form.Field>
              <Form.Field>
                <label>Address Line</label>
                <div>{values.venue.street || '-'}</div>
              </Form.Field>
              <Form.Field>
                <label>City</label>
                <div>{values.venue.city}</div>
              </Form.Field>
              <Form.Field>
                <label>Country</label>
                <div>{values.venue.country}</div>
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              {/* <Form.Field>
                <label>Location detail (optional)</label>
                <Input disabled type='text' />
              </Form.Field> */}
              <Form.Field>
                <label>ZIP Code</label>
                <div>{values.venue.postCode}</div>
                {/* <div>{currentEvent && currentEvent.venue && currentEvent.venue.city}</div> */}
              </Form.Field>
              <Form.Field>
                <label>State (U.S Only</label>
                <div>-</div>
                {/* <div>{currentEvent && currentEvent.venue && currentEvent.venue.city}</div> */}
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
          <Grid.Row columns={6}>
            <Grid.Column>
              <Form.Field>
                <label>Event is visible for</label>
                <Radio id='public' name='publishing' label='Public' onChange={handleChange} />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>&nbsp;</label>
                <Radio id='viponly' name='publishing' label='VIPs only' onChange={handleChange} />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>&nbsp;</label>
                <Radio id='custom' name='publishing' label='Custom' onChange={handleChange} />
              </Form.Field>
            </Grid.Column>


          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row columns={11}>
            <Grid.Column>
              <Form.Field>
                <label>Status</label>
                <Radio id='radioOne' name='status' label='Draft' onChange={handleChange} />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>&nbsp;</label>
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
  handleSubmit: PropTypes.func,
  setFieldValue: PropTypes.func
}

export default EventForm

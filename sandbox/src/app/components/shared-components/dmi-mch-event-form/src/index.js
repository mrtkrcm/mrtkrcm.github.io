/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
// Dayjs and datejs didn't work for the basic purpose below
import moment from 'moment'
import { Input, Form, Grid, Button, Radio, Search } from 'semantic-ui-react'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import Logger from 'dmi-mch-utils-logger'
import { buildSelectOptions } from 'dmi-mch-utils-dropdown'
import Account from 'dmi-mch-services-account'
import Place from 'dmi-mch-services-place'
import Uploader from 'dmi-mch-utils-imageuploader'
import UserGroupSelector from 'dmi-mch-usergroupselector'
import ImageCropperModal from 'dmi-mch-utils-imagecropper'
import AccesssPermission from 'dmi-mch-constants-accesspermission'
import City from 'dmi-mch-services-city'
import Event from 'dmi-mch-services-event'
import RichTextEditor from 'dmi-mch-richtextbox'

// TODO: As mentioned before, EventForm code should ideally be in a different file, but the current bundling
// does not allow this. Needs more investigation
const EventForm = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [eventAttributesDropdown, setEventAttributesDropdown] = useState([])
  const [myAddresses, setMyAddresses] = useState([])
  const [isCustomLocationEnabled, setCustomLocationEnabled] = useState(false)
  const [customLocationValue, setCustomLocationValue] = useState('')
  // const [customLocationId, setCustomLocationId] = useState(null)
  const [locationSuggestions, setLocationSuggestions] = useState([])

  const { context, setAddressessList } = props
  const place = new Place(context)

  // Finds the closest cityId
  const updateCityId = async (latitude, longitude) => {
    const city = new City(context)
    const closestCity = await city.closest({ latitude, longitude })
    if (ValidateAxiosResponse(closestCity)) {
      props.setFieldValue('cityId', closestCity.data.id)
    }
  }

  // This function updates the fields in the location, parting from a placeId
  const updateVenueFromId = async (id) => {
    props.setFieldValue('placeId', id)
    // If selecting CUSTOM LOCATION, we enable the search location field
    if (id !== '0') {
      setCustomLocationEnabled(false)
      const selectedPlace = await place.get(id)
      if (ValidateAxiosResponse(selectedPlace)) {
        props.setFieldValue('venue', selectedPlace.data)
        updateCityId(selectedPlace.data.latitude, selectedPlace.data.longitude)
      }
    } else {
      // props.setFieldValue('placeId', id)
      setCustomLocationEnabled(true)
      props.setFieldValue('venue', {})
    }
  }

  // Fired usually after selecting a new "custom" location in the autocomplete
  const handleResultSelect = useCallback((e, { result }) => {
    setCustomLocationValue(result.title)
    updateVenueFromId(result.value)

    // updateVenueFromId(result.value)
  }, [updateVenueFromId])

  const handleSearchChange = async (e, { value }) => {
    setCustomLocationValue(value)
    // this.setState({ isLoading: true, value })

    try {
      const matches = await place.autocomplete(value)
      if (ValidateAxiosResponse(matches)) {
        const remappedData = matches.data.map(item => ({ key: item.id, value: item.id, title: item.name }))
        setLocationSuggestions(remappedData)
      }
    } catch (err) {
      Logger(err)
    }
  }

  const onCropConfirmed = (image) => {
    if (image && image.url) {
      props.setFieldValue('eventImage', image.url)
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
      // Adding CUSTOM item to the dropdown array. We will fill the other items later
      let locationsList = [{ locationId: 0, placeId: '0', name: '[CUSTOM LOCATION]' }]
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
          // Show only those that have a placeId
          locationsList = [...myAddressesList.data.filter(location => location.placeId), ...locationsList]
          const dropdownOptions = buildSelectOptions(locationsList, selectItem)
          setMyAddresses(dropdownOptions)
        }
      } catch (e) {
        Logger(e)
      }
    }

    fetchEventAttributes()
    fetchMyAccount()
    setIsLoading(false)
  }, [context, setAddressessList])

  const {
    values,
    title,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    configuration,
    submitButton,
    showAdvancedVisibilityPanel
  } = props

  const uploadButtonReference = React.createRef()

  const selectImage = () => {
    if (values.eventImage) {
      props.setFieldValue('eventImage', '')
    } else {
      uploadButtonReference.current.click()
    }
  }

  return (
    <>
      <h2>{title}</h2>
      <Form autoComplete='off' onSubmit={handleSubmit}>
        {submitButton && submitButton.show
          && <Button type='submit'>Save</Button>
        }
        <h2>Key Information</h2>
        <Grid>
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
                {errors.shortParagraphText && touched.shortParagraphText
                  && <p className='help is-danger'>{errors.shortParagraphText}</p>}
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                {!isLoading && (
                  <RichTextEditor
                    name='longParagraphText'
                    data={values.longParagraphText}
                    customHandler={(e) => {
                      props.setFieldValue('longParagraphText', e.editor.getData())
                    }}
                  />
                )}
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Image*</label>
                <div
                  onClick={selectImage}
                  onKeyDown={selectImage}
                  role='button'
                  tabIndex={0}
                  style={{
                    position: 'relative',
                    width: '316px',
                    border: '1px dashed lightgrey',
                    cursor: 'pointer'
                  }}
                >
                  {values.eventImage
                    ? (
                      <>
                        <div style={{
                          position: 'absolute',
                          color: 'white',
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0, 0, 0, .4)',
                          textAlign: 'center',
                          paddingTop: '90px'
                        }}
                        >Delete image
                        </div>
                        <img
                          src={values.eventImage}
                          alt='Uploaded pic'
                          style={{
                            width: '100%'
                          }}
                        />
                      </>
                    ) : (
                      <div
                        style={{
                          width: '316px',
                          minHeight: '168px',
                          textAlign: 'center',
                          paddingTop: '70px',
                          color: 'grey'
                        }}
                      >Upload image
                      </div>
                    )}
                </div>
                <Uploader
                  accept='.jpg,.jpeg,.jpe,.png'
                  maxSize={10485760}
                  minWidth={400}
                  minHeight={400}
                  name='eventImage'
                  id='eventImage'
                >
                  {(ref, file) => (
                    <>
                      <div
                        ref={uploadButtonReference}
                        onClick={() => { ref.open() }}
                        onKeyDown={() => { ref.open() }}
                        role='button'
                        tabIndex={0}
                      />

                      {(file && file.length && ref) !== null && (
                        <ImageCropperModal
                          open
                          fileUrl={file[0].preview}
                          file={file[0]}
                          uploadPreset='mfp-fe-gallery-event-image'
                          cloudinary={configuration.cloudinary}
                          onCropConfirmed={onCropConfirmed}
                          cropProperties={{
                            x: 20,
                            y: 20,
                            width: 160,
                            height: 100,
                            aspect: 1.6
                          }}
                        />
                      )}
                    </>
                  )}
                </Uploader>
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
                value={myAddresses.find(address => address.value === values.placeId) ? values.placeId : '0'}
                onChange={(e, { value }) => {
                  updateVenueFromId(value)
                  // console.log('value', value)
                  // updateCityFromId(value)
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
                  onKeyDown={e => e.preventDefault()}
                  name='date'
                  placeholder='Date'
                  value={values.date}
                  iconPosition='left'
                  dateFormat='DD/MM/YYYY'
                  onChange={(e, { value }) => {
                    props.setFieldValue('date', value)
                  }}
                  closable
                  error={errors.date && touched.date}
                />
                {errors.date && touched.date && <p className='help is-danger'>{errors.date}</p>}
                *Event date and time is in the Event Location/Venue’s time zone
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Start time*</label>
                <TimeInput
                  onKeyDown={e => e.preventDefault()}
                  name='startTime'
                  placeholder='Start time'
                  value={values.startTime}
                  iconPosition='left'
                  onChange={(e, { value }) => {
                    props.setFieldValue('startTime', value)
                  }}
                  closable
                  error={errors.startTime && touched.startTime}
                />
                {errors.startTime && touched.startTime && <p className='help is-danger'>{errors.startTime}</p>}
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>End time*</label>
                <TimeInput
                  onKeyDown={e => e.preventDefault()}
                  name='endTime'
                  placeholder='End time'
                  value={values.endTime}
                  iconPosition='left'
                  onChange={(e, { value }) => {
                    props.setFieldValue('endTime', value)
                  }}
                  closable
                  error={errors.endTime && touched.endTime}
                />
                {errors.endTime && touched.endTime && <p className='help is-danger'>{errors.endTime}</p>}
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {!showAdvancedVisibilityPanel
          && (
            <>
              <h2>Publishing</h2>
              <Grid>
                <Grid.Row columns={8}>
                  <Grid.Column>
                    <Form.Field>
                      <label>Event is visible for</label>
                      <Radio
                        id='publishPublic'
                        name='publish'
                        label='Public'
                        onChange={handleChange}
                        value='public'
                        checked={values.publish === 'public'}
                      />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <label>&nbsp;</label>
                      <Radio
                        id='publishVips'
                        name='publish'
                        label='VIPs only'
                        onChange={handleChange}
                        value='vip'
                        checked={values.publish === 'vip'}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                {errors.publish && touched.publish && <p className='help is-danger'>{errors.publish}</p>}
              </Grid>
            </>
          )}

        {showAdvancedVisibilityPanel
        && (
        <>
          <h2>Visibility</h2>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Field>
                  <UserGroupSelector
                    name='whiteListAccessGroups'
                    context={context}
                    selected={values.whiteListAccessGroups}
                    setFieldValue={setFieldValue}
                    label='Visible for... (Whitelisting)'
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <UserGroupSelector
                    name='blackListAccessGroups'
                    context={context}
                    selected={values.blackListAccessGroups}
                    setFieldValue={setFieldValue}
                    label='Hidden for... (Blacklisting)'
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
        )}
        <Grid>
          <Grid.Row columns={8}>
            <Grid.Column>
              <Form.Field>
                <label>Status</label>
                <Radio
                  id='statusDraft'
                  name='status'
                  label='Draft'
                  onChange={handleChange}
                  value='DRAFT'
                  checked={values.status === 'DRAFT'}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>&nbsp;</label>
                <Radio
                  id='statusLive'
                  name='status'
                  label='Live'
                  onChange={handleChange}
                  value='LIVE'
                  checked={values.status === 'LIVE'}
                />
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
  configuration: PropTypes.object,
  setAddressessList: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  setFieldValue: PropTypes.func,
  submitButton: PropTypes.object,
  title: PropTypes.string,
  showAdvancedVisibilityPanel: PropTypes.bool
}

const EventFormContainer = (props) => {
  const [currentEvent, setCurrentEvent] = useState(null)
  // TODO: review this part
  const [, setAddressessList] = useState([])
  const { context, id } = props

  useEffect(() => {
    const event = new Event(context)
    // Fetching the Event
    const fetchEvent = async () => {
      try {
        const getEvent = await event.get(id)
        if (ValidateAxiosResponse(getEvent)) {
          setCurrentEvent(getEvent.data)
        }
      } catch (e) {
        Logger(e)
      }
    }
    // If there is an ID, fetch the event. Otherwise, it's add mode
    if (id) {
      fetchEvent()
    }
  }, [context, id])

  const newProps = {
    ...props,
    ...{
      currentEvent,
      setAddressessList
    }
  }
  return (<FormRules {...newProps} />)
}

// How to show the publishing panel when loading the page in MFP Edit mode? (rules in MCHGB-2940)
const publishingStatus = (accessPermission, whiteListAccessGroups, blackListAccessGroups) => {
  // If the event is not VIP and has no whitelist / blacklist, this radio button shows the "Public" option selected.
  if (accessPermission === AccesssPermission.PUBLIC
    && whiteListAccessGroups.length === 0
    && blackListAccessGroups.length === 0) {
    return 'public'
  }
  // If the event is VIP and has only the whitelist WAG 2000162, the VIP option is selected.
  if (accessPermission === AccesssPermission.VIP
    && whiteListAccessGroups.length === 1
    && whiteListAccessGroups[0] === '2000162') {
    return 'vip'
  }

  if (!accessPermission) {
    return ''
  }
  return 'custom'
}

// Checks if a date is later than other
function isLaterTime(ref) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: 'End time must be bigger than start time',
    params: {
      reference: ref.path
    },
    test(value) {
      return value > this.resolve(ref)
    }
  })
}

Yup.addMethod(Yup.string, 'isLaterTime', isLaterTime)

const FormRules = withFormik({
  mapPropsToValues: props => ({
    // General information
    title: (props.currentEvent && props.currentEvent.title) || '',
    eventTypes: (props.currentEvent && props.currentEvent.eventTypes.map(item => item.id)) || [],
    eventImage: (props.currentEvent && props.currentEvent.eventImage) || '',
    placeId: props.currentEvent && props.currentEvent.venue.placeId,
    longParagraphText: (props.currentEvent && props.currentEvent.longParagraphText) || '',
    shortParagraphText: (props.currentEvent && props.currentEvent.shortParagraphText) || '',
    imageCaption: (props.currentEvent && props.currentEvent.imageCaption) || '',

    // Venue
    venue: (props.currentEvent && props.currentEvent.venue) || '',

    // OpeningDateTimes
    date: (props.currentEvent && props.currentEvent.openingDateTimes
      && props.currentEvent.openingDateTimes.length > 0
      && moment(props.currentEvent.openingDateTimes[0].date, 'YYYY-MM-DD').format('DD/MM/YYYY')) || '',

    startTime: (props.currentEvent && props.currentEvent.openingDateTimes
      && props.currentEvent.openingDateTimes.length > 0 && props.currentEvent.openingDateTimes[0].startTime) || '',

    endTime: (props.currentEvent && props.currentEvent.openingDateTimes
      && props.currentEvent.openingDateTimes.length > 0 && props.currentEvent.openingDateTimes[0].endTime) || '',

    // publish
    // It's so complex to determine it's default status, that we better put in a separate function
    publish: (props.currentEvent
      && publishingStatus(props.currentEvent.accessPermission,
        props.currentEvent.whiteListAccessGroups, props.currentEvent.blackListAccessGroups)),
    whiteListAccessGroups: (props.currentEvent && props.currentEvent.whiteListAccessGroups) || [],
    blackListAccessGroups: (props.currentEvent && props.currentEvent.blackListAccessGroups) || [],

    // status
    // By default is DRAFT
    status: (props.currentEvent && props.currentEvent.status) || 'DRAFT'
  }),

  enableReinitialize: true,

  validationSchema: props => Yup.object().shape({
    eventTypes: Yup.array().min(1),
    title: Yup.string().required(),
    date: Yup.string().required(),
    startTime: Yup.string().required(),
    endTime: Yup.string().required()
      .isLaterTime(Yup.ref('startTime')),
    eventImage: Yup.string().required(),
    publish: props.showAdvancedVisibilityPanel && Yup.string().required('This field is required'),
    venue: Yup.string().required()
  }),

  handleSubmit: async (values, { props }) => {
    const objectToSave = { ...values }
    const startDate = `${moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD')} ${values.startTime}`
    // Adapting the object to be sent to Save API
    objectToSave.venue = values.venue
    // Careful with the typo in timezone. API unconsistency
    objectToSave.venue.timezoneId = values.venue.timeZoneId || values.venue.timezoneId
    // TODO: TBD, hardcoding to 11 temporarily
    // objectToSave.cityId = props.currentEvent.cityId
    objectToSave.cityId = props.currentEvent ? props.currentEvent.cityId : values.cityId
    objectToSave.startDate = props.currentEvent ? props.currentEvent.startDate : startDate
    objectToSave.openingDateTimes = [
      {
        // YYYY-MM-DD is the format the API needs
        date: moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        startTime: values.startTime,
        endTime: values.endTime
      }
    ]
    const publishValue = values.publish
    // If MFP (No ID)
    if (!props.showAdvancedVisibilityPanel) {
      // Some logic for Saving the publish status (rules in MCHGB-2940)
      if (publishValue === 'public') {
        objectToSave.accessPermission = AccesssPermission.PUBLIC
        // Clearing the access group array
        objectToSave.whiteListAccessGroups = []
        objectToSave.blackListAccessGroups = []
      } else if (publishValue === 'vip') {
        objectToSave.accessPermission = AccesssPermission.VIP
        objectToSave.whiteListAccessGroups = []
        objectToSave.blackListAccessGroups = []
        objectToSave.whiteListAccessGroups.push(props.configuration.eventsandexhibitions.wag.whitelist.vip)
      } else if (publishValue === 'custom') {
        objectToSave.accessPermission = AccesssPermission.PUBLIC
        objectToSave.whiteListAccessGroups = []
        objectToSave.blackListAccessGroups = []
        objectToSave.whiteListAccessGroups.push(props.configuration.eventsandexhibitions.wag.whitelist.custom)
      }
    // If CMS
    } else if (publishValue === 'custom') {
      objectToSave.accessPermission = AccesssPermission.PUBLIC
      objectToSave.whiteListAccessGroups = values.whiteListAccessGroups
      objectToSave.blackListAccessGroups = values.blackListAccessGroups
    }


    try {
      const event = new Event(props.context)
      let savedEvent = null
      if (props.id) {
        // Edit
        savedEvent = await event.put(props.id, objectToSave)
      } else {
        // Add
        savedEvent = await event.post(objectToSave)
        // To be sent by API
        window.location.href = `?id=${savedEvent.data.id}`
      }

      if (ValidateAxiosResponse(savedEvent)) {
        // resetForm(objectToSave)
        // props.setIsFormSubmitted(true)
        // props.setFormSubmitting(false)
      }
    } catch (e) {
      Logger(e)
    }
  },
  displayName: 'EventForm'
})(EventForm)

EventFormContainer.propTypes = {
  context: PropTypes.object,
  id: PropTypes.number,
  setAddressessList: PropTypes.func
}

export default EventFormContainer

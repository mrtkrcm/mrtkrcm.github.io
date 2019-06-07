/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

// SOME NOTES:
// For submit button outside of form
// https://stackoverflow.com/questions/49525057/react-formik-use-submitform-outside-formik
// For debouncing with hooks
// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

// This file is so large. EventForm component should ideally be in a different file, but with the current bundling
// I couldn't find the way to break down in smaller. Needs more investigation, but should be possible with some effort.
// Dayjs and datejs didn't work for the basic purpose below
// There are some in-line styles, should be moved to a Component or styled component

// Structure:
// EventFormContainer -> FormRules -> EventForm. (Could not break down in different files)

import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import { Input, Form, Grid, Button, Radio, Search, Icon, Message } from 'semantic-ui-react'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'
import styled from 'styled-components'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import Logger from 'dmi-mch-utils-logger'
import { buildSelectOptions } from 'dmi-mch-utils-dropdown'
import Account from 'dmi-mch-services-account'
import Place from 'dmi-mch-services-place'
import Uploader from 'dmi-mch-utils-imageuploader'
import ImageCropperModal from 'dmi-mch-utils-imagecropper'
import AccesssPermission from 'dmi-mch-constants-accesspermission'
import City from 'dmi-mch-services-city'
import Event from 'dmi-mch-services-event'
import RichTextEditor from 'dmi-mch-richtextbox'
import InputFeedback from 'dmi-mch-inputfeedback'
import Label from 'dmi-mch-services-label'
import getTranslationByName from 'dmi-mch-utils-gettranslation'
import Text from 'dmi-mch-text'
import UserGroupSelector from 'dmi-mch-usergroupselector'
import PanelForm from 'dmi-mch-panel'

// TODO: Put in a separate component
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )

  return debouncedValue
}

// Vars to improve naming: myAccount, currentEvent

const EventForm = (props) => {
  // Props passed from parent
  const {
    context,
    currentEvent,
    myAccount,
    archiveCallback,
    debug = false,
    setFieldValue,
    id,
    userAccount,
    event,
    setMessage
  } = props

  const [isLoading, setIsLoading] = useState(true)
  const [labels, setLabels] = useState(null)
  const [eventAttributesDropdown, setEventAttributesDropdown] = useState(null)
  const [myAddresses, setMyAddresses] = useState(null)
  const [customLocationValue, setCustomLocationValue] = useState('')
  const [locationSuggestions, setLocationSuggestions] = useState([])
  const [cropConfirmed, setCropConfirmed] = useState(null)
  const labelsEntityId = 'EventsAndExhibitionsForm'
  const debouncedSearchTerm = useDebounce(customLocationValue, 700)
  const place = new Place(context)

  // BASIC STUFF NEEDED, IN THIS FIRST BLOCK OF THE CODE. Dropdowns etc.

  // Event Attributes (Dropdown)
  useEffect(() => {
    if (!eventAttributesDropdown) {
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
      fetchEventAttributes()
    }
  }, [event, eventAttributesDropdown])

  // Fetching CMS Labels
  useEffect(() => {
    if (!labels) {
      const label = new Label(context)
      const fetchLabels = async () => {
        try {
          const labelsList = await label.getByEntityId(labelsEntityId)
          if (ValidateAxiosResponse(labelsList)) {
            setLabels(labelsList.data)
          }
        } catch (e) {
          Logger(e)
        }
      }
      fetchLabels()
    }
  }, [context, labelsEntityId, labels])

  // Retrieve locations. Use one API or another for retrieving the locations, if have ID or not.
  useEffect(() => {
    if (myAccount && !myAddresses) {
      const selectItem = {
        key: 'locationId',
        value: 'placeId',
        text: 'name',
        name: 'myAddress'
      }
      let myAddressesList = null
      // Adding CUSTOM item to the dropdown array. We will fill the other items later
      let locationsList = [{ locationId: 0, placeId: '0', name: '[CUSTOM LOCATION]' }]

      const getMyAddressesList = async () => {
        if (id) {
          myAddressesList = await userAccount.getOwnerAddresses(currentEvent.ownerAccountId)
        } else {
          myAddressesList = await userAccount.getMineAddresses(myAccount)
        }
        // Show only those that have a placeId
        locationsList = [...myAddressesList.data.filter(location => location.placeId), ...locationsList]
        const dropdownOptions = buildSelectOptions(locationsList, selectItem)
        setMyAddresses(dropdownOptions)
      }
      getMyAddressesList()
    }
  }, [myAccount, id, myAddresses, currentEvent, userAccount])


  // Usually called when the address input field is changed (it has a debounce)
  const searchChangeAddress = async (value) => {
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

  // Debouncing the custom location input
  useEffect(() => {
    if (debouncedSearchTerm) {
      searchChangeAddress(debouncedSearchTerm)
    }
  },
  [debouncedSearchTerm]) // eslint-disable-line react-hooks/exhaustive-deps

  // Archives the event and shows a message on success, and calls callback. Callback can do whatever is passed to it
  // By the way, this has changed so many times.... Archive is actually deleting. Should rename this.
  const archiveEvent = useCallback(async () => {
    try {
      // const archivedEvent = await event.del(id)
      // if (archivedEvent.ok) {
      setTimeout(() => {
        setMessage({
          show: true,
          color: 'green',
          header: 'Event archived successfully'
        })
      }, 3000)
      archiveCallback()
      // }
    } catch (e) {
      Logger(e)
    }
  }, [archiveCallback, setMessage])

  // Finds the closest cityId. This doesn't represent in the screen, but it saves in background
  const updateCityId = async (latitude, longitude) => {
    const city = new City(context)
    const closestCity = await city.closest({ latitude, longitude })
    if (ValidateAxiosResponse(closestCity)) {
      setFieldValue('cityId', closestCity.data.id)
    } else {
      setFieldValue('cityId', null)
    }
  }

  // This function updates the information in the location area (city, country, etc), parting from a placeId
  const updateVenueFromId = async (placeId) => {
    setFieldValue('placeId', placeId)
    if (placeId === '0') {
      // If CUSTOM LOCATION is selected , we enable the search location field
      setFieldValue('venue', null)
    } else {
      // If a Location in the list is selected, we show all the info related in the location area (city, country, etc)
      const selectedPlace = await place.get(placeId)
      if (ValidateAxiosResponse(selectedPlace)) {
        setFieldValue('venue', selectedPlace.data)
        updateCityId(selectedPlace.data.latitude, selectedPlace.data.longitude)
      }
    }
  }

  // Fired when a result in the autocomplete of places is clicked
  const handleResultSelect = useCallback((e, { result }) => {
    setCustomLocationValue(result.title) // Updates the value in the autocomplete
    updateVenueFromId(result.value) // Updates all the info in the area (city, country, etc)
  }, [updateVenueFromId])

  const onCropConfirmed = (image) => {
    if (image && image.url) {
      setCropConfirmed(true)
      setFieldValue('eventImage', image.url)
    }
  }

  useEffect(() => {
    setIsLoading(false)
  }, [setIsLoading])

  const {
    values,
    title,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    configuration,
    showControls,
    showAdvancedVisibilityPanel,
    showAttributesPanel,
    showPublishingArchiveRadio,
    showAccessPanel,
    className,
    language = '',
    showMessage,
    dirty,
    bodycolor = 'white',
    headerseparatorcolor = '#dbdbdb',
    // Functions visible from the outside world
    bindSubmitForm = () => {},
    bindArchiveForm = () => {},
    isDirty = () => {}
  } = props

  bindSubmitForm(handleSubmit)
  bindArchiveForm(archiveEvent)
  isDirty(dirty)

  const selectImage = (ref) => {
    if (values.eventImage) {
      setFieldValue('eventImage')
    } else {
      setCropConfirmed(false)
      ref.open()
    }
  }

  // This function just shortens the call to getTranslationByName
  const translate = (entity) => {
    const label = (labels.length > 0
      ? getTranslationByName(labels, language, labelsEntityId, entity)
      : null)

    if (label === null && labels.length > 0) {
      return `##${entity}##`
    }

    return label
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log('re-render')
  }
  if (labels && eventAttributesDropdown && myAccount) {
    return (
      <section className={className}>
        {showMessage.show
          // TODO: Can be converted to a Module
          && (
          <Message
            header={showMessage.header}
            color={showMessage.color}
            style={{
              position: 'fixed',
              top: '8px',
              textAlign: 'center',
              width: '400px',
              left: '50%',
              marginLeft: '-200px',
              zIndex: '10'
            }}
          />
          )
        }
        {title && <h3>{title}</h3>}
        <Form autoComplete='off' onSubmit={handleSubmit}>
          {showControls
            && (
            <>
              <Button type='submit' disabled={!dirty}>Save</Button>
              <Button type='button' onClick={archiveEvent}>archive</Button>
            </>
            )
          }
          <PanelForm bodycolor={bodycolor} headerseparatorcolor={headerseparatorcolor}>
            <PanelForm.Header><h4>{translate('KeyInformationTitle')}</h4></PanelForm.Header>
            <PanelForm.Block>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Form.Field>
                      <Form.Select
                        name='eventTypes'
                        fluid
                        label={`${translate('TypeFieldTitle') || ''}*`}
                        options={eventAttributesDropdown || []}
                        onChange={(e, { value }) => {
                          setFieldValue('eventTypes', value)
                        }}
                        error={(errors.eventTypes && true) && touched.eventTypes && true}
                        multiple
                        value={values.eventTypes}
                      />
                      {errors.eventTypes && touched.eventTypes && <InputFeedback>{errors.eventTypes}</InputFeedback>}
                    </Form.Field>
                    <Form.Field error={errors.title && touched.title}>
                      <label htmlFor='title'>{translate('TitleFieldTitle')}*</label>
                      <Input
                        type='text'
                        name='title'
                        id='title'
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.title && touched.title}
                      />
                      {errors.title && touched.title && <InputFeedback>{errors.title}</InputFeedback> }
                    </Form.Field>
                    <Form.Field>
                      <label>{translate('SubTitleFieldTitle')}</label>
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
                        && <InputFeedback>{errors.shortParagraphText}</InputFeedback>}
                    </Form.Field>
                    <Form.Field>
                      <label>{translate('DescriptionFieldTitle')}</label>
                      {!isLoading && (
                        <RichTextEditor
                          name='longParagraphText'
                          data={values.longParagraphText}
                          customHandler={(e) => {
                            setFieldValue('longParagraphText', e.editor.getData())
                          }}
                        />
                      )}
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <label>{translate('ImageFieldTitle')}*</label>
                      <Uploader
                        accept='.jpg,.jpeg,.jpe,.png'
                        maxSize={10485760}
                        minWidth={400}
                        minHeight={400}
                        name='eventImage'
                        id='eventImage'
                        updateProp={values.eventImage}
                      >
                        {(ref, file) => (
                          <>
                            <div
                              onClick={() => selectImage(ref)}
                              onKeyDown={() => selectImage(ref)}
                              role='button'
                              tabIndex={0}
                              style={{
                                position: 'relative',
                                width: '476px',
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
                                      paddingTop: '130px'
                                    }}
                                    >
                                      <Icon name='trash' size='large' />
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
                                      minHeight: '298px',
                                      textAlign: 'center',
                                      paddingTop: '130px',
                                      color: 'grey',
                                      fontSize: '30px',
                                      cursor: 'pointer'
                                    }}
                                  >+<br />
                                    <Text isHtml isSmall textColor='#bdbdbd' lineHeight='17px'>
                                      {translate('ImageDimensionsPlaceholder')}
                                    </Text>
                                  </div>
                                )}
                            </div>

                            {(file && file.length && ref) !== null && (
                              <ImageCropperModal
                                open={!cropConfirmed}
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
                    {errors.eventImage && touched.eventImage && <InputFeedback>{errors.eventImage}</InputFeedback>}
                    <Form.Field>
                      <label>{translate('ImageCaptionFieldTitle')}</label>
                      <Input
                        type='text'
                        name='imageCaption'
                        id='imageCaption'
                        value={values.imageCaption}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.imageCaption && touched.imageCaption}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </PanelForm.Block>
          </PanelForm>

          <PanelForm bodycolor={bodycolor} headerseparatorcolor={headerseparatorcolor}>
            <PanelForm.Header><h4>{translate('VenueInformationTitle')}</h4></PanelForm.Header>
            <PanelForm.Block>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Form.Select
                      fluid
                      label={`${translate('LocationFieldTitle') || ''}*`}
                      name='placeId'
                      options={myAddresses || []}
                  // this code purpose is to put a value in the locations dropdown (this dropdown is a bit "funny",
                  // doesn't correspond to any field in the event object or DB, so just helps in UX)
                  // If the placeId of the event matches one item in the list of gallery addresses, it will show it as
                  // selected in the dropdown
                  // If can't find anything, but there is a venue, it will show "CUSTOM LOCATION" option
                  // If can't find anything, and there is no venue, it will show empty.
                      value={(myAddresses
                        && myAddresses.find(address => address.value === values.placeId) && values.placeId)
                    || (values.venue ? '0' : null)}
                      onChange={(e, { value }) => {
                        updateVenueFromId(value)
                      }}
                    />
                    <Form.Field>
                      <label>{translate('SearchTitle')}</label>
                      <Search
                        disabled={myAddresses && !!myAddresses
                          .find(address => (!values.placeId || (values.placeId !== '0'
                          && address.value === values.placeId)))}
                        onResultSelect={handleResultSelect}
                        onSearchChange={e => setCustomLocationValue(e.target.value)}
                        results={locationSuggestions}
                        value={customLocationValue}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                {values.venue
                  && (
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Form.Field>
                          <label>{translate('VenueNameTitle')}</label>
                          <div>{values.venue ? values.venue.name : '-'}</div>
                        </Form.Field>
                        <Form.Field>
                          <label>{translate('AdressLineTitle')}</label>
                          <div>{values.venue ? values.venue.street : '-'}</div>
                        </Form.Field>
                        <Form.Field>
                          <label>{translate('CityTitle')}</label>
                          <div>{values.venue ? values.venue.city : '-'}</div>
                        </Form.Field>
                        <Form.Field>
                          <label>{translate('CountryTitle')}</label>
                          <div>{values.venue ? values.venue.country : '-'}</div>
                        </Form.Field>
                      </Grid.Column>
                      <Grid.Column>
                        <Form.Field>
                          <label>{translate('ZIPCodeTitle')}</label>
                          <div>{values.venue ? values.venue.postCode : '-'}</div>
                        </Form.Field>
                        <Form.Field>
                          <label>{translate('StateTitle')}</label>
                          <div>-</div>
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>
                  )
                }
                {errors.venue && touched.venue && <InputFeedback>{errors.venue}</InputFeedback>}
              </Grid>

            </PanelForm.Block>
          </PanelForm>
          {showAdvancedVisibilityPanel
            && (
            <PanelForm bodycolor={bodycolor} headerseparatorcolor={headerseparatorcolor}>
              <PanelForm.Header><h4>Visibility</h4></PanelForm.Header>
              <PanelForm.Block>
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Form.Field>
                        <UserGroupSelector
                          disabled
                          name='whiteListAccessGroups'
                          context={context}
                          selected={values.whiteListAccessGroups}
                          setFieldValue={setFieldValue}
                          label={`${translate('WhiteListTitle') || ''}*`}
                        />
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                      <Form.Field>
                        <UserGroupSelector
                          disabled
                          name='blackListAccessGroups'
                          context={context}
                          selected={values.blackListAccessGroups}
                          setFieldValue={setFieldValue}
                          label={`${translate('BlackListTitle') || ''}*`}
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </PanelForm.Block>
            </PanelForm>
            )
          }

          <PanelForm bodycolor={bodycolor} headerseparatorcolor={headerseparatorcolor}>
            <PanelForm.Header><h4>{translate('DateTimeTitle')}</h4></PanelForm.Header>
            <PanelForm.Block>
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Form.Field>
                      <label>{translate('EventDateTimeTitle')}</label>
                      <DateInput
                        onKeyDown={e => e.preventDefault()}
                        name='date'
                        placeholder={translate('EventDateTimeTitle')}
                        value={values.date}
                        iconPosition='left'
                        dateFormat='DD/MM/YYYY'
                        onChange={(e, { value }) => {
                          setFieldValue('date', value)
                        }}
                        closable
                        error={errors.date && touched.date}
                      />
                      {errors.date && touched.date && <InputFeedback>{errors.date}</InputFeedback>}
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <label>{translate('EventStartTimeTitle')}*</label>
                      <TimeInput
                        onKeyDown={e => e.preventDefault()}
                        name='startTime'
                        placeholder={translate('EventStartTimeTitle')}
                        value={values.startTime}
                        iconPosition='left'
                        onChange={(e, { value }) => {
                          setFieldValue('startTime', value)
                        }}
                        closable
                        error={errors.startTime && touched.startTime}
                      />
                      {errors.startTime && touched.startTime && <InputFeedback>{errors.startTime}</InputFeedback>}
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <label>{translate('EventEndTitle')}*</label>
                      <TimeInput
                        onKeyDown={e => e.preventDefault()}
                        name='endTime'
                        placeholder={translate('EventEndTitle')}
                        value={values.endTime}
                        iconPosition='left'
                        onChange={(e, { value }) => {
                          setFieldValue('endTime', value)
                        }}
                        closable
                        error={errors.endTime && touched.endTime}
                      />
                      {errors.endTime && touched.endTime && <InputFeedback>{errors.endTime}</InputFeedback>}
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Text isSmall textColor='silver'>{translate('DateWarningLabelTitle')}</Text>
              </Grid>
            </PanelForm.Block>
          </PanelForm>
          {showAttributesPanel
            && (
            <PanelForm bodycolor={bodycolor} headerseparatorcolor={headerseparatorcolor}>
              <PanelForm.Header><h4>Attributes</h4></PanelForm.Header>
              <PanelForm.Block>
                <Grid className='radiobuttons'>
                  <Grid.Row className='radiobuttons__title'>
                    <Grid.Column>
                      <Form.Field>
                        <label>{translate('VisibilityFieldTitle')}</label>
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className='radiobuttons__group'>
                    <Form.Group inline>
                      <Form.Field>
                        <Radio
                          disabled
                          style={{ width: 'auto' }}
                          id='publishPublic'
                          name='publish'
                          label={translate('VisibilityFieldValuePublic')}
                          onChange={handleChange}
                          value='public'
                          checked={values.publish === 'public'}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Radio
                          disabled
                          id='publishVips'
                          name='publish'
                          label={translate('VisibilityFieldValueVIP')}
                          onChange={handleChange}
                          value='vip'
                          checked={values.publish === 'vip'}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Radio
                          disabled
                          id='publishPrivate'
                          name='publish'
                          label='Private'
                          onChange={handleChange}
                          value='private'
                          checked={values.publish === 'private'}
                        />
                      </Form.Field>
                    </Form.Group>
                  </Grid.Row>
                  {errors.publish && touched.publish && <InputFeedback>This field is required</InputFeedback>}
                </Grid>
              </PanelForm.Block>
            </PanelForm>
            )}

          {showAccessPanel
            && (
            <PanelForm bodycolor={bodycolor} headerseparatorcolor={headerseparatorcolor}>
              <PanelForm.Header><h4>Access</h4></PanelForm.Header>
              <PanelForm.Block>
                <Grid className='radiobuttons'>
                  <Grid.Row className='radiobuttons__title'>
                    <Grid.Column>
                      <Form.Field>
                        <label>{translate('VisibilityFieldTitle')}</label>
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className='radiobuttons__group'>
                    <Form.Group inline>
                      <Form.Field>
                        <Radio
                          style={{ width: 'auto' }}
                          id='publishPublic'
                          name='publish'
                          label={translate('VisibilityFieldValuePublic')}
                          onChange={handleChange}
                          value='public'
                          checked={values.publish === 'public'}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Radio
                          id='publishVips'
                          name='publish'
                          label={translate('VisibilityFieldValueVIP')}
                          onChange={handleChange}
                          value='vip'
                          checked={values.publish === 'vip'}
                        />
                      </Form.Field>
                    </Form.Group>
                  </Grid.Row>
                  {errors.publish && touched.publish && <InputFeedback>This field is required</InputFeedback>}
                </Grid>
              </PanelForm.Block>
            </PanelForm>
            )}

          <PanelForm bodycolor={bodycolor} headerseparatorcolor={headerseparatorcolor}>
            <PanelForm.Header><h4>{translate('PublishingTitle')}</h4></PanelForm.Header>
            <PanelForm.Block>
              <Grid className='radiobuttons'>
                <Grid.Row className='radiobuttons__group'>
                  <Form.Group inline>
                    <Form.Field>
                      <Radio
                        id='statusDraft'
                        name='status'
                        label={translate('VisibilityFieldValueDraft')}
                        onChange={handleChange}
                        value='DRAFT'
                        checked={values.status === 'DRAFT'}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        id='statusLive'
                        name='status'
                        label={translate('VisibilityFieldValueLive')}
                        onChange={handleChange}
                        value='LIVE'
                        checked={values.status === 'LIVE'}
                      />
                    </Form.Field>
                    {showPublishingArchiveRadio
                      && (
                        <Form.Field>
                          <Radio
                            id='statusLive'
                            name='status'
                            label='Archive'
                            onChange={handleChange}
                            value='ARCHIVE'
                            checked={values.status === 'ARCHIVE'}
                          />
                        </Form.Field>
                      )
                    }
                  </Form.Group>
                </Grid.Row>
                <Text isSmall textColor='silver'>{translate('ReviewWarningLabelTitle')}</Text>
              </Grid>
            </PanelForm.Block>
          </PanelForm>
        </Form>
      </section>
    )
  }
  return null
}

EventForm.propTypes = {
  context: PropTypes.object,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  id: PropTypes.number,
  configuration: PropTypes.object,
  className: PropTypes.string,
  currentEvent: PropTypes.object,
  archiveCallback: PropTypes.func,
  debug: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  bindSubmitForm: PropTypes.func,
  bindArchiveForm: PropTypes.func,
  setFieldValue: PropTypes.func,
  showMessage: PropTypes.object,
  setMessage: PropTypes.func,
  showControls: PropTypes.bool,
  title: PropTypes.string,
  showAdvancedVisibilityPanel: PropTypes.bool,
  showAttributesPanel: PropTypes.bool,
  showPublishingArchiveRadio: PropTypes.bool,
  showAccessPanel: PropTypes.bool,
  language: PropTypes.string,
  dirty: PropTypes.bool,
  isDirty: PropTypes.func,
  bodycolor: PropTypes.string,
  headerseparatorcolor: PropTypes.string,
  userAccount: PropTypes.object,
  event: PropTypes.object,
  myAccount: PropTypes.string
}

const EventFormContainer = (props) => {
  const [currentEvent, setCurrentEvent] = useState(null)
  const [showMessage, setMessage] = useState({})
  const [myAccount, setMyAccount] = useState(null)

  const { context, id } = props
  const userAccount = new Account(context)
  const event = new Event(context)


  // Getting the ownerAccount from the Event itself. Only for Edit mode. In Add mode, the Event has
  // no ID yet (obviously) so in Add mode we will take it from the logged in account
  useEffect(() => {
    if (!myAccount) {
      if (id) {
        if (currentEvent) {
          setMyAccount(currentEvent.ownerAccountId)
        }
      } else {
        const fetchMyAccount = async () => {
          try {
            const myAcc = await userAccount.getMine()
            if (ValidateAxiosResponse(myAcc)) {
              setMyAccount(myAcc.data[0].id)
            }
          } catch (e) {
            Logger(e)
          }
        }
        fetchMyAccount()
      }
    }
  },
  [currentEvent, id, userAccount, myAccount])

  useEffect(() => {
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
    // If there is an ID in parent props and event does not exist yet, fetch the event. Otherwise, it's add mode
    if (id && !currentEvent) {
      fetchEvent()
    }
  }, [currentEvent, event, id])

  const newProps = {
    ...props,
    ...{
      userAccount,
      event,
      currentEvent,
      myAccount,
      showMessage,
      setMessage
    }
  }
  return (<FormRules {...newProps} />)
}

// How to show the publishing panel when loading the page in MFP Edit mode? (rules in MCHGB-2940)
const publishingStatus = (accessPermission) => {
  let status = null
  // This has been simplified. Read ticket comments MCHGB-2940.
  if (accessPermission === AccesssPermission.PUBLIC) {
    status = 'public'
  }
  // If the event is VIP the VIP option is selected.
  if (accessPermission === AccesssPermission.VIP) {
    status = 'vip'
  }

  if (accessPermission === AccesssPermission.PRIVATE_INVITATION) {
    status = 'private'
  }

  if (!accessPermission) {
    status = ''
  }

  return status
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

// Checks if vanue has necessary fields
function isVenueCorrect() {
  return this.test({
    name: 'isObject',
    exclusive: false,
    message: 'No venue selected',
    test(value) {
      return typeof value === 'object'
    }
  })
}

Yup.addMethod(Yup.object, 'isVenueCorrect', isVenueCorrect)

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
    // It's so complex to determine this default status, that we better put in a separate function
    publish: (props.currentEvent
      && publishingStatus(props.currentEvent.accessPermission)),
    whiteListAccessGroups: (props.currentEvent && props.currentEvent.whiteListAccessGroups) || [],
    blackListAccessGroups: (props.currentEvent && props.currentEvent.blackListAccessGroups) || [],

    // status
    // By default is DRAFT
    status: (props.currentEvent && props.currentEvent.status) || 'DRAFT'
  }),

  enableReinitialize: true,


  validationSchema: () => {
    const schema = {
      eventTypes: Yup.array().min(1),
      title: Yup.string().required(),
      date: Yup.string().required(),
      startTime: Yup.string().required(),
      endTime: Yup.string().required()
        .isLaterTime(Yup.ref('startTime')),
      eventImage: Yup.string().required(),
      venue: Yup.object().isVenueCorrect(),
      publish: Yup.string().required('This field is required')
    }
    return Yup.object().shape(schema)
  },

  handleSubmit: async (values, { resetForm, props }) => {
    const objectToSave = { ...values }
    const startDate = `${moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD')} ${values.startTime}`
    // Owner of the Event. Important line!
    objectToSave.ownerAccountId = (props.currentEvent && props.currentEvent.ownerAccountId) || props.myAccount
    // Adapting the object to be sent to Save API
    objectToSave.venue = values.venue
    // Careful with the typo in timezone. API unconsistency
    objectToSave.venue.timezoneId = values.venue.timeZoneId || values.venue.timezoneId
    objectToSave.cityId = values.cityId
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
    // For most complex logic to revert, check older commits. This has been simplified as per client requirement.
    if (publishValue === 'public') {
      objectToSave.accessPermission = AccesssPermission.PUBLIC
      objectToSave.whiteListAccessGroups = []
      objectToSave.blackListAccessGroups = []
    } else if (publishValue === 'vip') {
      objectToSave.accessPermission = AccesssPermission.VIP
      objectToSave.whiteListAccessGroups = []
      objectToSave.blackListAccessGroups = []
      props.configuration.eventsandexhibitions
        && objectToSave.whiteListAccessGroups.push(props.configuration.eventsandexhibitions.wag.whitelist.vip)
    }

    try {
      const saveMessage = {
        show: true,
        color: 'green',
        header: 'Event saved successfully'
      }
      const event = new Event(props.context)
      let savedEvent = null
      if (props.id) {
        // Edit
        savedEvent = await event.put(props.id, objectToSave)
        if (ValidateAxiosResponse(savedEvent)) {
          props.setMessage(saveMessage)
          setTimeout(() => {
            props.setMessage({})
            resetForm(values)
          }, 3000)
        }
      } else {
        // Add
        savedEvent = await event.post(objectToSave)
        if (ValidateAxiosResponse(savedEvent)) {
          props.setMessage(saveMessage)
          setTimeout(() => {
            props.setMessage({})
            // This is specific redirect URL for MFP
            window.location.href = `${window.location.pathname}?page=edit&id=${savedEvent.data.id}`
          }, 3000)
        }
      }
    } catch (e) {
      Logger(e)
    }
  },
  displayName: 'EventForm'
})(EventForm)

EventFormContainer.propTypes = {
  context: PropTypes.object,
  id: PropTypes.number
}

export default styled(EventFormContainer)`
  margin-bottom: 40px;

  .radiobuttons {
    &__title {
      padding: 16px 0 10px !important;
    }

    &__group {
      margin-left: 15px;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }

  .row > .column .ui.grid .row {
    padding: inherit;
  }
`

import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import Logger from 'dmi-mch-utils-logger'
// Pending to connect as reusable
import Event from '../../dmi-mch-services-event/src'
import dayPickerStyle from './styles/daypicker'

// import { useEffect, useState } from 'react'

import form from './form'
// import { Event as EventService } from '../../../services'
// import { logger, validateAxiosResponse } from '../../../utils'

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
        const getEvent = await event.getEvent(id)
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

  // let selectedLocation = null
  // if (addressessList.length > 0 && currentEvent) {
  //   selectedLocation = addressessList.find(address => address.latitude === currentEvent.venue.latitude)
  // }
  const newProps = {
    ...props,
    ...{
      currentEvent,
      currentLocation: '210ae69b-12bb-e811-a96c-000d3ab9add5',
      setAddressessList
    }
  }
  return (<FormRules {...newProps} />)
}

const FormRules = withFormik({
  mapPropsToValues: props => ({
    title: (props.currentEvent && props.currentEvent.title) || '',
    eventTypes: (props.currentEvent && props.currentEvent.eventTypes.map(item => item.id)) || [],
    eventImage: (props.currentEvent && props.currentEvent.eventImage) || '',
    locationId: props.selectedLocation && props.selectedLocation.locationId,
    longParagraphText: (props.currentEvent && props.currentEvent.longParagraphText) || '',
    shortParagraphText: (props.currentEvent && props.currentEvent.shortParagraphText) || '',
    // Venue
    venueName: (props.currentEvent && props.currentEvent.venue && props.currentEvent.venue.name) || '',
    city: (props.currentEvent && props.currentEvent.venue && props.currentEvent.venue.city) || '',
    country: (props.currentEvent && props.currentEvent.venue && props.currentEvent.venue.country) || '',
    // OpeningDateTimes
    date: (props.currentEvent && props.currentEvent.openingDateTimes
      && props.currentEvent.openingDateTimes.length > 0 && props.currentEvent.openingDateTimes[0].date) || '',
    startTime: (props.currentEvent && props.currentEvent.openingDateTimes
      && props.currentEvent.openingDateTimes.length > 0 && props.currentEvent.openingDateTimes[0].startTime) || '',
    endTime: (props.currentEvent && props.currentEvent.openingDateTimes
      && props.currentEvent.openingDateTimes.length > 0 && props.currentEvent.openingDateTimes[0].endTime) || ''
  }),
  enableReinitialize: true,
  validationSchema: () => Yup.object().shape({
    title: Yup.string().required()
  }),

  // handleSubmit: async (values, { props, resetForm }) => {
  // props.setFormSubmitting(true)
  // const objectToSave = { ...values }
  // delete objectToSave.place
  // try {
  //   const savedRecommendation = await RecommendationsService.set(props.recommendation.id, objectToSave)
  //   if (validateAxiosResponse(savedRecommendation)) {
  //     resetForm(objectToSave)
  //     props.setIsFormSubmitted(true)
  //     props.setFormSubmitting(false)
  //   }
  // } catch (e) {
  //   logger(e)
  // }
  // },
  displayName: 'EventForm'
})(form)

const StyledEventFormContainer = styled(EventFormContainer)`
  ${dayPickerStyle}
`

EventFormContainer.propTypes = {
  context: PropTypes.object,
  id: PropTypes.number,
  setAddressessList: PropTypes.func
}

export default StyledEventFormContainer

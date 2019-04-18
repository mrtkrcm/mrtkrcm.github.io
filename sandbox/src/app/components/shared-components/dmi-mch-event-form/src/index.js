import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import Logger from 'dmi-mch-utils-logger'
// import Event from 'dmi-mch-services-event'
import Event from '../../dmi-mch-services-event/src'

import form from './form'

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
    placeId: props.currentEvent && props.currentEvent.venue.placeId,
    longParagraphText: (props.currentEvent && props.currentEvent.longParagraphText) || '',
    shortParagraphText: (props.currentEvent && props.currentEvent.shortParagraphText) || '',
    imageCaption: (props.currentEvent && props.currentEvent.imageCaption) || '',
    // Venue
    venue: (props.currentEvent && props.currentEvent.venue) || '',
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
    eventTypes: Yup.array().min(1),
    title: Yup.string().required()
  }),

  handleSubmit: async (values, { props }) => {
    const objectToSave = { ...values }
    // To be fixed in the API
    // values.venue.timeZoneId = 'Asia/Macau'
    objectToSave.venue = values.venue
    objectToSave.venue.timezoneId = values.venue.timeZoneId
    objectToSave.cityId = props.currentEvent.cityId
    objectToSave.startDate = props.currentEvent.startDate
    objectToSave.openingDateTimes = [
      {
        date: '2019-06-14',
        startTime: '00:00',
        endTime: '02:00'
      }
    ]
    try {
      const event = new Event(props.context)
      const saveEvent = await event.set(props.id, objectToSave)
      if (ValidateAxiosResponse(saveEvent)) {
        // resetForm(objectToSave)
        // props.setIsFormSubmitted(true)
        // props.setFormSubmitting(false)
      }
    } catch (e) {
      Logger(e)
    }
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
  },
  displayName: 'EventForm'
})(form)

EventFormContainer.propTypes = {
  context: PropTypes.object,
  id: PropTypes.number,
  setAddressessList: PropTypes.func
}

export default EventFormContainer

import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
// Dayjs and datejs didn't work for the basic purpose below
import moment from 'moment'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import Logger from 'dmi-mch-utils-logger'
import Event from 'dmi-mch-services-event'

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
      && props.currentEvent.openingDateTimes.length > 0
      && moment(props.currentEvent.openingDateTimes[0].date, 'YYYY-MM-DD').format('DD/MM/YYYY')) || '',

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
  // 14/06/2019
  handleSubmit: async (values, { props }) => {
    const objectToSave = { ...values }
    // Adapting the object to be sent to Save API
    objectToSave.venue = values.venue
    objectToSave.venue.timezoneId = values.venue.timeZoneId || values.venue.timezoneId
    objectToSave.cityId = props.currentEvent.cityId
    objectToSave.startDate = props.currentEvent.startDate
    objectToSave.openingDateTimes = [
      {
        // YYYY-MM-DD is the format the API needs
        date: moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        startTime: values.startTime,
        endTime: values.endTime
      }
    ]
<<<<<<< HEAD
    console.log('objectToSave', objectToSave)
=======
>>>>>>> MCHGB-2657: [FE] Add / Edit Event Form across MFP & CMS
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
  },
  displayName: 'EventForm'
})(form)

EventFormContainer.propTypes = {
  context: PropTypes.object,
  id: PropTypes.number,
  setAddressessList: PropTypes.func
}

export default EventFormContainer

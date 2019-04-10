import { withFormik } from 'formik'
import * as Yup from 'yup'
// import { useEffect, useState } from 'react'

import form from './form'
// import { Event as EventService } from '../../../services'
// import { logger, validateAxiosResponse } from '../../../utils'

const EventRecommendation = (props) => {
  // /* side effects */
  // useEffect(() => {
  //   const event = EventService.getEventAttributes()
  // })

  return (<FormRules />)
}

const FormRules = withFormik({
  mapPropsToValues: props => ({
    title: ''
  }),
  enableReinitialize: true,
  validationSchema: () => Yup.object().shape({
    title: Yup.string().required()
  }),

  handleSubmit: async (values, { props, resetForm }) => {
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

export default EventRecommendation

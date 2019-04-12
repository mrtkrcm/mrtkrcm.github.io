import React, { useEffect, useState } from 'react'
import { Input, Form, Grid, TextArea, Button, Radio } from 'semantic-ui-react'
import Logger from 'dmi-mch-utils-logger'
import Event from 'dmi-mch-services-event'
// import Account from 'dmi-mch-services-account'
import Account from '../../../dmi-mch-services-account/src'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import { buildSelectOptions } from 'dmi-mch-utils-dropdown'

const EventForm = (props) => {
  const [eventAttributesDropdown, setEventAttributesDropdown] = useState([])
  const [myAddresses, setMyAddresses] = useState([])
  useEffect(() => {
    const event = new Event(props.context)
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
    const account = new Account(props.context)
    const fetchMyAccount = async () => {
      try {
        const myAcc = await account.getMine()
        if (ValidateAxiosResponse(myAcc)) {
          const myAddressesList = await account.getMineAddresses(myAcc.data[0].id)
          // console.log('myAddresses', myAddresses)
          const selectItem = {
            key: 'locationId',
            value: 'accountId',
            text: 'name',
            name: 'myAddress'
          }
          const dropdownOptions = buildSelectOptions(myAddressesList.data, selectItem)
          setMyAddresses(dropdownOptions)
        }
      } catch (e) {
        Logger(e)
      }
    }

    fetchEventAttributes()
    fetchMyAccount()
  }, [props.context])

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
        <h2>Key Information</h2>
        <Grid>
          {console.log(myAddresses)}
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Location*'
                  options={myAddresses}
                />
              </Form.Field>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Type of Event*'
                  options={eventAttributesDropdown}
                  multiple
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

        <h2>Venue</h2>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>Search Location / Venue</label>
                <Input type='text' />
              </Form.Field>
              <Form.Field>
                <Form.Select
                  fluid
                  label='Venue Name'
                  options={eventAttributesDropdown}
                  multiple
                />
              </Form.Field>
              <Form.Field>
                <label>Address Line</label>
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
                <label>City</label>
                <Input type='text' />
              </Form.Field>
              <Form.Field>
                <label>Country</label>
                <Input type='text' />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>&nbsp;</label>
                <Button>Clear fields</Button>
              </Form.Field>
              <Form.Field>
                <label>Location detail (optional)</label>
                <Input type='text' />
              </Form.Field>
              <Form.Field>
                <label>ZIP Code</label>
                <Input type='text' />
              </Form.Field>
              <Form.Field>
                <label>State (U.S Only</label>
                <Input type='text' />
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
                <Input type='text' />
                *Event date and time is in the Event Location/Venue’s time zone
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Start time*</label>
                <Input type='text' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>End time*</label>
                <Input type='text' />
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
                <Radio label='Draft' />
                <Radio label='Live' />
              </Form.Field>
            </Grid.Column>



          </Grid.Row>
        </Grid>
      </Form>
    </>
  )
}

export default EventForm

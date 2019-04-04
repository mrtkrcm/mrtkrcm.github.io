import React from 'react'
import { Input, Form, Container, Grid, TextArea } from 'semantic-ui-react'

const EventForm = () => (
  <>
    <h2>New Event</h2>
    <Form>
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
                options={[{key: '0', value: 'Test', option: 'option', label: 'label'}]}
              />
            </Form.Field>
            <Form.Field>
              <label>Title*</label>
              <Input type='text' />
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

export default EventForm

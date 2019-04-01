import React, { Fragment } from 'react'
import { Input, Form, Container, Grid, TextArea } from 'semantic-ui-react'

const EventForm = () => (
  <Container>
    <h2>New Event</h2>
    <Form>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field>
              <label>Enter Name</label>
              <Input type='text' />
            </Form.Field>
          </Grid.Column>
          
          <Grid.Column>
            <Form.Field>
              <label>Image</label>
              <Input type='file' />
            </Form.Field>
          </Grid.Column>
          
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field>
              <label>Subtitle</label>
              <Input type='text' />
            </Form.Field>
          </Grid.Column>
          
          <Grid.Column>
            <Form.Field>
              <label>Image Caption</label>
              <Input type='text' />
            </Form.Field>
          </Grid.Column>
          
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field>
              <label>Long Description</label>
              <TextArea type='text' />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </Form>
  </Container>
  
  )

export default EventForm
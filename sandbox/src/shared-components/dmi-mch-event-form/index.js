import React from 'react'
import { Input, Form, Container, Grid, TextArea, Control } from 'semantic-ui-react'

const EventForm = () => (
  <Container>
    <h2>New Event</h2>
    <Form>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field>
              <Control>
                <label>Enter Name</label>
                <Input type='text' />
              </Control>
            </Form.Field>
          </Grid.Column>
          
          <Grid.Column>
            <Form.Field>
              <Control>
                <label>Image</label>
                <Input type='file' />
              </Control>
            </Form.Field>
          </Grid.Column>
          
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field>
              <Control>
                <label>Subtitle</label>
                <Input type='text' />
              </Control>
            </Form.Field>
          </Grid.Column>
          
          <Grid.Column>
            <Form.Field>
              <Control>
                <label>Image Caption</label>
                <Input type='text' />
              </Control>
            </Form.Field>
          </Grid.Column>
          
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field>
              <Control>
                <label>Long Description</label>
                <TextArea type='text' />
              </Control>
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </Form>
  </Container>
  
  )

export default EventForm
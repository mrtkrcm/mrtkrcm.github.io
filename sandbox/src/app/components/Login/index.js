import Router from 'next/router'

import { Button, Message, Form } from 'dmi-ui/components'
import { User as UserService } from 'services'
import { setUserCookies, validateAxiosResponse, logger } from 'utils'
import { clearUserTokens } from 'storage'
import { Logo } from 'icons'
import LoginStyles from './styles'
import { errorCodeMessages } from './helpers'

const { useState } = React

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState(false)

  const onInputChange = (e) => {
    e.target.name === 'username' && setUsername(e.target.value)
    e.target.name === 'password' && setPassword(e.target.value)
  }

  const requestLogin = async (formData) => {
    try {
      const response = await UserService.signIn(formData)
      if (validateAxiosResponse(response) && response.data.sessionSummary) {
        const { roles } = response.data.sessionSummary
        if (roles.toString().indexOf('cms') < 0) {
          setFormError(errorCodeMessages(403))
          return
        }
        setUserCookies(response, formData)
        localStorage.setItem('logout-event', `logout${Math.random()}`)
        Router.push('/menu')
      } else {
        setFormError(errorCodeMessages(response.status))
      }
      setIsLoading(false)
    } catch (error) {
      logger(error)
    }
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const formData = { username, password }
    if (!username || !password) {
      setFormError(errorCodeMessages('required'))
      return
    }
    setIsLoading(true)
    clearUserTokens()
    requestLogin(formData)
  }

  return (
    <LoginStyles>
      <figure className='avatar'>
        <Logo />
      </figure>
      {formError && <Message color='red'>{formError}</Message>}
      <Form onSubmit={onFormSubmit}>
        <Form.Input label='Username' type='text' name='username' value={username} onChange={onInputChange} />
        <Form.Input label='Password' type='password' name='password' value={password} onChange={onInputChange} />
        <Button content='Sign In' type='submit' loading={isLoading} secondary className='is-narrow' />
      </Form>
    </LoginStyles>
  )
}

export default LoginForm

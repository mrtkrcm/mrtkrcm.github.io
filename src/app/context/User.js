import PropTypes from 'prop-types'
import Router from 'next/router'

import { User as UserService } from '../services'
import { clearUserTokens, getCookie } from '../utils/storage'
import { logger } from '../utils'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const logOut = async () => {
    try {
      const result = await UserService.signOut()
      if (result.status === 200) {
        clearUserTokens()
        localStorage.removeItem('logout-event')
        Router.push('/signin')
      }
    } catch (error) {
      logger(error)
    }
  }

  return (
    <UserContext.Provider value={{ logOut, fullName: getCookie(null, 'fullName') }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}

export default UserProvider

export { UserContext }

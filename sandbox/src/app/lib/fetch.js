import apisauce from 'apisauce'
import axiosRetry from 'axios-retry'

import { clearUserTokens, getAccessToken } from '../utils/storage'

const isBrowser = typeof window !== 'undefined'

// eslint-disable-next-line max-len
const isAuthTokenInvalid = response => response.status === 401 && response.data && response.data.message.indexOf('Invalid access token') !== -1

export default (config) => {
  const instance = apisauce.create(config)

  axiosRetry(instance.axiosInstance, {
    retries: 2,
    retryCondition: (error) => {
      const { response } = error

      if (isAuthTokenInvalid(response)) {
        // eslint-disable-next-line no-param-reassign
        delete error.config.headers.Authorization // delete auth header for the next retry
        clearUserTokens() // will work for only browser requests
        return true
      }

      // dont retry any other request besides the one above, its not a good idea repeat failed request.
      // the only purpose of this function is retrying the requests with invalid auth headers.
      return false
    }
  })

  instance.addRequestTransform((request) => {
    const xsrfToken = getAccessToken()
    if (xsrfToken && xsrfToken.length > 0) {
      request.headers.Authorization = `Bearer ${xsrfToken}` // eslint-disable-line no-param-reassign
    }
  })

  instance.addResponseTransform((response) => {
    // Log http requests on server
    try {
      if (!isBrowser) {
        let responseData = response.data
        let trace = null // eslint-disable-line no-unused-vars

        // Trace object is too long and FE doesn't need BE/Java stack trace. BE has its own crash reports
        if (responseData && typeof responseData === 'object' && 'trace' in responseData) {
          ({ trace, ...responseData } = response.data)
        }

        if (!response.ok) {
          // Request has failed. Log server error object
          console.log(responseData) // eslint-disable-line no-console
          console.log('----') // eslint-disable-line no-console
        }
      }
    } catch (e) {} // eslint-disable-line no-empty
  })

  // send back the sauce
  return instance
}

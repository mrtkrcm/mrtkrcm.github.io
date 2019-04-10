import UniversalCookie from 'universal-cookie'
import Router from 'next/router'
import { logger } from '.'

const CONFIG = require('../../app/config')

const Cookies = new UniversalCookie()

export const setCookie = (key, value, options) => {
  Cookies.set(key, value, options)
}

export const getCookie = (req = null, key, fallback = null) => {
  let result = fallback

  try {
    if (typeof window !== 'undefined') {
      result = Cookies.get(key) || fallback
    } else {
      result = (req && req.universalCookies)
        ? req.universalCookies.get(key)
        : fallback
    }
  } catch (e) {
    logger(`!!! CRITICAL: ${e}`)
  }

  return result
}

export const setUserTokens = (response, values) => {
  const serverSessionObject = { ...response.data }
  let sessionExpire = null

  if (values && values.remember) {
    // Current time + expire time from API, in ms. Converted to date object.
    sessionExpire = new Date(new Date().getTime() + (serverSessionObject.sessionSummary.expireInSeconds * 1000))
  }

  setCookie(CONFIG.COOKIE_KEYS.CSRF_TOKEN, serverSessionObject.sessionSummary.csrfToken, {
    expires: sessionExpire, path: '/'
  })
  setCookie(CONFIG.COOKIE_KEYS.ACCESS_TOKEN, serverSessionObject.accessToken, { expires: sessionExpire, path: '/' })
}

export const getAccessToken = (req = null) => getCookie(req, CONFIG.COOKIE_KEYS.ACCESS_TOKEN)

export const clearUserTokens = (req = null) => {
  if (req && req.universalCookies) {
    req.universalCookies.remove(CONFIG.COOKIE_KEYS.CSRF_TOKEN)
    req.universalCookies.remove(CONFIG.COOKIE_KEYS.ACCESS_TOKEN)
    req.universalCookies.remove('fullName')
  } else {
    Cookies.remove(CONFIG.COOKIE_KEYS.CSRF_TOKEN, { path: '/' })
    Cookies.remove(CONFIG.COOKIE_KEYS.ACCESS_TOKEN, { path: '/' })
    Cookies.remove('fullName', { path: '/' })
  }
}

export const logoutTabs = () => {
  window.addEventListener('storage', (event) => {
    if (event.key === 'logout-event') {
      localStorage.removeItem('logout-event')
      Router.push('/signin')
    }
  })
}

export default {}

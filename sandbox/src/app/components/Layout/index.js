import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import { Container } from 'semantic-ui-react'

import theme from 'dmi-ui/vars'
import Head from './Head'
import Header from './Header'
import layoutStyles from './index.styles'
import EventFormWrapper from '../component-wrappers/EventFormWrapper'

const { useEffect } = React

const Layout = () => {
  const GlobalStyles = layoutStyles(theme)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
  })

  return (
    <main>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Head />
          <GlobalStyles />
          <Header />
          <Container>
            <EventFormWrapper
              id={10}
              httpObject={null}
            />
          </Container>
        </React.Fragment>
      </ThemeProvider>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout

import App, { Container } from 'next/app'
import { compose, setDisplayName } from 'recompose'

import Layout from '../components/Layout'

class CMSApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

const enhance = compose(
  setDisplayName('CMSApp')
)

export default enhance(CMSApp)

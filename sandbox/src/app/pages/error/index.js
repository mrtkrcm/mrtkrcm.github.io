import Error from '../_error'

class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null // eslint-disable-line no-nested-ternary
    // Asks CDNs and others to not to cache the errored page
    if (res) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
    }

    return { statusCode }
  }

  render() {
    const { props } = this
    return <Error statusCode={props.statusCode} />
  }
}

export default ErrorPage

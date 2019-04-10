import LoadingOverlay from 'react-loading-overlay'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FullScreenLoaderWrapper = styled.div`
  ._loading_overlay_wrapper {
    ${props => (props.children.props.active ? '' : 'display: none')}
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  ._loading_overlay_overlay {
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    text-align: center;
    font-size: 1.2em;
    z-index: 800;
    transition: opacity 100ms ease-in;
    opacity: 1;
  }

  ._loading_overlay_content {
    margin: auto;
  }

  ._loading_overlay_spinner {
    position: relative;
    margin: 0 auto 10px auto;
    width: 50px;
    max-height: 100%;
  }
`

const FullScreenLoader = ({ loading }) => (
  <FullScreenLoaderWrapper>
    <LoadingOverlay active={loading} spinner fadeSpeed={100} />
  </FullScreenLoaderWrapper>
)

FullScreenLoader.propTypes = {
  loading: PropTypes.bool
}

export default FullScreenLoader

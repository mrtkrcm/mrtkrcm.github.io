import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

const ContainerComponent = ({ children, ...props }) => (
  <Container {...props}>
    {children}
  </Container>
)

ContainerComponent.propTypes = {
  children: PropTypes.node
}

export default ContainerComponent

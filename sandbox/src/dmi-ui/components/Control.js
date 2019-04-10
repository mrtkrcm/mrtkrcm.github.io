import PropTypes from 'prop-types'
import { Control } from 'rbx/elements'

const ControlComponent = ({ children }) => (
  <Control>
    {children}
  </Control>
)

ControlComponent.propTypes = {
  children: PropTypes.node
}

export default ControlComponent

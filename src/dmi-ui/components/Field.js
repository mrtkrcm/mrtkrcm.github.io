import PropTypes from 'prop-types'
import { Field } from 'rbx/elements'

const FieldComponent = ({ children }) => (
  <Field>
    {children}
  </Field>
)

FieldComponent.propTypes = {
  children: PropTypes.node
}

export default FieldComponent

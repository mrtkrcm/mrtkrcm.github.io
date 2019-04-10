import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'

const CheckboxComponent = ({ children, ...props }) => (
  <Checkbox {...props}>
    {children}
  </Checkbox>
)

CheckboxComponent.propTypes = {
  children: PropTypes.node
}

const StyledCheckboxComponent = styled(CheckboxComponent).withConfig({ componentId: 'dmi-ui-checkbox' })`
  cursor: pointer;
`

export default StyledCheckboxComponent

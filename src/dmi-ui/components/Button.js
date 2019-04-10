import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonComponent = ({ children, ...props }) => <Button {...props}>{children}</Button>

ButtonComponent.propTypes = {
  children: PropTypes.node
}

const StyledButtonComponent = styled(ButtonComponent).withConfig({ componentId: 'dmi-ui-button' })`
&.ui.button {
  border-radius: 0;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 700;
  font-size: ${props => props.theme.buttonFontSize};
  padding-left: 70px;
  padding-right: 70px;

  &.is-narrow {
    padding-left: 40px;
    padding-right: 40px;
  }

  &.is-large {
    line-height: 45px;
    height: 45px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${props => props.theme.buttonFontSize};
    padding-left: 40px;
    padding-right: 40px;
  }
}
`

export default StyledButtonComponent

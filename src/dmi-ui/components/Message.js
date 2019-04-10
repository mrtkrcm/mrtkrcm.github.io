
import { Message } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledMessage = styled(Message).withConfig({ componentId: 'dmi-ui-message' })`
  &.ui.message {
    border-radius: 0;

    &.red {
      background-color: ${props => props.theme.colorBkgError};
    }
  }
`

export default StyledMessage

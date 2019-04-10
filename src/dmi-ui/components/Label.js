import styled from 'styled-components'
import { Label } from 'semantic-ui-react'

const StyledLabel = styled(Label).withConfig({ componentId: 'dmi-ui-label' })`
  font-size: ${props => (props.large ? '16px' : '14px')};
  margin-bottom: 2px;
  font-weight: 700;
`

export default StyledLabel

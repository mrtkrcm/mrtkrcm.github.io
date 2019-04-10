import styled from 'styled-components'
import { Textarea } from 'rbx/elements'

const StyledTextarea = styled(Textarea).withConfig({ componentId: 'dmi-ui-textarea' })`
  box-shadow: none;
  width: 100%;
  border-radius: 0;
  border: 1px solid ${props => props.theme.colorFormBorder};
  color: ${props => props.theme.colorDark};
  font-weight: 400;
  font-size: 15px;
  font-family: ${props => props.theme.bodyFont};
  padding: 13px 0 13px 13px;
`

export default StyledTextarea

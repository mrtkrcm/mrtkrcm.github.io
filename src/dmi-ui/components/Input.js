import styled from 'styled-components'
import { Input } from 'semantic-ui-react'

const StyledInput = styled(Input).withConfig({ componentId: 'dmi-ui-input' })`
  display: block;
  box-shadow: none;
  width: 100%;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colorFormBorder};
  color: ${({ theme }) => theme.colorDark};
  font-weight: 400;
  font-size: 15px;
  font-family: ${({ theme }) => theme.bodyFont};
  padding: 13px 0 13px 13px;

  &:disabled {
    background: #f7f7f7;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorPlaceholder};
    opacity: 1;
  }

  &::-ms-clear {
    display: none;
  }
`

export default StyledInput

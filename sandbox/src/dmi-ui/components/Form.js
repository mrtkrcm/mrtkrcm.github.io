import styled from 'styled-components'
import { Form } from 'semantic-ui-react'

const StyledForm = styled(Form).withConfig({ componentId: 'dmi-ui-form' })`
  &.ui.form {
    .field {
      margin-bottom: 15px;

      & > label {
        font-size: 15px;
        margin-bottom: 5px;
        display: block;
      }

      & .ui.input > input {
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
      }
    }
  }
`

export default StyledForm

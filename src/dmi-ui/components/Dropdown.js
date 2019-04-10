import styled from 'styled-components'
import { Dropdown } from 'semantic-ui-react'

const StyledDropdown = styled(Dropdown).withConfig({ componentId: 'dmi-ui-dropdown' })`
  &.ui.dropdown {
    & > .text {
      font-weight: bold;
      font-size: 15px;
    }

    & > .text,
    & > .dropdown.icon {
      color: ${({ theme }) => theme.colorWhite};
    }

    & > .dropdown.icon {
      font-size: 14px;
    }

    & > .menu {
      width: 100%;
      border: 0;
      border-radius: 0;
      top: 37px;

      & > .item span {
        font-size: 15px;
      }
    }

    &.is-logout {
      display: flex;
      align-items: baseline;

      & > .menu {
        top: 37px;

        & > .item {
          padding: 15px !important;
        }
      }
    }
  }
`

export default StyledDropdown


import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledMenu = styled(Menu).withConfig({ componentId: 'dmi-ui-menu' })`
  &.ui.inverted.menu .item:before {
    background: none;
  }
`

export default StyledMenu

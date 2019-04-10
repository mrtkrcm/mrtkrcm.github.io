import { Panel } from 'rbx/components'
import styled from 'styled-components'

const StyledPanelForm = styled(Panel).withConfig({ componentId: 'dmi-ui-panelform' })`
  border-radius: 0;

  .panel-heading {
    background: ${props => props.theme.colorContent};
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.colorSeparator};
    font-weight: 700;
    font-size: 16px;
    padding: 1.1em;
  }

  .panel-block {
    background: ${props => props.theme.colorContent};
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-bottom: 100px;
  }

  .languages {
    font-size: ${props => props.theme.languagesSize};
    margin-bottom: 12px;

    & > div {
      display: inline-block;
    }

    a {
      color: ${props => props.theme.colorBody};
      display: inline-block;

      &:first-child::after {
        content: '|';
        margin: 0 5px;
        display: inline-block;
        font-weight: bold;
      }

      &.active {
        font-weight: bold;
      }
    }
  }
`

export default StyledPanelForm

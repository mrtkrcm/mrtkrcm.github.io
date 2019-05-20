import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PanelFormComponent = ({ children, ...props }) => <div {...props}>{children}</div>

PanelFormComponent.propTypes = { children: PropTypes.node }

PanelFormComponent.Header = ({ children, ...props }) => (
  <div className='heading' {...props}>
    {children}
  </div>
)

PanelFormComponent.Header.propTypes = { children: PropTypes.node }

PanelFormComponent.Block = ({ children, ...props }) => (
  <div className='block' {...props}>
    {children}
  </div>
)

PanelFormComponent.Block.propTypes = { children: PropTypes.node }

const StyledPanelForm = styled(PanelFormComponent).withConfig({ componentId: 'dmi-ui-panelform' })`
  // Two panels together, should be closer
  & + .dmi-ui-panelform {
    margin-top: -70px;
  }

  border-radius: 0;

  .heading {
    background: ${props => props.backgroundColor};
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${props => props.separatorColor};
    font-weight: 700;
    font-size: 16px;
    padding: 16px 16px 16px 30px;
  }

  .block {
    padding: 8px 30px 30px;
    background: ${props => props.backgroundColor};
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-bottom: 100px;

    & > .grid:first-child {
      margin-top: 0;
      padding-top: 10px;
    }
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

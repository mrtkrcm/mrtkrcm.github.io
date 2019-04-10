import styled from 'styled-components'
import Dropdown from 'react-dropdown'

const StyledDropdown = styled(Dropdown)`
  position: relative;

  &.max-content {
    .Dropdown-menu {
      width: max-content;
    }
  }

  &.transparent {
    .Dropdown-control {
      background: none !important;
      border: none !important;
      padding-left: 0 !important;
    }
  }

  .Dropdown-control {
    position: relative;
    overflow: hidden;
    background-color: white;
    border: 1px solid ${props => props.theme.colorSeparator};
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    padding: 10px 27px 10px 10px;
  }

  .Dropdown-arrow {
    border-color: ${props => props.theme.colorBody} transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    position: absolute;
    right: 10px;
    top: 19px;
    width: 0;
  }

  .is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .Dropdown-menu {
    background-color: white;
    border: 1px solid ${props => props.theme.colorSeparator};
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 300px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .Dropdown-menu .Dropdown-group > .Dropdown-title {
    padding: 8px 10px;
    font-weight: bold;
    text-transform: capitalize;
  }

  .Dropdown-option {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    padding: 10px 16px;
    font-weight: normal;
  }

  .Dropdown-option:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .Dropdown-option.is-selected {
    font-weight: bold;
  }

  .Dropdown-noresults {
    box-sizing: border-box;
    color: #ccc;
    cursor: default;
    display: block;
    padding: 8px 10px;
  }

  .Dropdown-placeholder {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export default StyledDropdown

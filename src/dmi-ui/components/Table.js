import styled from 'styled-components'
import { Table } from 'rbx/elements'

const StyledTable = styled(Table).withConfig({ componentId: 'dmi-ui-table' })`
  background: ${props => props.theme.colorTableBkg};
  table-layout: fixed;
  width: 100%;

  thead {
    td,
    th {
      border-bottom-width: 1px;
      padding: 12px;
    }

    tr:first-child {
      border-top: 1px solid ${props => props.theme.colorTableBorder};
      border-bottom: 1px solid ${props => props.theme.colorTableBorder};
    }
  }

  th > span {
    display: flex;
    cursor: pointer;
  }

  tbody > tr {
    & td {
      padding: 12px;

      &:nth-child(1) {
        width: 10%;
      }
    }
  }

  tr {
    border-top: 1px solid ${props => props.theme.colorTableBorder};
  }

  td,
  th {
    border: none;
  }

  a {
    color: ${props => props.theme.colorTableText};
  }

  td a {
    display: block;
  }

  .ellipsis a {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg[class*='icon-sort'] {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  .desc, .asc {
    position: relative;
    svg {
      display: none
    }
  }

  .asc {
    &::after {
      border-color: rgb(68,71,73) transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: ' ';
      display: inline-block;
      height: 0;
      position: relative;
      right: -13px;
      top: 9px;
      width: 0;
    }
  }

  .desc {
    &::after {
      transform: rotate(180deg);
      border-color: rgb(68,71,73) transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: ' ';
      display: inline-block;
      height: 0;
      position: relative;
      right: -13px;
      top: 9px;
      width: 0;
    }
  }
`

export default StyledTable

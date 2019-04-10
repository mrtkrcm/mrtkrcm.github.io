import styled from 'styled-components'
import AsyncSelect from 'react-select/lib/Async'

// Some props can be changed directly in the theme (check https://react-select.com/styles for reference):
const customStyles = {
  control: provided => ({
    ...provided,
    paddingTop: 4,
    paddingBottom: 4
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),
  dropdownIndicator: provided => ({
    ...provided,
    display: 'none'
  })
}

const MyAsyncSelect = props => (
  <AsyncSelect
    styles={customStyles}
    theme={theme => ({
      ...theme,
      borderRadius: 0
    })}
    {...props}
  />
)

const StyledAsyncSelect = styled(MyAsyncSelect).withConfig({ componentId: 'dmi-ui-async-select' })`
  > div {
    border: 1px solid ${props => props.theme.colorFormBorder};
    font-weight: normal;
  }

  .react-select__placeholder {
    color: ${props => props.theme.colorPlaceholder};
    opacity: 1;
  }

  .react-select__clear-indicator {
    cursor: pointer;
  }

  &.max-content {
    .react-select__menu {
      min-width: 100%;
      width: max-content;
    }
  }
`

export default StyledAsyncSelect

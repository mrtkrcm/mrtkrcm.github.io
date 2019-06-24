import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

const UserGroupSelector = (props) => {
  const { selected, name, setFieldValue, label, disabled, dropDownOptions } = props

  return (
    <Form.Select
      disabled={disabled}
      search
      name={name}
      fluid
      label={label}
      options={dropDownOptions}
      onChange={(e, { value }) => {
        setFieldValue(name, value)
      }}
      multiple
      value={selected}
    />
  )
}

UserGroupSelector.propTypes = {
  selected: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  setFieldValue: PropTypes.func,
  disabled: PropTypes.bool,
  dropDownOptions: PropTypes.array
}

export default UserGroupSelector

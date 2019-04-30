import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import ValidateAxiosResponse from 'dmi-mch-utils-validate-axios-response'
import { buildSelectOptions } from 'dmi-mch-utils-dropdown'
import Logger from 'dmi-mch-utils-logger'
import Usergroup from '../../dmi-mch-services-usergroup/src'

const UserGroupSelector = (props) => {
  const [userGroupsDropDown, setUserGroupsDropDown] = useState([])
  const { context, selected, name, setFieldValue, label } = props
  useEffect(() => {
    const userGroup = new Usergroup(context)
    const fetchUsergroups = async () => {
      try {
        const userGroups = await userGroup.getAll()
        if (ValidateAxiosResponse(userGroups)) {
          const selectItem = {
            key: 'name',
            value: 'name',
            text: 'displayName'
          }
          const dropdownOptions = buildSelectOptions(userGroups.data, selectItem)
          setUserGroupsDropDown(dropdownOptions)
        }
      } catch (e) {
        Logger(e)
      }
    }
    fetchUsergroups()
  }, [context])

  return (
    <Form.Select
      name={name}
      fluid
      label={label}
      options={userGroupsDropDown}
      onChange={(e, { value }) => {
        setFieldValue(name, value)
      }}
      multiple
      value={selected}
    />
  )
}

UserGroupSelector.propTypes = {
  context: PropTypes.object,
  selected: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  setFieldValue: PropTypes.func
}

export default UserGroupSelector

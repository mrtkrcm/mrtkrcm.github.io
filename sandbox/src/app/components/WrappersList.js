import PropTypes from 'prop-types'

import EventFormWrapper from './component-wrappers/EventFormWrapper'

const CmsRoleSections = () => (
  <>
    <EventFormWrapper />
  </>
)

CmsRoleSections.propTypes = {
  userRoles: PropTypes.array
}

export default CmsRoleSections

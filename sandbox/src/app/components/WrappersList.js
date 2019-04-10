import PropTypes from 'prop-types'

import EventFormWrapper from './component-wrappers/EventFormWrapper'

const CmsRoleSections = props => (
  <>
    <EventFormWrapper />
  </>
)

CmsRoleSections.propTypes = {
  userRoles: PropTypes.array
}

export default CmsRoleSections

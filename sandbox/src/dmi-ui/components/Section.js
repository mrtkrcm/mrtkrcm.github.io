import PropTypes from 'prop-types'
import { Section } from 'rbx/layout'

const SectionComponent = ({ children }) => (
  <Section>
    {children}
  </Section>
)

SectionComponent.propTypes = {
  children: PropTypes.node
}

export default SectionComponent

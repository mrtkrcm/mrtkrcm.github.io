import PropTypes from 'prop-types'
import { Title } from 'rbx/elements'

const TitleComponent = (props) => {
  const { children } = props
  return (
    <Title {...props}>
      {children}
    </Title>
  )
}

TitleComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default TitleComponent

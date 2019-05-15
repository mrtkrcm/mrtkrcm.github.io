import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputFeedback = ({ className, children }) => (<small className={className}>{children}</small>)

InputFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

const InputFeedbackStyled = styled(InputFeedback)`
  display: block;
  margin-top: 8px;
  color: #ff1341;
  font-size: 12px;
`

export default InputFeedbackStyled

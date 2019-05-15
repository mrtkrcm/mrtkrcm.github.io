import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function respectHtml(html) {
  return html
}

const createStyledText = (as, props) => styled(as, props)`
  font-size: ${props.isSmall ? '12px' : '16px'};
  color: ${props.textColor ? props.textColor : 'inherit'};
`

const Text = ({ as, isHtml, className, children, ...props }) => {
  const Element = createStyledText(as || 'div', props)
  return (
    <>
      {isHtml ? (
        <Element
          className={className}
          dangerouslySetInnerHTML={{
            __html: respectHtml(children)
          }}
        />
      ) : (
        <Element className={className}>{children}</Element>
      )}
    </>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  as: PropTypes.string,
  isHtml: PropTypes.bool
}

export default Text

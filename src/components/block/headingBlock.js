import React from 'react'
import ParseHTML from '../../utils/parseHTML'

const HeadingBlock = ({
  // align,
  anchor,
  // backgroundColor,
  // className,
  content,
  level,
  textAlign,
  textColor
}) => {
  const headingAlignment = textAlign ? `text-${textAlign}` : `text-left`
  const headingColor = textColor ? `text-${textColor}` : `text-white`
  const heading = React.createElement(
    `h${level}`,
    { id: anchor, className: `${headingAlignment} ${headingColor}` },
    ParseHTML(content)
  )
  return heading
}
export default HeadingBlock

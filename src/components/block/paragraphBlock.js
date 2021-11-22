import React from 'react'
import ParseHTML from '../../utils/parseHTML'

const ParagraphBlock = ({
  align,
  anchor,
  // backgroundColor,
  // className,
  content,
  // dropCap,
  // style,
  textColor
}) => {
  const paragraphAlignment = align ? `text-${align}` : `text-left`
  const paragraphColor = textColor ? `text-${textColor}` : `text-white`
  const paragraph = React.createElement(
    `p`,
    { id: anchor, className: `${paragraphAlignment} ${paragraphColor}` },
    ParseHTML(content)
  )
  return paragraph
}
export default ParagraphBlock

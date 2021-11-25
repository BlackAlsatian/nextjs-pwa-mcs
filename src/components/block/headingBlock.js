import React from 'react'
import { getblockAtributes } from '../../utils/blockAttributes'
import ParseHTML from '../../utils/parseHTML'

const HeadingBlock = ({
  // align,
  anchor,
  // backgroundColor,
  // className,
  content,
  level,
  fontSize,
  style,
  textAlign,
  textColor
}) => {
  const { blockId, color, alignment, blockFontSize, blockFontHeight } =
    getblockAtributes(anchor, textColor, textAlign, null, fontSize, style)

  const heading = React.createElement(
    `h${level}`,
    {
      id: blockId,
      className: `${color} ${blockFontSize} ${blockFontHeight} ${alignment}`
    },
    ParseHTML(content)
  )
  return heading
}
export default HeadingBlock

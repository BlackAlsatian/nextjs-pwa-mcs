import React from 'react'
import { getblockAtributes } from '../../utils/blockAttributes'
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
  const { blockId, color, alignment } = getblockAtributes(
    anchor,
    textColor,
    align
  )

  const paragraph = React.createElement(
    `p`,
    { id: blockId, className: `${color} ${alignment}` },
    ParseHTML(content)
  )
  return paragraph
}
export default ParagraphBlock

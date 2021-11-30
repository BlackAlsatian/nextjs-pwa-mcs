export const getblockAtributes = (
  anchor,
  color,
  align,
  percentageWidth,
  fontSize,
  style
) => {
  const blockStyles = style ? JSON.parse(style) : null

  const blockWidth = {
    '20%': 'w-full md:w-1/5',
    '25%': 'w-full md:w-1/4',
    '33%': 'w-full md:w-1/3',
    '40%': 'w-full md:w-2/5',
    '50%': 'w-full md:w-2/4',
    '60%': 'w-full md:w-3/5',
    '66%': 'w-full md:w-2/3',
    '75%': 'w-full md:w-3/4',
    '80%': 'w-full md:w-4/5'
  }
  const textSize = {
    default: 'text-base',
    'extra-small': 'text-xs',
    small: 'text-sm',
    normal: 'text-base',
    large: 'text-xl',
    'extra-large': 'text-4xl',
    huge: 'text-6xl md:text-7xl',
    gigantic: 'text-7xl md:text-8xl'
  }
  const textHeight = {
    0.875: 'leading-tighter',
    1: 'leading-none',
    1.5: 'leading-normal'
  }
  const attributes = {
    blockId: anchor ?? anchor,
    color: color ? 'text-' + color : 'text-light',
    alignment: align ? 'text-' + align : 'text-left',
    width: percentageWidth ? `${blockWidth[percentageWidth]}` : 'w-full',
    blockFontSize: fontSize ? `${textSize[fontSize]}` : '',
    blockFontHeight: blockStyles?.typography?.lineHeight
      ? `${textHeight[blockStyles?.typography?.lineHeight]}`
      : 'leading-none'
  }

  return attributes
}

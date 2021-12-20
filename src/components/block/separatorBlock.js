import styles from './separatorBlock.module.scss'

const SeparatorBlock = ({
  align,
  // anchor,
  // className,
  color
  // customColor
}) => {
  let separatorAlignment = styles.wideAlign

  if (align === 'center') {
    separatorAlignment = styles.centerAlign
  }

  if (align === 'wide') {
    separatorAlignment = styles.wideAlign
  }

  if (align === 'full') {
    separatorAlignment = styles.fullAlign
  }
  return (
    <div className={`bg-${color} h-1 mt-8 mb-16 ${separatorAlignment}`}></div>
  )
}
export default SeparatorBlock

import Block from '../../lib/block'
import { getblockAtributes } from '../../utils/blockAttributes'
import styles from './columnBlock.module.scss'
const ColumnBlock = ({
  attributes: {
    anchor,
    // backgroundColor,
    // className,
    // gradient,
    // style,
    // textColor,
    // verticalAlignment,
    percentageWidth
    // stringWidth
  },
  innerBlocks
}) => {
  const { id, width } = getblockAtributes(anchor, null, null, percentageWidth)
  return (
    <div id={id} className={`${styles.wrapper} ${width}`}>
      {/* // <div id={id} className={styles.width}> */}
      {innerBlocks ? (
        <>
          {innerBlocks.map((block, index) => (
            <Block block={block} key={`child-${index}`} />
          ))}
        </>
      ) : null}
    </div>
  )
}
export default ColumnBlock

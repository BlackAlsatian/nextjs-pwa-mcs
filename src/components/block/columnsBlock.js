import Block from '../../lib/block'
import Container from '../layout/container'
import styles from './columnsBlock.module.scss'
const ColumnsBlock = ({
  attributes: {
    // align,
    anchor
    // backgroundColor,
    // className,
    // gradient,
    // style,
    // textColor,
    // verticalAlignment
  },
  innerBlocks
}) => (
  <section id={anchor}>
    {innerBlocks ? (
      <Container>
        <div className={styles.wrapper}>
          {innerBlocks.map((block, index) => (
            <Block block={block} key={`column-${index}`} />
          ))}
        </div>
      </Container>
    ) : null}
  </section>
)
export default ColumnsBlock

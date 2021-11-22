import Image from 'next/image'
import Container from '../layout/container'
import Block from '../../lib/block'
import { bgWrap, bgText, imgWrap } from './coverBlock.module.scss'

const CoverBlock = ({
  attributes: {
    anchor,
    // id,
    // align,
    // backgroundType,
    // className,
    // contentPosition,
    // hasParallax,
    // minHeight,
    // minHeightUnit,
    // overlayColor,
    url
  },
  innerBlocks
}) => {
  return (
    <section className={bgWrap} id={anchor}>
      {innerBlocks ? (
        <div className={bgText}>
          <Container>
            {innerBlocks.map((block, index) => (
              <Block block={block} key={index} />
            ))}
          </Container>
        </div>
      ) : null}
      <Image
        alt='Industrial Internet of Things'
        src={url}
        layout='fill'
        objectFit='cover'
        quality={80}
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        className={imgWrap}
      />
    </section>
  )
}
export default CoverBlock

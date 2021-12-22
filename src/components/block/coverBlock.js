import Image from 'next/image'
import Block from '../../lib/block'
import Container from './../layout/container'
import { bgText, bgWrap, imgWrap } from './coverBlock.module.scss'

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
      <Image
        alt=''
        src={url}
        priority
        layout='fill'
        objectFit='cover'
        quality={80}
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        className={imgWrap}
      />
      {innerBlocks ? (
        <div className={bgText}>
          <Container>
            {innerBlocks.map((block, index) => (
              <Block block={block} key={`cover-block-${index}`} />
            ))}
          </Container>
        </div>
      ) : null}
    </section>
  )
}
export default CoverBlock

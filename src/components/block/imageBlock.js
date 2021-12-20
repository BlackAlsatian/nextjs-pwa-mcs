import Image from 'next/image'
import { imgWrap } from './imageBlock.module.scss'

const ImageBlock = ({ align, alt, height, width, url }) => {
  const imgWidth = width ? width : 800
  const imgHeight = height ? height : 800
  return (
    <div className={imgWrap}>
      <Image
        alt={alt}
        src={url}
        width={imgWidth}
        height={imgHeight}
        layout='responsive'
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
      />
    </div>
  )
}
export default ImageBlock

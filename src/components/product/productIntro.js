import Image from 'next/image'
import Link from 'next/link'

const ProductIntro = ({ title, image, description, uri }) => {
  return (
    <div>
      {image && (
        <Image
          width={image?.mediaDetails?.width}
          height={image?.mediaDetails?.height}
          alt={image?.altText}
          src={image?.sourceUrl}
          layout='responsive'
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
        />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <Link href={uri}>
          <a>{title}</a>
        </Link>
      </p>
    </div>
  )
}

export default ProductIntro

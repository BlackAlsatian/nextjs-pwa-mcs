import Image from 'next/image'
import Link from 'next/link'

const Category = ({ title, slug, image, uri }) => {
  const imgWidth = 400
  return (
    <div>
      {/* <span>image: {image}</span> */}
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
      <p>slug: {slug}</p>
      <p>
        uri:{' '}
        <Link href={uri}>
          <a>{title}</a>
        </Link>
      </p>
    </div>
  )
}

export default Category

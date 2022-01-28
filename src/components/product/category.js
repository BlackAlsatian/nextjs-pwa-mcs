import Image from 'next/image'

const Category = ({ name, slug, image }) => {
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
      <h2>{name}</h2>
      <p>slug: {slug}</p>
    </div>
  )
}

export default Category

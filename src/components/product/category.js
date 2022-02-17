import Image from 'next/image'
import Link from 'next/link'
import styles from './category.module.scss'

const Category = ({ title, image, uri }) => {
  const placeholderImage = {
    altText: 'No image available',
    sourceUrl:
      'https://wp.motioncontrolsystems.co.za/wp-content/uploads/woocommerce-placeholder.png',
    mediaDetails: {
      height: 800,
      width: 800
    }
  }
  console.log('image: ', image)
  console.log('placeholder image: ', placeholderImage)
  const categoryImage = image || placeholderImage
  console.log('category image: ', categoryImage)
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        {/* {image && ( */}
        <Link href={uri}>
          <a alt={title}>
            <Image
              width={categoryImage?.mediaDetails?.width}
              height={categoryImage?.mediaDetails?.height}
              alt={categoryImage?.altText}
              src={categoryImage?.sourceUrl}
              layout='responsive'
              placeholder='blur'
              blurDataURL='/images/placeholder.png'
            />
          </a>
        </Link>
        {/* )} */}
      </div>
      <div className={styles.name}>
        <h2>
          <Link href={uri}>
            <a>{title}</a>
          </Link>
        </h2>
      </div>
    </div>
  )
}

export default Category

import Image from 'next/image'
import Link from 'next/link'
import ParseHTML from '../../utils/parseHTML'
import styles from './productIntro.module.scss'

const ProductIntro = ({ title, image, description, uri, price }) => {
  const placeholderImage = {
    altText: 'No image available',
    sourceUrl:
      'https://wp.motioncontrolsystems.co.za/wp-content/uploads/woocommerce-placeholder.png',
    mediaDetails: {
      height: 800,
      width: 800
    }
  }

  const productImage = image || placeholderImage
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Link href={uri}>
          <a title={productImage?.altText}>
            <Image
              width={productImage?.mediaDetails?.width}
              height={productImage?.mediaDetails?.height}
              alt={productImage?.altText}
              src={productImage?.sourceUrl}
              layout='responsive'
              placeholder='blur'
              blurDataURL='/images/placeholder.png'
            />
          </a>
        </Link>
      </div>
      <div className={styles.productInfo}>
        <h2>
          <Link href={uri}>
            <a title={title}>{title}</a>
          </Link>
        </h2>
        <p>{ParseHTML(description)}</p>
        <p>{price}</p>
        <p className={styles.readOn}>
          <Link href={uri}>
            <a title={`Read more about ${title}`}>Details</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ProductIntro

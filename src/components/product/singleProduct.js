import Image from 'next/image'
import Link from 'next/link'
import ParseHTML from './../../utils/parseHTML'
import styles from './singleProduct.module.scss'

const SingleProduct = ({ product }) => {
  console.log('product: ', product)
  return (
    <div className={styles.product}>
      <div className={styles.col}>
        <Image
          alt={product?.image?.altText}
          src={product?.image?.sourceUrl}
          width={product?.image?.mediaDetails?.width}
          height={product?.image?.mediaDetails?.height}
        />
      </div>
      <div className={styles.col}>
        {/* <p>Price: {product?.price}</p> */}
        <p className={styles.price}>{product?.regularPrice}</p>
        {/* <p>{product?.title}</p> */}
        {ParseHTML(product?.description)}
        <button>Add To Quote</button>
        <p className={styles.sku}>SKU: {product?.sku}</p>
        {product?.productCategories && (
          <p className={styles.category}>
            Category:{' '}
            {product?.productCategories?.nodes.map((category, index) => (
              <span key={category?.id || index}>
                <Link href={category?.uri}>
                  <a title={category?.title}>{category?.title}</a>
                </Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  )
}

export default SingleProduct

import Image from 'next/image'
import Link from 'next/link'
import styles from './category.module.scss'

const Category = ({ title, slug, image, uri }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
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
      </div>
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

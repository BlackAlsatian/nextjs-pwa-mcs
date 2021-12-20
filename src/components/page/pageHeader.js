import Image from 'next/image'
import Container from '../layout/container'
import styles from './pageHeader.module.scss'

const PageHeader = ({ title, intro, image }) => {
  const featuredImage = image?.node
  return (
    <section className={styles.section}>
      {image && (
        <Image
          alt={featuredImage.altText}
          src={featuredImage.sourceUrl}
          layout='fill'
          objectFit='cover'
          quality={80}
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          className={styles.imgWrap}
        />
      )}
      <div className={styles.headerWrap}>
        <Container>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: intro }} />
        </Container>
      </div>
    </section>
  )
}

export default PageHeader

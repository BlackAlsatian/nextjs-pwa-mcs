import Image from 'next/image'
import Container from '../layout/container'
import ParseHTML from './../../utils/parseHTML'
import styles from './pageHeader.module.scss'

const PageHeader = ({ title, intro, image, isPost }) => {
  const featuredImage = image?.node || image
  return (
    <section className={`${styles.section} ${isPost && 'h-screen'}`}>
      {image && (
        <Image
          alt={featuredImage.altText}
          src={featuredImage.sourceUrl}
          priority
          layout='fill'
          objectFit='cover'
          quality={80}
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          className={`${styles.imgWrap} ${
            isPost ? styles.imgPositionCenter : styles.imgPositionBottom
          }`}
        />
      )}
      <div className={`${styles.headerWrap} ${isPost && 'h-screen'}`}>
        <Container>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          {intro && (
            <p dangerouslySetInnerHTML={{ __html: ParseHTML(intro) }} />
          )}
        </Container>
      </div>
    </section>
  )
}

PageHeader.defaultProps = {
  isPost: false
}
export default PageHeader

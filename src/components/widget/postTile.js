import Image from 'next/image'
import Link from 'next/link'
import ParseHTML from '../../utils/parseHTML'
import Date from '../meta/date'
import Container from './../layout/container'
import styles from './postTile.module.scss'

const PostTile = ({ post }) => {
  const latestPost = post?.node
  const featuredImage = latestPost?.featuredImage?.node
  return (
    <div className={styles.wrapper}>
      <Image
        alt={featuredImage.altText}
        src={featuredImage.sourceUrl}
        layout='fill'
        objectFit='cover'
        quality={60}
        placeholder='/images/placeholder.png'
        className={styles.imgWrap}
      />
      <div className={styles.postText}>
        <Container>
          <h3>
            <Link href={`/blog/${latestPost?.slug}/`}>
              <a>{latestPost?.title}</a>
            </Link>
          </h3>
          <p className={styles.small}>
            <Date dateString={latestPost?.date} />
          </p>
          {ParseHTML(latestPost?.excerpt)}
          <p className={styles.readmore}>
            <Link href={`/blog/${latestPost?.slug}/`}>
              <a className={styles.small}>read more..</a>
            </Link>
          </p>
        </Container>
      </div>
    </div>
  )
}

export default PostTile

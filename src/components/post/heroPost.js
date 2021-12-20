import Link from 'next/link'
import Avatar from '../meta/avatar'
import Date from '../meta/date'
import CoverImage from './coverImage'
import styles from './heroPost.module.scss'

const HeroPost = ({ title, coverImage, date, excerpt, author, slug, uri }) => {
  return (
    <div className={styles.postsWrapper}>
      <div className={styles.image}>
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
            uri={uri}
            width='2000'
          />
        )}
      </div>
      <div className={styles.intro}>
        <div>
          <h2>
            <Link href={`${uri}`}>
              <a dangerouslySetInnerHTML={{ __html: title }} />
            </Link>
          </h2>
          <div className={styles.date}>
            <Date dateString={date} />
          </div>
          <Avatar author={author} />
        </div>
        <div className={styles.excerptContainer}>
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className={styles.readOn}>
            <Link href={`${uri}`}>read on..</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPost

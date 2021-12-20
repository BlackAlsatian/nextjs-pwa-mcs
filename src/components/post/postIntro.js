import Link from 'next/link'
import { decodeHTML } from '../../utils/helpers'
import ParseHTML from '../../utils/parseHTML'
import Avatar from '../meta/avatar'
import Date from '../meta/date'
import styles from './postIntro.module.scss'
import PostIntroImage from './postIntroImage'

const PostIntro = ({ title, coverImage, date, excerpt, author, slug, uri }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        {coverImage && (
          <PostIntroImage
            title={title}
            coverImage={coverImage}
            slug={slug}
            uri={uri}
          />
        )}
      </div>
      <article className={styles.postMeta}>
        <h2>
          <Link href={`${uri}`}>
            <a>{decodeHTML(title)}</a>
          </Link>
        </h2>
        <div className={styles.dateAndAuthor}>
          <Avatar author={author} />
          <div className={styles.date}>
            <Date dateString={date} />
          </div>
        </div>
        <div className={styles.excerpt}>{ParseHTML(excerpt)}</div>
        <div className={styles.readOn}>
          <Link href={`${uri}`}>
            <a>read on..</a>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default PostIntro

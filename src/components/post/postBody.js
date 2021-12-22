import Container from '../layout/container'
import ParseHTML from '../../utils/parseHTML'
import styles from './postBody.module.scss'

const PostBody = ({ content }) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <article>
          <div className={styles.article}>{ParseHTML(content)}</div>
        </article>
      </Container>
    </section>
  )
}

export default PostBody

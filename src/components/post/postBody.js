import Container from '../layout/container'
import ParseHTML from '../../utils/parseHTML'
import styles from './postBody.module.scss'

const PostBody = ({ content }) => {
  return (
    <section>
      <Container>
        <article>
          <div className={styles.wrapper}>{ParseHTML(content)}</div>
        </article>
      </Container>
    </section>
  )
}

export default PostBody

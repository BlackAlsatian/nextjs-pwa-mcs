import ParseHTML from '../../utils/parseHTML'
import Container from '../layout/container'
import styles from './pageBody.module.scss'

const PageBody = ({ content: { content } }) => {
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

export default PageBody

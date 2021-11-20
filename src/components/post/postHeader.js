import Container from '../layout/container'
import styles from './postHeader.module.scss'

const PostHeader = ({ title }) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </Container>
    </section>
  )
}

export default PostHeader

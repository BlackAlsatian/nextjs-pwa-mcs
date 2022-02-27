import Link from 'next/link'
import Container from '../layout/container'
import styles from './breadcrumbs.module.scss'

const Breadcrumbs = ({ type, page }) => {
  return (
    <section className={styles.breadcrumbs}>
      <Container>
        <p>
          <Link href='/'>
            <a title='Motion Control Systems'>Home</a>
          </Link>
          {' > '}
          <Link href='/products/'>
            <a title='Motion Control Systems Product Catalogue'>Products</a>
          </Link>
          {' > '}
          {type === 'category' && <>{page.title}</>}
          {type === 'product' && (
            <>
              <Link href={page.productCategories.nodes[0].uri}>
                <a>{page.productCategories.nodes[0].title}</a>
              </Link>
              {' > '}
              <span>{page.title}</span>
            </>
          )}
        </p>
      </Container>
    </section>
  )
}

export default Breadcrumbs

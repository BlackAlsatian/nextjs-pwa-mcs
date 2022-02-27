import Link from 'next/link'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import PageHeader from '../components/page/pageHeader'
import getMenusMetaData from '../query/menusMetaQuery'
import styles from '../styles/404.module.scss'

function NotFoundPage({ pageData }) {
  return (
    <Layout seo={pageData?.seo} uri={pageData?.uri}>
      <PageHeader title='404' />
      <section className={styles.wrapper}>
        <Container>
          {/* <h1>404</h1> */}
          <p>
            This is not the page you were looking for.
            <br />
            Let&apos;s take you{' '}
            <Link href='/'>
              <a>home</a>
            </Link>
          </p>
        </Container>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export async function getStaticProps() {
  const { metaData } = await getMenusMetaData()

  return {
    props: {
      siteMeta: metaData.data || {},
      pageData: {
        seo: {
          title: '404 - Page Not Found'
        }
      }
    },
    revalidate: 1
  }
}

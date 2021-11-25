import Head from 'next/head'
import { sanitize } from '../../utils/helpers'
import Footer from '../footer/footer'
import Header from '../header/header'
import Seo from '../seo/seo'
import styles from './layout.module.scss'

const Layout = ({ children, data }) => {
  const document = data || {}
  return (
    <>
      <Seo seo={document?.pageData?.seo} uri={document?.pageData?.uri} />
      <Head>
        {document?.siteMeta?.headerMeta?.favicon && (
          <link
            rel='shortcut icon'
            href={document?.siteMeta?.headerMeta?.favicon}
          />
        )}

        {document?.pageData?.seo?.schemaDetails ||
        document?.pageData?.seo?.schema?.raw ? (
          <script
            type='application/ld+json'
            className='yoast-schema-graph'
            key='yoastSchema'
            dangerouslySetInnerHTML={{
              __html: sanitize(
                document?.pageData?.seo.schemaDetails ||
                  document?.pageData?.seo?.schema?.raw
              )
            }}
          />
        ) : null}
      </Head>
      <div className={styles.wrapper}>
        <Header
          meta={document?.siteMeta?.headerMeta}
          nav={document?.menus?.primaryMenu?.edges}
        />
        <main>{children}</main>
        <Footer
          data={document?.siteMeta?.footerMeta}
          footerNav={document?.menus?.secondaryMenu?.edges}
        />
      </div>
    </>
  )
}

export default Layout

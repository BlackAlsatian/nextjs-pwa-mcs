import Head from 'next/head'
import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import { sanitize } from '../../utils/helpers'
import CookieNotice from '../cookieConsent/cookieNotice'
import Footer from '../footer/footer'
import Header from '../header/header'
import Seo from '../seo/seo'
import styles from './layout.module.scss'

const Layout = ({ children, data }) => {
  const { isOpen } = useContext(OffCanvasContext)
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
      <div
        className={`${styles.wrapper} ${
          isOpen && 'max-h-screen overflow-hidden'
        }`}
      >
        <Header
          meta={document?.siteMeta?.headerMeta}
          nav={document?.menus?.primaryMenu?.edges}
        />
        <main>{children}</main>
        <Footer
          data={document?.siteMeta?.footerMeta}
          mainNav={document?.menus?.primaryMenu?.edges}
          footerNav={document?.menus?.secondaryMenu?.edges}
        />
        <CookieNotice />
      </div>
    </>
  )
}

export default Layout

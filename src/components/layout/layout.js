import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useContext } from 'react'
import { useGlobalPropsContext } from '../../store/globalPropsProvider'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import { sanitize } from '../../utils/helpers'
import Header from '../header/header'
import Seo from '../seo/seo'
import styles from './layout.module.scss'
const Footer = dynamic(() => import('../footer/footer'))
const Favicon = dynamic(() => import('./favicon'))
const CookieNotice = dynamic(() => import('../cookieConsent/cookieNotice'))

const Layout = ({ children, seo, uri }) => {
  const { isOpen } = useContext(OffCanvasContext)
  const { menus, siteMeta } = useGlobalPropsContext()
  return (
    <>
      <Seo seo={seo} uri={uri} />
      <Head>
        {siteMeta?.headerMeta?.favicon && <Favicon />}

        {seo?.schemaDetails || seo?.schema?.raw ? (
          <script
            type='application/ld+json'
            className='yoast-schema-graph'
            key='yoastSchema'
            dangerouslySetInnerHTML={{
              __html: sanitize(seo.schemaDetails || seo?.schema?.raw)
            }}
          />
        ) : null}
      </Head>
      <div
        className={`${styles.wrapper} ${
          isOpen && 'max-h-screen overflow-hidden'
        }`}
      >
        <Header meta={siteMeta?.headerMeta} nav={menus?.primaryMenu?.edges} />
        <main>{children}</main>
        <Footer
          data={siteMeta?.footerMeta}
          mainNav={menus?.primaryMenu?.edges}
          footerNav={menus?.secondaryMenu?.edges}
        />
        <CookieNotice />
      </div>
    </>
  )
}

export default Layout

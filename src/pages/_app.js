import Router from 'next/router'
import NProgress from 'nprogress'
import { useState } from 'react'
import GlobalPropsProvider from '../store/globalPropsProvider'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function WPApp({ Component, pageProps }) {
  const [globalProps] = useState({
    menus: {
      primaryMenu: pageProps?.siteMeta?.primaryMenu,
      secondaryMenu: pageProps?.siteMeta?.secondaryMenu
    },
    siteMeta: {
      headerMeta: pageProps?.siteMeta?.headerMeta,
      footerMeta: pageProps?.siteMeta?.footerMeta
    }
  })
  return (
    <GlobalPropsProvider value={globalProps}>
      <OffCanvasProvider>
        <Component {...pageProps} />
      </OffCanvasProvider>
    </GlobalPropsProvider>
  )
}

export default WPApp

import Router from 'next/router'
import NProgress from 'nprogress'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function WPApp({ Component, pageProps }) {
  return (
    <OffCanvasProvider>
      <Component {...pageProps} />
    </OffCanvasProvider>
  )
}

export default WPApp

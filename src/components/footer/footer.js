import ParseHTML from '../../utils/parseHTML'
import Container from '../layout/container'
import Contact from '../widget/contact'
import Copyright from '../widget/copyright'
import Social from '../widget/social'
import styles from './footer.module.scss'
import FooterNav from './footerNav'

export default function Footer({ data, footerNav, mainNav }) {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.links}>
            <Contact />
            <Social />
          </div>
          <div className={styles.links}>
            <FooterNav nav={mainNav} title='Company' />
          </div>
          <div className={styles.links}>
            <FooterNav nav={footerNav} title='Privacy' />
          </div>
          <div className={`${styles.links} ${styles.sideTwo}`}>
            {ParseHTML(data?.sidebarTwo)}
          </div>
        </div>
        <Copyright />
      </Container>
    </footer>
  )
}

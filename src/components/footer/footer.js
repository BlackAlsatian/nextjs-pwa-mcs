import Container from '../layout/container'
import ParseHTML from '../../utils/parseHTML'
// import FooterNav from './footerNav'
import styles from './footer.module.scss'

export default function Footer({ data }) {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.links}>{ParseHTML(data?.sidebarOne)}</div>
          <div className={styles.links}>{ParseHTML(data?.sidebarTwo)}</div>
          {/* <div className={styles.links}>
            <FooterNav nav={footerNav} />
          </div> */}
        </div>
        <div
          className={styles.copyright}
          dangerouslySetInnerHTML={{ __html: data?.copyrightText }}
        />
      </Container>
    </footer>
  )
}

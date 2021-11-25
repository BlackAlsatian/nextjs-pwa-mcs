import Image from 'next/image'
import Link from 'next/link'
import { siteMeta } from '../../config/index'
import MainNav from '../nav/mainNav'
import HamburgerMenuButton from '../offCanvas/hamburgerMenuButton'
import OffCanvasMenu from '../offCanvas/offCanvasMenu'
import styles from './header.module.scss'

export default function Header({ meta, nav }) {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {meta.siteLogoUrl ? (
            <Link href='/'>
              <a>
                <Image
                  width={350}
                  height={310}
                  alt={`${meta.siteTitle} Logo`}
                  src={meta.siteLogoUrl}
                  className={styles.logo}
                />
              </a>
            </Link>
          ) : (
            <>
              <h1>
                <Link href='/'>
                  <a>{siteMeta.siteName}</a>
                </Link>
                .
              </h1>
              <p>{siteMeta.siteDescription}</p>
            </>
          )}
        </div>

        <div className={styles.right}>
          <MainNav nav={nav} />
          <HamburgerMenuButton />
          <span>Open main menu</span>
        </div>
      </div>
      <OffCanvasMenu nav={nav} />
    </header>
  )
}

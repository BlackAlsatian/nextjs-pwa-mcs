import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import MainNav from '../nav/mainNav'
import styles from './header.module.scss'
const HamburgerMenuButton = dynamic(() =>
  import('../offCanvas/hamburgerMenuButton')
)
const OffCanvasMenu = dynamic(() => import('../offCanvas/offCanvasMenu'))

export default function Header({ meta, nav }) {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link href='/'>
            <a>
              <Image
                width={200}
                height={86}
                alt={`${meta.siteTitle} Logo`}
                src='/images/motion-control-systems-logo.png'
              />
            </a>
          </Link>
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

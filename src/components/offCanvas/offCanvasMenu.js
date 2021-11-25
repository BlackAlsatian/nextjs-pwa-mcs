import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import HamburgerMenuButton from './hamburgerMenuButton'
import styles from './offCanvasMenu.module.scss'
import OffCanvasNav from './offCanvasNav'

const OffCanvasMenu = ({ nav }) => {
  const { isOpen, handleBurgerMenuClick } = useContext(OffCanvasContext)

  return (
    <>
      <div
        className={`${styles.wrapper} ${isOpen ? 'opacity-90' : 'opacity-0'}`}
      >
        <div className={styles.hamburger}>
          <HamburgerMenuButton />
        </div>
        <OffCanvasNav
          nav={nav}
          onClick={() => {
            handleBurgerMenuClick()
          }}
        />
      </div>
    </>
  )
}

export default OffCanvasMenu

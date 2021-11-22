import NavLink from './navLink'
import styles from './offCanvasNav.module.scss'

const OffCanvasNav = ({ nav, onClick }) => {
  const menuItems = nav

  return (
    <nav className={styles.main}>
      <ul>
        {menuItems.map(item => {
          return (
            <li key={item.node.id} onClick={onClick}>
              <NavLink link={item.node} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default OffCanvasNav

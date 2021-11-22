import ActiveLink from '../../utils/activeLink'
import styles from './mainNav.module.scss'

const MainNav = ({ nav }) => {
  const menuItems = nav

  return (
    <nav className={styles.main}>
      <ul>
        {menuItems.map(item => {
          return (
            <li key={item.node.id}>
              <ActiveLink
                activeClassName={`${styles.active}`}
                href={item.node.path}
              >
                <a className={`${styles.inActive}`}>{item.node.label}</a>
              </ActiveLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav

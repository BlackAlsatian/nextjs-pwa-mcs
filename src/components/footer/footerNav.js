import NavLink from '../nav/navLink'
import styles from './footerNav.module.scss'

const FooterNav = ({ nav, title }) => {
  const menuItems = nav
  return (
    <div className={styles.footer}>
      <h3>{title}</h3>
      <ul>
        {menuItems.map(item => {
          return (
            <li key={item.node.id}>
              <NavLink link={item.node} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FooterNav

import Link from 'next/link'
import styles from './cookieCard.module.scss'

const CookieCard = ({ message, onClick, button, privacyUrl, privacyText }) => {
  return (
    <div className={styles.cookieCard}>
      <div>
        <p>{message}</p>
        <div>
          <button onClick={onClick}>{button}</button>
          {privacyUrl && (
            <Link href={privacyUrl}>
              <a>{privacyText}</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CookieCard

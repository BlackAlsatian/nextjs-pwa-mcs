import Facebook from '../../components/icons/facebook'
import styles from './social.module.scss'

const Social = () => {
  return (
    <div className={styles.social}>
      <a
        href='https://www.facebook.com/motioncontrolsystems.co.za/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Facebook />
      </a>
    </div>
  )
}
export default Social

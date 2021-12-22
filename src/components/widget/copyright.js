import styles from './copyright.module.scss'
const Copyright = () => {
  return (
    <div className={styles.copyright}>
      Copyright &copy; {new Date().getFullYear()} Motion Control Systems - All
      Rights Reserved.{' '}
      <a
        href='https://www.blackalsatian.co.za'
        title='Custom Web Development &amp; Digital Marketing'
        target='_blank'
        rel='noopener noreferrer'
      >
        Web Development by Black Alsatian.
      </a>
    </div>
  )
}

export default Copyright

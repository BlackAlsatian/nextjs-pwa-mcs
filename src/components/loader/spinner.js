import styles from './spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <span className={styles.loading}>Loading...</span>
      </div>
    </div>
  )
}

export default Spinner

import styles from './contactForm.module.scss'

const ContactForm = () => {
  return (
    <section id='connect' className={styles.contactForm}>
      <div className={styles.containerWrap}>
        <div className={styles.copyWrap}>
          <h3>Let{`'`}s Connect</h3>
          <div className={styles.separator}></div>
          <p>
            Connect with us and let us discuss solutions to the challenges you
            are facing.
          </p>
        </div>
        <div className={styles.formWrap}>
          <div className={styles.inputWrap}>
            <label className='self-center'>Name*</label>
            <input
              className={styles.textInput}
              type='text'
              placeholder='Harley Davidson'
              autoComplete='on'
              required
            />
          </div>
          <div className={styles.inputWrap}>
            <label className='self-center'>Email*</label>
            <input
              className={styles.textInput}
              placeholder='harley.davidson@example.com'
              type='email'
              required
            />
          </div>
          <div className={`${styles.inputWrap} flex-col`}>
            <label className='self-start'>Message*</label>
            <textarea
              name='message'
              cols='30'
              rows='4'
              placeholder='Your message goes here'
              className={styles.textareaInput}
            ></textarea>
          </div>
          <button className={styles.button}>Let{`'`}s Connect</button>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

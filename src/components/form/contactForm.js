import styles from './contactForm.module.scss'
import ContactFormCopy from './contactFormCopy'
import EnquiryForm from './enquiryForm'

const ContactForm = () => {
  return (
    <section id='connect' className={styles.contactForm}>
      <div className={styles.containerWrap}>
        <ContactFormCopy />
        <EnquiryForm />
      </div>
    </section>
  )
}

export default ContactForm

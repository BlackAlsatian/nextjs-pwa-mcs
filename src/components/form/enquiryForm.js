import { useState } from 'react'
import styles from './enquiryForm.module.scss'

const EnquiryForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      name,
      lastname: '',
      email,
      number,
      message
    }
    console.log('Form data: ', data)

    const res = await fetch('/api/enquiry', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    console.log('form result', res)
    e.target.reset()
  }

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <label className='self-center' htmlFor='name'>
          Name*
        </label>
        <input
          id='name'
          name='name'
          className={styles.textInput}
          type='text'
          autoComplete='name'
          required
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputWrap}>
        <label className='self-center' htmlFor='email'>
          Email*
        </label>
        <input
          id='email'
          name='email'
          className={styles.textInput}
          type='email'
          autoComplete='email'
          required
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputWrap}>
        <label className='self-center' htmlFor='number'>
          Number*
        </label>
        <input
          id='number'
          name='number'
          className={styles.textInput}
          type='tel'
          autoComplete='phone'
          required
          onChange={e => setNumber(e.target.value)}
        />
      </div>
      <div className={`${styles.inputWrap} flex-col`}>
        <label className='self-start' htmlFor='message'>
          Message*
        </label>
        <textarea
          id='message'
          name='message'
          cols='30'
          rows='4'
          placeholder='How may we assist?'
          className={styles.textareaInput}
          required
          onChange={e => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className={styles.button} type='submit'>
        Let{`'`}s Connect
      </button>
    </form>
  )
}

export default EnquiryForm

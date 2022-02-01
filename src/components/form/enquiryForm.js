import { useForm } from 'react-hook-form'
import { emailRegExp, phoneRegExp } from './../../utils/helpers'
import styles from './enquiryForm.module.scss'

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      number: '',
      message: ''
    }
  })

  const onSubmit = data => {
    const res = fetch('/api/enquiry', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    reset(getValues)
  }

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit(onSubmit)}>
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
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', {
            required: 'Required field',
            minLength: {
              value: 3,
              message:
                'The minimum required length for this field is 3 characters.'
            },
            maxLength: {
              value: 50,
              message: 'That is a bit long for a name field.'
            }
          })}
        />
      </div>
      {errors.name && (
        <div className={styles.inputError}>{errors.name.message}</div>
      )}
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
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Required field.',
            pattern: {
              value: emailRegExp,
              message: 'There is something wrong with that email.'
            },
            maxLength: {
              value: 80,
              message: 'That is a bit long for an email address.'
            }
          })}
        />
      </div>
      {errors.email && (
        <div className={styles.inputError}>{errors.email.message}</div>
      )}
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
          aria-invalid={errors.number ? 'true' : 'false'}
          {...register('number', {
            required: 'Required field',
            minLength: {
              value: 10,
              message: 'Seems a bit short.'
            },
            pattern: {
              value: phoneRegExp,
              message: "There's something not quite right with this number?"
            }
          })}
        />
      </div>
      {errors.number && (
        <div className={styles.inputError}>{errors.number.message}</div>
      )}
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
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', {
            required: 'How may we assist?',
            minLength: {
              value: 40,
              message: 'At least 40 characters are required.'
            }
          })}
        ></textarea>
      </div>
      {errors.message && (
        <div className={styles.inputError}>{errors.message.message}</div>
      )}
      <button className={styles.button} type='submit'>
        Let{`'`}s Connect
      </button>
    </form>
  )
}

export default EnquiryForm

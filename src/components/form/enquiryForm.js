import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import { emailRegExp, phoneRegExp } from './../../utils/helpers'
import styles from './enquiryForm.module.scss'

const EnquiryForm = () => {
  const router = useRouter()
  const referrerUrl =
    typeof window !== 'undefined' ? window.location.origin : 'unknown'

  const { handleNotify, prepareModal } = useContext(OffCanvasContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      number: '',
      message: '',
      status: 'new',
      subscribe: 0,
      privacy_policy: 0,
      page: router.asPath,
      traffic_source: referrerUrl,
      tags: 'enquiry'
    }
  })

  const onSubmit = async data => {
    const res = await fetch(`/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const response = await res.json()
    if (response.status === 'OK') {
      handleNotify()
      setTimeout(() => {
        handleNotify()
        prepareModal()
      }, 3000)
    }
    reset()
  }

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrap}>
        <label className='self-center' htmlFor='name'>
          Name*
        </label>
        <input
          // id='name'
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
        <label className={styles.textInputSecond} htmlFor='lastname'>
          Lastname*
        </label>
        <input
          // id='name'
          name='lastname'
          className={styles.textInputSecond}
          type='text'
          autoComplete='off'
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
          // id='email'
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
          // id='number'
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
          // id='message'
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
      <div className={styles.checkboxWrap}>
        <input
          type='checkbox'
          aria-invalid={errors.privacy_policy ? 'true' : 'false'}
          {...register('privacy_policy', {
            required: "Without your consent, we won't be able to contact you."
          })}
        />
        <label htmlFor='privacy_policy'>
          Yes, I understand that you are saving this info I submit for the
          purpose of contacting me and grant my permission by tickin this box. I
          have also read and understood your{' '}
          <Link href='/privacy-policy'>
            <a title='Motion Control Systems Privacy Policy'>privacy policy</a>
          </Link>
          .
        </label>
      </div>
      {errors.privacy_policy && (
        <div className={styles.inputError}>{errors.privacy_policy.message}</div>
      )}
      <div className={styles.checkboxWrap}>
        <input type='checkbox' {...register('subscribe')} />
        <label htmlFor='subscribe'>
          While we{`'`}re here, please add me to your mailing list so that I can
          stay informed with the latest developments in our industry.
        </label>
      </div>
      <button
        className={styles.button}
        type='submit'
        onClick={() => prepareModal()}
      >
        Let{`'`}s Connect
      </button>
    </form>
  )
}

export default EnquiryForm

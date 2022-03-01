import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import CloseButton from '../icons/closeButton'
import styles from './notification.module.scss'

const Notification = () => {
  const { notifyIsOpen, modalReady, handleNotify } =
    useContext(OffCanvasContext)
  return (
    modalReady && (
      <div
        className={styles.overlayWrapper}
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className={styles.overlayInner}>
          {/*
              Background overlay, show/hide based on modal state.

              Entering: "ease-out duration-300"
                  From: "opacity-0"
                  To: "opacity-100"
              Leaving: "ease-in duration-200"
                  From: "opacity-100"
                  To: "opacity-0"
          */}
          {notifyIsOpen && (
            <div className={styles.overlayTransition} aria-hidden='true'></div>
          )}

          {/* This element is to trick the browser into centering the modal contents */}
          <span className={styles.overlaySpanCenter} aria-hidden='true'>
            &#8203;
          </span>

          {/*
              Modal panel, show/hide based on modal state.

              Entering: "ease-out duration-300"
                  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                  From: "opacity-100 translate-y-0 sm:scale-100"
                  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          */}
          {notifyIsOpen && (
            <div className={styles.notificationContainer}>
              <div className={styles.notificationContainerInner}>
                <div className={styles.notificationContainerInner}>
                  <div className={styles.closeContainer}>
                    <button
                      onClick={() => {
                        handleNotify()
                      }}
                      aria-label='Close'
                    >
                      <CloseButton />
                    </button>
                  </div>
                  <div className={styles.message}>
                    <h3 id='modal-title'>Thank you!</h3>
                    <div>
                      <p>
                        We received your enquiry and will reply as soon as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  )
}

export default Notification

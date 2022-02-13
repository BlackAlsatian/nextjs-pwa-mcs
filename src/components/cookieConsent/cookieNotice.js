import { useEffect, useState } from 'react'
import CookieCard from './cookieCard'

function isBrowser() {
  return typeof window !== 'undefined'
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function useStickyState(defaultValue, key) {
  const [value, setter] = useState(() => {
    return getValue(key, defaultValue)
  })

  useEffect(() => {
    setValue(key, value)
  }, [key, value])

  return [value, setter]
}

const CookieConsent = () => {
  const exdays = 90
  const theDate = new Date()
  theDate.setTime(theDate.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + theDate.toUTCString()

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden'
  )

  const SetCookie = () => {
    document.cookie =
      'mcs-cookie-notice=true; ' + expires + '; SameSite=Lax; Secure'
    setBannerHidden(true)
  }
  const UnSetCookie = () => {
    document.cookie =
      'mcs-cookie-notice=false; ' + expires + '; SameSite=Lax; Secure'
    setBannerHidden(false)
  }

  return (
    <>
      {!bannerHidden && (
        <CookieCard
          message='We use cookies to personalise content and analyze our website performance to improve your experience.'
          onClick={SetCookie}
          button='Accept'
          privacyUrl='/privacy-policy/'
          privacyText='Privacy Policy'
        />
      )}
      {bannerHidden && (
        <CookieCard
          message="This is only for testing purposes and won't be in the final build."
          onClick={UnSetCookie}
          button='Revoke'
        />
      )}
    </>
  )
}

export default CookieConsent

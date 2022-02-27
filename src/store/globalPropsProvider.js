import { createContext, useContext } from 'react'

// initialize context object
export const GlobalPropsContext = createContext()

// useContext hook
export function useGlobalPropsContext() {
  return useContext(GlobalPropsContext)
}

// context provider
export default function GlobalPropsProvider(props) {
  const { value, children } = props

  return (
    <GlobalPropsContext.Provider value={value}>
      {children}
    </GlobalPropsContext.Provider>
  )
}

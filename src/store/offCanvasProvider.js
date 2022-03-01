import React, { createContext, useState } from 'react'

export const OffCanvasContext = createContext()
OffCanvasContext.displayName = 'OffCanvasStyle'

const OffCanvasProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [notifyIsOpen, setNotifyIsOpen] = useState(false)
  const [modalReady, setModalReady] = useState(false)
  return (
    <OffCanvasContext.Provider
      value={{
        isOpen,
        notifyIsOpen,
        modalReady,
        handleBurgerMenuClick: () => setIsOpen(!isOpen),
        handleNotify: () => setNotifyIsOpen(!notifyIsOpen),
        prepareModal: () => setModalReady(!modalReady)
      }}
    >
      {children}
    </OffCanvasContext.Provider>
  )
}

export default OffCanvasProvider

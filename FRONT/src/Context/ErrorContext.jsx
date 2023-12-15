import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ErrorContext = createContext()

const ErrorContextProvider = ({ children }) => {
  const [showErrorModal, setShowErrorModal] = useState(false)

  const location = useLocation()

  useEffect(() => {
    return () => {
      setShowErrorModal(false)
    }
  }, [location.pathname])

  const openModal = () => {
    setShowErrorModal(true)
  }
  const closeModal = () => {
    setShowErrorModal(false)
  }

  return (
        <ErrorContext.Provider
            value={{
              showErrorModal,
              openModal,
              closeModal
            }}
        >
            {children}
        </ErrorContext.Provider>
  )
}

export { ErrorContext, ErrorContextProvider }

import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ErrorContext = createContext()

const ErrorContextProvider = ({ children }) => {
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const location = useLocation()

  useEffect(() => {
    return () => {
      setShowErrorModal(false)
      setErrorMessage('')
    }
  }, [location.pathname])

  return (
        <ErrorContext.Provider
            value={{
              showErrorModal,
              errorMessage,
              setShowErrorModal,
              setErrorMessage
            }}
        >
            {children}
        </ErrorContext.Provider>
  )
}

export { ErrorContext, ErrorContextProvider }

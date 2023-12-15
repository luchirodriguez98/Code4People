import { useContext } from 'react'
import { ErrorContext } from '../Context/ErrorContext'

function useErrorContext () {
  return useContext(ErrorContext)
}

export { useErrorContext }

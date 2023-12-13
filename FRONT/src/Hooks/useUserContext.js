import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function useUserContext () {
  return useContext(UserContext)
}

export { useUserContext }

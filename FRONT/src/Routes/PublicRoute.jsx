import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../Hooks/useUserContext.js'

function PublicRoute () {
  const { usuario } = useUserContext()

  if (usuario) {
    return <Navigate to='/cuenta' />
  }

  return <Outlet />
}

export { PublicRoute }

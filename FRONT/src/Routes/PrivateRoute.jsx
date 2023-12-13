import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../Hooks/useUserContext.js'

function PrivateRoute ({ hasRole: role = 'usuario', path = '/' }) {
  const { usuario } = useUserContext()

  const isExpired = usuario?.exp < Date.now()

  if (!usuario || isExpired) {
    return <Navigate to={path || '/login'} />
  }
  if (usuario.role !== role) {
    return <Navigate to={path} />
  }

  return <Outlet />
}

export { PrivateRoute }

import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../Hooks/useUserContext.js'

function PrivateRoute ({ hasRole: role, path = '/' }) {
  const { usuario, logOut } = useUserContext()
  const isExpired = usuario?.exp < Date.now()

  if (!usuario || isExpired) {
    logOut()
    return <Navigate to={path || '/login'} />
  }
  if (Array.isArray(role)) {
    if (!role.includes(usuario.role)) {
      return <Navigate to={path} />
    }
  } else if (usuario.role !== role) {
    return <Navigate to={path} />
  }

  return <Outlet />
}

export { PrivateRoute }

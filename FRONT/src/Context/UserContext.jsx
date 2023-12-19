import { createContext, useState } from 'react'
import { useNavigate } from 'react-router'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const [usuario, setUsuario] = useState(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo?.exp < Date.now()) {
      return null
    }
    return userInfo
  })

  const buttonToRender = usuario ? 'MI CUENTA' : 'IDENTIFICATE'

  const logIn = (userLogin) => {
    setUsuario(userLogin)
    navigate('/cuenta')
  }

  const logOut = () => {
    setUsuario(null)
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    navigate('/login')
  }

  return (
        <UserContext.Provider
            value={{
              usuario,
              token,
              buttonToRender,
              logIn,
              logOut
            }}
        >
            {children}
        </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }

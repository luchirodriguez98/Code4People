import { createContext, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
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
  }

  const logOut = () => {
    setUsuario(null)
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
  }

  return (
        <UserContext.Provider
            value={{
              usuario,
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

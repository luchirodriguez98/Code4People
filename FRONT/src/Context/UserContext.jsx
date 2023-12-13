import { createContext, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(
    null
    // {
    //   nombre: '',
    //   role: 'admin',
    //   id_usuario: ''
    // }
  )
  const buttonToRender = usuario ? 'MI CUENTA' : 'IDENTIFICATE'

  const logIn = (userLogin) => {
    setUsuario(userLogin)
  }

  const logOut = () => {
    setUsuario(null)
    localStorage.removeItem('token')
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

import { createContext, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(
    // null
    { role: 'empresa' }
    // { data.token / user,
    //   user.nombre: '',
    //   user.role: 'admin',
    //   user.exp: '',
    //   token
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

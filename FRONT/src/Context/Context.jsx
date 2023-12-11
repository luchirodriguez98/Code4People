import { createContext, useState } from 'react'

const MyContext = createContext()

const MyContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    pass: '',
    role: 'usuario'
  })
  const buttonToRender = usuario ? 'MI CUENTA' : 'IDENTIFICATE'

  const logIn = (userLogin) => {
    setUsuario(userLogin)
  }

  const logOut = () => {
    setUsuario(null)
    localStorage.removeItem('token')
  }

  return (
        <MyContext.Provider
            value={{
              usuario,
              buttonToRender,
              logIn,
              logOut
            }}
        >
            {children}
        </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }

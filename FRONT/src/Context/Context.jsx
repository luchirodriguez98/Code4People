import { createContext, useState } from 'react'

const MyContext = createContext()

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)
  // {
  //   nombre: '',
  //   email: '',
  //   pass: '',
  //   tipo_usuario: undefined
  // }

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

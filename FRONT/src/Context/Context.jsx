import { createContext, useState } from 'react'

const MyContext = createContext()

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // {
  //   nombre: '',
  //   email: '',
  //   pass: '',
  //   tipo_usuario: undefined
  // }

  const buttonToRender = user ? 'MI CUENTA' : 'IDENTIFICATE'

  const handleNameChange = (event) => {
    setUser(event.target.value)
  }

  const logIn = () => {

  }

  const logOut = () => {

  }

  return (
        <MyContext.Provider
            value={{
              user,
              buttonToRender,
              handleNameChange,
              logIn,
              logOut
            }}
        >
            {children}
        </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }

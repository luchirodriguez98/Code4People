import { createContext, useState } from 'react'

const MyContext = createContext()

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
    pass: '',
    tipo_usuario: 0
  })
  // const [newUser, setNewUser] = useState({
  //   nombre: '',
  //   email: '',
  //   pass: '',
  //   tipo_usuario: 0
  // })

  const buttonToRender = user ? 'MI CUENTA' : 'REGISTRATE AHORA'

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

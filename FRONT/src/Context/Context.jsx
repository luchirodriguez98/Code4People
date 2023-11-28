import { createContext, useState } from 'react'

const MyContext = createContext()

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState('')
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

  return (
        <MyContext.Provider
            value={{
              user,
              // newUser,
              buttonToRender,
              handleNameChange
              // handleInputChange,
              // saveNewUser
            }}
        >
            {children}
        </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }

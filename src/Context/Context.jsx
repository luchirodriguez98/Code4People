import { createContext, useState } from "react"

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({children}) =>{

    const [user, setUser] = useState('');

    const buttonToRender = user ? "MI CUENTA" : "REGISTRATE AHORA"

    return(
        <MyContext.Provider
            value={{
                user,
                setUser,
                buttonToRender
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, MyContextProvider}
import { createContext, useState } from "react"

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({children}) =>{

    const [user, setUser] = useState('');

    return(
        <MyContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, MyContextProvider}
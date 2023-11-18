import { createContext } from "react"

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({children}) =>{



    return(
        <MyContext.Provider
            value={{

            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, MyContextProvider}
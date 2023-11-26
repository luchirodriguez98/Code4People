import { createContext, useState } from "react"

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({children}) =>{

    const Users= [{}];

    const [user, setUser] = useState('');
    const [newUser, setNewUser] = useState({
        nombre: '',
        email: '',
        pass: '',
        tipo_usuario: 0,
    })

    const buttonToRender = user ? "MI CUENTA" : "REGISTRATE AHORA"

    const handleNameChange = (event) =>{
        setUser(event.target.value)
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUser({...newUser,[name]: value});
      };

    const saveNewUser = async () =>{
        // try {
        //     const response = await fetch('http://localhost:5000/users',{
        //         method: 'POST',
        //         headers:{
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(newUser),
        //     })
        // } catch (error) {
        //     console.error('Error:', error);
        // }
        try {
            Users.push(newUser);
            console.log(Users[1]);
            setNewUser({
                nombre: '',
                email: '',
                pass: '',
                tipo_usuario: 0,
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <MyContext.Provider
            value={{
                user,
                newUser,
                buttonToRender,
                handleNameChange,
                handleInputChange,
                saveNewUser
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, MyContextProvider}
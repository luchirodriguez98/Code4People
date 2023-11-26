import { useContext } from 'react';
import styles from './Registro.module.css'
import { MyContext } from '../../Context/Context';

function Registro () {

    const context = useContext(MyContext);


    return (
        <div className={`${styles.body}`}>
            <form action="" className={`${styles.form}`} onSubmit={(event)=>event.preventDefault()}>
                <h1 className={`${styles.title}`}>Registra tu empresa!</h1>
                <label htmlFor="nombre">NOMBRE / NOMBRE DE EMPRESA</label>
                <input required 
                type="text" 
                id="nombre" 
                name="nombre" 
                placeholder='Escribe tu nombre'
                value={context.newUser.nombre} 
                onChange={(event)=>context.handleInputChange(event)}
                />
                <label htmlFor="email">EMAIL</label>
                <input 
                required 
                type="email" 
                id="email" 
                name="email" 
                placeholder='Escribe tu contraseña'
                value={context.newUser.email} 
                onChange={(event)=>context.handleInputChange(event)}
                />
                <label htmlFor="password">CLAVE</label>
                <input 
                required 
                type="password" 
                id="pass" 
                name="pass" 
                placeholder='Escribe tu contraseña'
                value={context.newUser.pass} 
                onChange={(event)=>context.handleInputChange(event)}
                />
                <button className={`${styles.button}`} onClick={()=>context.saveNewUser()}>GUARDAR</button>
            </form>
        </div>
    )
}

export { Registro }
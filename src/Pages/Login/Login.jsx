
import styles from './Login.module.css'

function Login () {
    return (
        <form action="" className={`${styles.form}`}>
            <h1 className={`${styles.title}`}>Inicia sesion</h1>
            <label htmlFor="email"></label>
            <input required type="email" id="email" name="email" placeholder='Escribe tu email'/>
            <label htmlFor="password"></label>
            <input required type="password" id="password" name="password" placeholder='Escribe tu contraseña'/>
            <button className={`${styles.button}`}>INCIA SESION</button>
        </form>
    )
}

export { Login }
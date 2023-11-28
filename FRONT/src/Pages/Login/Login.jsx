import { useContext } from 'react'
import { MyContext } from '../../Context/Context'
import styles from './Login.module.css'

function Login () {
  const context = useContext(MyContext)

  return (
        <div className={`${styles.body}`}>
            <form action="" className={`${styles.form}`} onSubmit={(event) => event.preventDefault()}>
                <h1 className={`${styles.title}`}>Inicia sesion</h1>
                <label htmlFor="email"></label>
                <input required
                type="email"
                id="email"
                name="email"
                placeholder='Escribe tu email'
                value={context.user}
                onChange={(event) => context.handleNameChange(event)}/>
                <label htmlFor="password"></label>
                <input required type="password" id="password" name="password" placeholder='Escribe tu contraseña'/>
                <button className={`${styles.button}`} >INCIA SESION</button>
            </form>
        </div>
  )
}

export { Login }

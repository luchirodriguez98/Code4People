import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Context/Context'
import { useForm } from '../../Hooks/useForm'
import styles from './Login.module.css'
import { logInUser } from '../../services/logInUser'

function Login () {
  const context = useContext(MyContext)

  const [formValues, handleFormChange] = useForm({
    email: '',
    pass: ''
  })

  const navigate = useNavigate()

  const { email, pass } = formValues

  async function handleSubmit (e) {
    e.preventDefault()

    if (email === '' || pass === '') return

    logInUser(email, pass).then(response => {
      if (response.error) {
        console.error(response.error)
      }
      console.log(response)
      localStorage.setItem('token', response.data.token)
      context.logIn(response.data.usuario)
      navigate('/cuenta')
    })
  }

  return (
        <div className={`${styles.body}`}>
            <form action="" className={`${styles.form}`} onSubmit={handleSubmit}>
                <h1 className={`${styles.title}`}>Inicia sesion</h1>
                <label htmlFor="email">EMAIL</label>
                <input required
                type="email"
                id="email"
                name="email"
                placeholder='Escribe tu email'
                value={formValues.email}
                onChange={handleFormChange}
                />
                <label htmlFor="password">CLAVE</label>
                <input
                  required
                  type="password"
                  id="pass"
                  name="pass"
                  placeholder='Escribe tu contraseña'
                  value={formValues.pass}
                  onChange={handleFormChange}
                />
                <button className={`${styles.button}`} >INCIA SESION</button>
                <span className={styles.redirectRegistro}>
                  <p>No tienes cuenta?</p>
                  <NavLink to="/registro">
                    <p>Registrate</p>
                  </NavLink>
                  </span>
            </form>
        </div>
  )
}

export { Login }

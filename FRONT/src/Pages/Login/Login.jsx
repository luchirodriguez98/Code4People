import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { logInUser } from '../../services/logInUser'
import styles from './Login.module.css'
import stylesForm from '../../Styles/form.module.css'
import { FaGithub } from 'react-icons/fa6'
import { useUserContext } from '../../Hooks/useUserContext'

function Login () {
  const context = useUserContext()

  const { formValues, handleFormChange } = useForm({
    email: '',
    pass: ''
  })

  const { email, pass } = formValues

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (email === '' || pass === '') return

    logInUser(email, pass).then(response => {
      if (response.error) {
        console.log(response)
        return console.error(response.error)
      }
      localStorage.setItem('token', response.data.token)
      context.logIn(response.data.user)
      navigate('/cuenta')
    })
  }

  return (
        <div className={`${styles.body}`}>
            <h1 className={`${styles.title}`}>Inicia sesion</h1>
            <form className={`${stylesForm.form}`} onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input required
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Escribe tu email'
                  value={formValues.email}
                  onChange={handleFormChange}
                />
                <label htmlFor="pass">CLAVE</label>
                <input
                  required
                  type="password"
                  id="pass"
                  name="pass"
                  placeholder='Escribe tu contraseña'
                  value={formValues.pass}
                  onChange={handleFormChange}
                />
                <button className={`${stylesForm.button}`} >INCIA SESION</button>
            </form>
            <span className={styles.redirectRegistro}>
              <p>No tienes cuenta?</p>
              <NavLink to="/registro">
                <p>Registrate </p>
              </NavLink>
            </span>
            <span className={styles.icon}>
              <FaGithub />
            </span>
        </div>
  )
}

export { Login }

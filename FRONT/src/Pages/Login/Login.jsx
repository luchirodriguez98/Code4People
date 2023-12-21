// import { FaGithub } from 'react-icons/fa6'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Hooks/useUserContext'
import { useForm } from '../../Hooks/useForm'
import { logInUser } from '../../services/user/logInUser.js'
import styles from './Login.module.css'
import stylesForm from '../../Styles/form.module.css'

function Login () {
  const context = useUserContext()

  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    email: '',
    pass: ''
  })
  const navigate = useNavigate()

  return (
    <div className={`${styles.body}`}>
      <h1 className={styles.title}>Inicia sesion</h1>
      <form className={stylesForm.form} onSubmit={(event) => logInUser({ event, formValues, reset, context, navigate, setErrors, errors })}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Escribe tu email'
            value={formValues.email}
            onChange={handleFormChange}
            className={errors?.email ? stylesForm.invalidInput : undefined}
          />
          <label htmlFor="pass">CLAVE</label>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder='Escribe tu contraseña'
            value={formValues.pass}
            onChange={handleFormChange}
            className={errors?.pass ? stylesForm.invalidInput : undefined}
          />
          <button onClick={() => {
            setErrors(null)
          }}
            className={`${stylesForm.button}`}
          >
            INICIA SESION
          </button>
      </form>
      <span className={styles.redirectRegistro}>
        <p>No tienes cuenta?</p>
        <NavLink to="/registro">
          <p>Registrate </p>
        </NavLink>
      </span>
    </div>
  )
}

export { Login }

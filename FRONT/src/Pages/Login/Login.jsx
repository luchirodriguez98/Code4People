import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Hooks/useUserContext'
import { useErrorContext } from '../../Hooks/useErrorContext'
import { useForm } from '../../Hooks/useForm'
import { logInUser } from '../../services/logInUser'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'
import { FaGithub } from 'react-icons/fa6'
import styles from './Login.module.css'
import stylesForm from '../../Styles/form.module.css'

function Login () {
  const userContext = useUserContext()
  const errorContext = useErrorContext()
  console.log(errorContext.showErrorModal)

  const navigate = useNavigate()

  const { formValues, handleFormChange } = useForm({
    email: '',
    pass: ''
  })

  const { email, pass } = formValues

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (email === '' || pass === '') {
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage('Hay campos requeridos vacíos')
      return
    }

    logInUser(email, pass).then(response => {
      if (response.error) {
        console.log(response)
        errorContext?.setShowErrorModal(true)
        errorContext?.setErrorMessage(response.error)
        return
      }
      console.log(response)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userInfo', JSON.stringify(response.data.user))
      userContext.logIn(response.data.user)
      navigate('/cuenta')
    })
    errorContext.setShowErrorModal(false)
    errorContext.setErrorMessage('')
  }
  return (
    <div className={`${styles.body}`}>
      <ErrorModal show={errorContext?.showErrorModal} message={ errorContext?.errorMessage }/>
      <h1 className={styles.title}>Inicia sesion</h1>
      <form className={stylesForm.form} onSubmit={handleSubmit}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Escribe tu email'
            value={formValues.email}
            onChange={handleFormChange}
          />
          <label htmlFor="pass">CLAVE</label>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder='Escribe tu contraseña'
            value={formValues.pass}
            onChange={handleFormChange}
          />
          <button className={`${stylesForm.button}`} >INICIA SESION</button>
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

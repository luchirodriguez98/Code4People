import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { FaGithub } from 'react-icons/fa6'
import styles from './Login.module.css'
import stylesForm from '../../Styles/form.module.css'
import { useState } from 'react'
import { useUserContext } from '../../Hooks/useUserContext'
import { toast } from 'react-toastify'

function Login () {
  const userContext = useUserContext()

  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    email: '',
    pass: ''
  })

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/users/login`, options)
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        setErrors('Formulario con errores, vuelve a intentarlo')
        return
      }
      if (response.ok && response.status === 200) {
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('userInfo', JSON.stringify(data.data.user))
        userContext.logIn(data.data.user)
        navigate('/cuenta')
        reset({
          email: '',
          pass: ''
        })
      }
    } catch (error) {
      console.error(error)
      setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
    }
  }
  console.log(errors)
  return (
    <div className={`${styles.body}`}>
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
            toast.error(errors)
            setErrors(null)
          }}
            className={`${stylesForm.button}`}
          >
            INICIA SESION
          </button>
      </form>
      {/* <button onClick={() => toast(errors)}>Toast</button> */}
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

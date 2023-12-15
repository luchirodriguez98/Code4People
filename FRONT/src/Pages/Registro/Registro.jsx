import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Registro.module.css'
import stylesForm from '../../Styles/form.module.css'
import { useErrorContext } from '../../Hooks/useErrorContext'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'

function Registro () {
  const errorContext = useErrorContext()
  console.log(errorContext)
  const { formValues, reset, handleFormChange } = useForm({
    nombre: '',
    email: '',
    pass: '',
    role: ''
  })

  const navigate = useNavigate()
  const { nombre, email, pass, role } = formValues

  const saveNewUser = async (event) => {
    event.preventDefault()
    if (nombre === '' || email === '' || pass === '' || role === '') {
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage('Hay campos requeridos vacíos')
    }
    if (pass.length < 4) {
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage('La clave debe tener al menos 4 caracteres')
    }
    if (pass.length > 32) {
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage('La clave debe tener menos de 32 caracteres')
    }
    if (nombre.length < 3) {
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage('El nombre debe tener al menos de 3 caracteres')
    }
    if (!role) {
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage('Debe seleccionar un tipo de usuario')
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/users/registro`, options)
      const data = await response.json()
      console.log(data)

      if (!response.data === null) {
        navigate('/')
        reset({
          nombre: '',
          email: '',
          pass: '',
          role: ''
        })
      } if (response.error) {
        response.error.forEach(error => {
          errorContext?.setShowErrorModal(true)
          errorContext?.setErrorMessage(error)
        })
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
    errorContext.setShowErrorModal(false)
    errorContext.setErrorMessage('')
  }
  return (
    <div className={`${styles.body}`}>
      <ErrorModal message={ errorContext?.errorMessage }/>
      <h1 className={`${styles.title}`}>Registra tu empresa!</h1>
      <form action="" className={`${stylesForm.form}`} onSubmit={saveNewUser}>
      <label htmlFor="nombre">NOMBRE</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder='Escribe tu nombre'
          value={formValues.nombre}
          onChange={handleFormChange}
        />
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
          placeholder='Escribe tu pass'
          value={formValues.pass}
          onChange={handleFormChange}
        />
        <span className={stylesForm.containerButton}>
          <input
            checked={formValues.role === 'empresa'}
            onChange={handleFormChange}
            value='empresa'
            type="radio"
            id='empresa'
            name='role'
            className={stylesForm.inputSelect}
            />
          <label htmlFor="empresa" className={stylesForm.selectButton}>
            EMPRESA
          </label>
          <input
            checked={formValues.role === 'usuario'}
            onChange={handleFormChange}
            value='usuario'
            type="radio"
            id='usuario'
            name='role'
            className={stylesForm.inputSelect}
          />
          <label htmlFor="usuario" className={stylesForm.selectButton}>
            DESARROLLADOR
          </label>
        </span>
        <button className={`${stylesForm.button}`}>GUARDAR</button>
      </form>
  </div>
  )
}

export { Registro }

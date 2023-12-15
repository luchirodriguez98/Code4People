import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Contacto.module.css'
import stylesForm from '../../Styles/form.module.css'
import { useErrorContext } from '../../Hooks/useErrorContext'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'

function Contacto () {
  const errorContext = useErrorContext()
  console.log(errorContext.showErrorModal)
  const navigate = useNavigate()
  console.log(errorContext.errorMessage)
  const { formValues, reset, handleFormChange } = useForm({
    email: '',
    mensaje: ''
  })
  const { email, mensaje } = formValues

  const registerColaborator = async (event) => {
    event.preventDefault()

    if (email === '' || mensaje === '') {
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage('Hay campos requeridos vacíos')
      return
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
      const response = await fetch(`${baseUrl}/help`, options)
      const data = await response.json()
      console.log(data)
      reset({
        email: '',
        mensaje: ''
      })
      navigate('/')
    } catch (error) {
      console.error('Error:', error.message)
      errorContext?.setShowErrorModal(true)
      errorContext?.setErrorMessage(error)
    }
  }
  errorContext.setShowErrorModal(false)
  errorContext.setErrorMessage('')

  return (
        <div className={styles.body}>
        <ErrorModal show={errorContext?.showErrorModal} message={ errorContext?.errorMessage }/>
          <h1 className={styles.title}>Contacto</h1>
          <p className={styles.subTitle}>Si tienes dudas contactanos por aqui y las resolveremos a la brevedad.</p>
          <form className={`${stylesForm.form}`} onSubmit={registerColaborator}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Escribe tu email'
              value={formValues.email}
              onChange={handleFormChange}
            />
            <label htmlFor="mensaje">MENSAJE</label>
            <textarea
              type="text"
              id="mensaje"
              name="mensaje"
              value={formValues.mensaje}
              onChange={handleFormChange}
            />
            <button className={`${stylesForm.button}`}>ENVIAR</button>
          </form>
        </div>
  )
}

export { Contacto }

import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import styles from './MensajeNuevo.module.css'
import formStyles from '../../Styles/form.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'
import { useContext, useState } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'
import { useForm } from '../../Hooks/useForm'

function MensajeNuevo () {
  const errorContext = useContext(ErrorContext)
  const navigation = useLocation()

  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    destinatario: `USUARIO ${navigation.state}`,
    mensaje: ''
  })

  const navigate = useNavigate()

  const sendMail = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/mails/correoNuevo/${navigation.state}`, options)
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        setErrors(data.errors)
        return
      }
      if (response.ok && response.status === 200) {
        navigate('/mensajes/enviados')
        reset({
          mensaje: ''
        })
      }
    } catch (error) {
      console.error('Error:', error.message)
      setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
    }
  }
  errorContext.closeModal()

  return (
    <div className={styles.body}>
       <ErrorModal />
      <NavLink to="/mensajes">
        <div className={styles.backNav}>
          <ChevronLeftIcon className={styles.icon}/>
          <p>Mensajes</p>
        </div>
      </NavLink>
      <div className={styles.containerBackdrop}>
        <h1 className={styles.title}>Mensaje Nuevo</h1>
        <form className={styles.container} onSubmit={sendMail}>
          <label htmlFor="destinatario"></label>
          <input
            type="text"
            id='destinatario'
            name='destinatario'
            value={formValues.destinatario}
            onChange={handleFormChange}
          />
          <label htmlFor="mensaje"></label>
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
            value={formValues.cuerpo}
            onChange={handleFormChange}
            className={errors?.cuerpo ? formStyles.invalidInput : undefined}
          ></textarea>
          <button
          className={styles.button}
          onClick={() => {
            errorContext.openModal()
            setErrors(null)
          }}
          >
            <p>ENVIAR</p>
            <ChevronRightIcon className={styles.icon}/>
          </button>
        </form>
      </div>
    </div>
  )
}

export { MensajeNuevo }

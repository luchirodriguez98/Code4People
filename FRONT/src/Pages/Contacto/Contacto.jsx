import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Contacto.module.css'
import stylesForm from '../../Styles/form.module.css'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'
import { useContext, useState } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'

function Contacto () {
  const errorContext = useContext(ErrorContext)

  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const { formValues, reset, handleFormChange } = useForm({
    email: '',
    mensaje: ''
  })

  const registerColaborator = async (event) => {
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
      const response = await fetch(`${baseUrl}/help`, options)
      const data = await response.json()
      console.log(data)
      if (!response.ok && response.status === 400) {
        setErrors(data.error)
        return
      }
      navigate('/')
      reset({
        email: '',
        mensaje: ''
      })
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
  errorContext.closeModal()
  return (
        <div className={styles.body}>
          <ErrorModal />
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
              className={errors?.email ? stylesForm.invalidInput : undefined}
            />
            {errors?.email && <span>{errors.email}</span>}
            <label htmlFor="mensaje">MENSAJE</label>
            <textarea
              type="text"
              id="mensaje"
              name="mensaje"
              value={formValues.mensaje}
              onChange={handleFormChange}
              className={errors?.mensaje ? stylesForm.invalidInput : undefined}
            />
            {errors?.mensaje && <span>{errors.mensaje}</span>}
            <button
              onClick={() => {
                errorContext.openModal()
                setErrors(null)
              }}
              className={`${stylesForm.button}`}
            >
              ENVIAR
            </button>
          </form>
        </div>
  )
}

export { Contacto }

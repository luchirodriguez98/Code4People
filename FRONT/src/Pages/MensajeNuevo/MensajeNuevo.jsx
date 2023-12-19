import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import styles from './MensajeNuevo.module.css'
import formStyles from '../../Styles/form.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useForm } from '../../Hooks/useForm'
import { mensajeNuevo } from '../../services/mensajes/MensajeNuevo'

function MensajeNuevo () {
  const navigation = useLocation()

  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    destinatario: `USUARIO ${navigation.state}`,
    mensaje: ''
  })

  const navigate = useNavigate()

  // const sendMail = async (event) => {
  //   event.preventDefault()
  //   const token = localStorage.getItem('token')

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`
  //     },
  //     body: JSON.stringify(formValues)
  //   }

  //   const baseUrl = 'http://localhost:5000'

  //   try {
  //     const response = await fetch(`${baseUrl}/mails/correoNuevo/${navigation.state}`, options)
  //     const data = await response.json()
  //     console.log(data)
  //     if (!response.ok) {
  //       setErrors(data.error)
  //       toast.error('Debes escribir un mensaje, vuelve a intentarlo')
  //       return
  //     }
  //     if (response.ok && response.status === 200) {
  //       toast.success('Mensaje enviado')
  //       navigate('/mensajes/enviados')
  //       reset({
  //         mensaje: ''
  //       })
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message)
  //     setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
  //   }
  // }

  return (
    <div className={styles.body}>
      <NavLink to="/mensajes">
        <div className={styles.backNav}>
          <ChevronLeftIcon className={styles.icon}/>
          <p>Mensajes</p>
        </div>
      </NavLink>
      <div className={styles.containerBackdrop}>
        <h1 className={styles.title}>Mensaje Nuevo</h1>
        <form className={styles.container} onSubmit={(event) => mensajeNuevo({ event, formValues, navigation, navigate, reset, setErrors })}>
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
            placeholder='Escribe aqui tu mensaje'
            value={formValues.cuerpo}
            onChange={handleFormChange}
            className={errors?.cuerpo ? formStyles.invalidInput : undefined}
          ></textarea>
          <div className={styles.button} >
            <button onClick={() => { setErrors(null) }}>ENVIAR</button>
            <ChevronRightIcon className={styles.icon}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export { MensajeNuevo }

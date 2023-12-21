import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from '../../Hooks/useForm'
import { mensajeNuevo } from '../../services/mensajes/mensajeNuevo.js'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import styles from './MensajeNuevo.module.css'
import formStyles from '../../Styles/form.module.css'

function MensajeNuevo () {
  const [errors, setErrors] = useState(null)

  const navigation = useLocation()
  const navigate = useNavigate()

  const { formValues, reset, handleFormChange } = useForm({
    destinatario: `USUARIO ${navigation.state}`,
    mensaje: ''
  })

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

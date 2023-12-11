import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Contacto.module.css'
import stylesForm from '../../Styles/form.module.css'

function Contacto () {
  const navigate = useNavigate()

  const [formValues, setFormValues, handleFormChange] = useForm({
    email: '',
    mensaje: ''
  })
  const { email, mensaje } = formValues

  const registerColaborator = async (event) => {
    event.preventDefault()

    if (email === '' || mensaje === '') return

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
      navigate('/')
      console.log(data)
    } catch (error) {
      console.error('Error:', error.message)
    }
    setFormValues({
      email: '',
      mensaje: ''

    })
  }

  return (
        <div className={styles.body}>
          <h1 className={styles.title}>Contacto</h1>
          <p className={styles.subTitle}>Si tienes dudas contactanos por aqui y las resolveremos a la brevedad.</p>
          <form className={`${stylesForm.form}`} onSubmit={registerColaborator}>
            <label htmlFor="email">EMAIL</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder='Escribe tu email'
              value={formValues.email}
              onChange={handleFormChange}
            />
            <label htmlFor="mensaje">MENSAJE</label>
            <textarea
              required
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

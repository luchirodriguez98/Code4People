import { useNavigate } from 'react-router'
import { useForm } from '../../Hooks/useForm'
import styles from './PeticionNueva.module.css'
import stylesForm from '../../Styles/form.module.css'

function PeticionNueva () {
  const navigate = useNavigate()

  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    mensaje: ''
  })
  // eslint-disable-next-line camelcase
  const { detalle_importantes, mensaje } = formValues

  const aplicarProyecto = async (event) => {
    event.preventDefault()

    // eslint-disable-next-line camelcase
    if (detalle_importantes === '' || mensaje === '') return

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/peticion/nueva`, options)
      const data = await response.json()
      console.log(data)
      navigate('/peticion/realizadas')
      reset({
        detalle_importantes: '',
        mensaje: ''
      })
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <div className={styles.body}>
        <h1 className={styles.title}>Solicitar Proyecto</h1>
        <form className={`${stylesForm.form}`} onSubmit={aplicarProyecto}>
            <label htmlFor="titulo">TITULO</label>
            <input
              required
              type="text"
              id="titulo"
              name="titulo"
              placeholder='Escribe un titulo'
              value={formValues.titulo}
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
            <button className={`${stylesForm.button}`}>ENVIAR SOLICITUD A LA EMPRESA</button>
          </form>
    </div>
  )
}

export { PeticionNueva }

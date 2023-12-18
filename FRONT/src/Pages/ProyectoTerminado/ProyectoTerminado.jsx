import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './ProyectoTerminado.module.css'
import formStyles from '../../Styles/form.module.css'
import { useContext, useState } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'

function ProyectoTerminado () {
  const errorContext = useContext(ErrorContext)

  const [errors, setErrors] = useState(null)

  const formData = new FormData(event.target)

  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    url: ''
  })

  const navigate = useNavigate()

  const postProyect = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const baseUrl = 'http://localhost:5000'

    // POST
    const optionsPOST = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formValues)
    }

    try {
      const response = await fetch(`${baseUrl}/nuevoAcabado`, optionsPOST)
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        setErrors(data.errors)
        return
      }
      if (response.ok && response.status === 200) {
        reset({
          titulo: '',
          url: ''
        })
      }
    } catch (error) {
      console.error('Error:', error.message)
      setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
    }
    // PUT
    const optionsPUT = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: formData
    }

    try {
      const response = await fetch(`${baseUrl}/nuevoAcabado`, optionsPUT)
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        setErrors(data.errors)
      }
      console.log(data)
      navigate('/proyectos/realizados')
    } catch (error) {
      console.error('Error:', error.message)
      setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
    }
  }
  errorContext.closeModal()
  return (
        <div className={styles.body}>
          {/* <ErrorModal /> */}
          <h1 className={styles.title}>Publicar proyecto terminado</h1>
          <div className={styles.container}>
            <form className={formStyles.form} onSubmit={postProyect}>
              <label htmlFor="titulo">TITULO</label>
              <input
                type="text"
                name="titulo"
                id='titulo'
                placeholder='Escribe el titulo de tu proyecto'
                value={formValues.titulo}
                onChange={handleFormChange}
                className={errors?.titulo ? formStyles.invalidInput : undefined}
              />
              {errors?.titulo && <span>{errors.titulo}</span>}
              <label htmlFor="url">URL</label>
              <input
                type="text"
                name="url"
                id='url'
                placeholder='Escribe la url de tu pagina'
                value={formValues.url}
                onChange={handleFormChange}
                className={errors?.url ? formStyles.invalidInput : undefined}
              />
              {errors?.url && <span>{errors.url}</span>}
              <label htmlFor="imagen">URL</label>
              <input
                type="file"
                name="imagen"
                id='imagen'
                value={formValues.imagen}
                onChange={handleFormChange}
              />
              <button
                className={formStyles.button}
                onClick={() => {
                  errorContext.openModal()
                  setErrors(null)
                }}
              >
                PUBLICAR PROYECTO
              </button>
            </form>
          </div>
        </div>
  )
}

export { ProyectoTerminado }

import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import styles from './ProyectoTerminado.module.css'
import formStyles from '../../Styles/form.module.css'
import { useContext, useState } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'

function ProyectoTerminado () {
  const errorContext = useContext(ErrorContext)

  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    url: ''
  })

  const navigate = useNavigate()

  const postProyect = async (event) => {
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
      const response = await fetch(`${baseUrl}/nuevoAcabado`, options)
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        setErrors(data.errors)
        return
      }
      if (response.ok && response.status === 200) {
        navigate('/proyectos/realizados')
        reset({
          titulo: '',
          url: ''
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
          <NavLink to="/proyectos">
            <div className={styles.backNav}>
              <ChevronLeftIcon className={styles.icon}/>
              <p>Proyectos</p>
            </div>
          </NavLink>
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

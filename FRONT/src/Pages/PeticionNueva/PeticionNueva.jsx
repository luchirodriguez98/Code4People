import { useNavigate } from 'react-router'
import { useForm } from '../../Hooks/useForm'
import styles from './PeticionNueva.module.css'
import stylesForm from '../../Styles/form.module.css'
import { useContext, useState } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'
import { useLocation } from 'react-router-dom'

function PeticionNueva () {
  const errorContext = useContext(ErrorContext)

  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()
  const navigation = useLocation()

  console.log(navigation.state)
  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    descripcion: ''
  })

  const aplicarProyecto = async (event) => {
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
      const response = await fetch(`${baseUrl}/nuevaPeticion/${navigation.state.id_proyecto}`, options)
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        setErrors(data.errors)
        console.log('hola')
        return
      }
      if (response.ok && response.status === 200) {
        navigate('/peticiones/realizadas')
        reset({
          titulo: '',
          descripcion: ''
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
        <h1 className={styles.title}>Solicitar Proyecto</h1>
        <ErrorModal />
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
              className={errors?.titulo ? stylesForm.invalidInput : undefined}
            />
            {errors?.titulo && <span>{errors.titulo}</span>}
            <label htmlFor="descripcion">MENSAJE</label>
            <textarea
              required
              type="text"
              id="descripcion"
              name="descripcion"
              value={formValues.descripcion}
              onChange={handleFormChange}
              className={errors?.mensaje ? stylesForm.invalidInput : undefined}
            />
            {errors?.descripcion && <span>{errors.descripcion}</span>}
            <button
              className={`${stylesForm.button}`}
              onClick={() => {
                errorContext.openModal()
                setErrors(null)
              }}
            >
              ENVIAR SOLICITUD A LA EMPRESA
            </button>
          </form>
    </div>
  )
}

export { PeticionNueva }

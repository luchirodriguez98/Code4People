import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './ProyectoNuevo.module.css'
import formStyles from '../../Styles/form.module.css'
import { useState } from 'react'
import { proyectoNuevo } from '../../services/proyectos/proyectoNuevo.js'

function ProyectoNuevo () {
  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    descripcion: ''
  })

  const navigate = useNavigate()

  // const postProyect = async (event) => {
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
  //     const response = await fetch(`${baseUrl}/nuevoProyecto`, options)
  //     const data = await response.json()
  //     console.log(data)
  //     if (!response.ok) {
  //       setErrors(data.error)
  //       toast.error('Error en el formulario, vuelve a intentarlo')
  //     }
  //     if (response.ok) {
  //       toast.success('Proyecto publicado')
  //       navigate('/peticion/proyecto')
  //       reset({
  //         titulo: '',
  //         descripcion: ''
  //       })
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message)
  //     setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
  //     toast.error(errors)
  //   }
  // }
  return (
        <div className={styles.body}>
          <h1 className={styles.title}>Publicar nuevo proyecto</h1>
          <div className={styles.container}>
            <form className={formStyles.form} onSubmit={(event) => proyectoNuevo({ event, formValues, setErrors, navigate, reset })}>
              <label htmlFor="titulo">TITULO</label>
              <input
                type="text"
                name="titulo"
                id='titulo'
                placeholder='Escribe un titulo para tu proyecto'
                value={formValues.titulo}
                onChange={handleFormChange}
                className={errors?.titulo ? formStyles.invalidInput : undefined}
              />
              {errors?.titulo && <span>{errors.titulo}</span>}
              <label htmlFor="descripcion">DESCRIPCION</label>
              <textarea
                type="text"
                name="descripcion"
                id='descripcion'
                placeholder='Escribe la descripcion de lo que necesita tu pagina'
                value={formValues.descripcion}
                onChange={handleFormChange}
                className={errors?.descripcion ? formStyles.invalidInput : undefined}
              />
              {errors?.descripcion && <span>{errors.descripcion}</span>}
              <button
                className={formStyles.button}
                onClick={() => { setErrors(null) }} >PUBLICAR NUEVO PROYECTO</button>
            </form>
          </div>
        </div>
  )
}

export { ProyectoNuevo }

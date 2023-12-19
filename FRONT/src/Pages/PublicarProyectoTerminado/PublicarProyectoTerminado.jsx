import { useLocation, useNavigate } from 'react-router-dom'
import styles from './ProyectoTerminado.module.css'
import formStyles from '../../Styles/form.module.css'
import { useState } from 'react'
import { publicarProyectoTerminado } from '../../services/proyectos/publicarProyectoTerminado'

function PublicarProyectoTerminado () {
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()
  const navigation = useLocation()

  // const postProyect = async (event) => {
  //   const formData = new FormData(event.target)
  //   event.preventDefault()
  //   const token = localStorage.getItem('token')
  //   const baseUrl = 'http://localhost:5000'

  //   // POST
  //   const optionsPOST = {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },
  //     body: formData
  //   }

  //   try {
  //     const response = await fetch(`${baseUrl}/nuevoAcabado/${proyectoId}`, optionsPOST)
  //     const data = await response.json()
  //     console.log(data)
  //     if (!response.ok) {
  //       setErrors(data.errors)
  //       toast.error('Hay errores en el formulario, vuelve a intentarlo')
  //       return
  //     }
  //     if (response.ok && response.status === 200) {
  //       toast.success('Proyecto publicado correctamente')
  //       navigate('/')
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message)
  //     setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
  //     toast.error(errors)
  //   }
  // }
  return (
        <div className={styles.body}>
          <h1 className={styles.title}>Publicar proyecto terminado</h1>
          <div className={styles.container}>
            <form className={formStyles.form} onSubmit={(event) => publicarProyectoTerminado({ event, setErrors, navigate, proyectoId: navigation.state })}>
              <label htmlFor="url">URL DE TU PAGINA</label>
              <input
                type="text"
                name="url"
                id='url'
                placeholder='Escribe la url de tu pagina'
                className={errors?.url ? formStyles.invalidInput : undefined}
              />
              {errors?.url && <span>{errors.url}</span>}
              <label htmlFor="imagen">ENVIANOS UNA IMAGEN DE TU PAGINA!</label>
              <input
                type="file"
                name="imagen"
                id='imagen'
                className={errors?.image ? formStyles.invalidInput : styles.inputImage}
              />
              <button
                className={formStyles.button}
                onClick={() => {
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

export { PublicarProyectoTerminado }

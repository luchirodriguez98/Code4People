import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './ProyectoNuevo.module.css'
import formStyles from '../../Styles/form.module.css'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function ProyectoNuevo () {
  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    descripcion: ''
  })

  const navigate = useNavigate()
  const { titulo, descripcion } = formValues

  const postProyect = async (event) => {
    event.preventDefault()
    if (titulo === '' || descripcion === '') return

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/proyectoNuevo`, options)
      const data = await response.json()
      console.log(data)
      navigate('disponibles')
    } catch (error) {
      console.error('Error:', error.message)
    }
    reset({
      titulo: '',
      descripcion: ''
    })
  }
  return (
        <div className={StyleSheet.body}>
          <NavLink to="/proyectos">
            <div className={styles.backNav}>
              <ChevronLeftIcon className={styles.icon}/>
              <p>Proyectos</p>
            </div>
          </NavLink>
          <span>
            <h1>Publicar nuevo proyecto</h1>
            <form className={formStyles.form} onSubmit={postProyect}>
              <label htmlFor="titulo">TITULO</label>
              <input
                type="text"
                name="titulo"
                id='titulo'
                placeholder='Escribe un titulo para tu proyecto'
                value={formValues.titulo}
                onChange={handleFormChange} className={formStyles.input}
              />
              <label htmlFor="url">DESCRIPCION</label>
              <input
                type="text"
                name="descripcion"
                id='descripcion'
                placeholder='Escribe la descripcion de lo que necesita tu pagina'
                value={formValues.titulo}
                onChange={handleFormChange} className={formStyles.input}
              />
              <div className={formStyles.button}>PUBLICAR NUEVO PROYECTO</div>
            </form>
          </span>
        </div>
  )
}

export { ProyectoNuevo }

import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import formStyles from '../../Styles/form.module.css'

function ProyectoTerminado () {
  const [formValues, setFormValues, handleFormChange] = useForm({
    titulo: '',
    url: ''
  })

  const navigate = useNavigate()
  const { titulo, url } = formValues

  const postProyect = async (event) => {
    event.preventDefault()
    if (titulo === '' || url === '') return

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
      navigate('/realizados')
    } catch (error) {
      console.error('Error:', error.message)
    }
    setFormValues({
      titulo: '',
      url: ''
    })
  }
  return (
        <div>
          <span>
            <ChevronLeftIcon />
            <p>Proyectos</p>
          </span>
          <span>
            <h1>Publicar proyecto terminado</h1>
            <form className={formStyles.form} onSubmit={postProyect}>
              <label htmlFor="titulo">TITULO</label>
              <input
                type="text"
                name="titulo"
                id='titulo'
                placeholder='Escribe el titulo de tu proyecto'
                value={formValues.titulo}
                onChange={handleFormChange} className={formStyles.input}
              />
              <label htmlFor="url">URL</label>
              <input
                type="text"
                name="url"
                id='url'
                placeholder='Escribe la url de tu pagina'
                value={formValues.titulo}
                onChange={handleFormChange} className={formStyles.input}
              />
              <div className={formStyles.button}>PUBLICAR PROYECTO</div>
            </form>
          </span>
        </div>
  )
}

export { ProyectoTerminado }

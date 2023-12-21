import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from '../../Hooks/useForm'
import { proyectoNuevo } from '../../services/proyectos/proyectoNuevo.js'
import styles from './ProyectoNuevo.module.css'
import formStyles from '../../Styles/form.module.css'

function ProyectoNuevo () {
  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    descripcion: ''
  })

  const navigate = useNavigate()

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

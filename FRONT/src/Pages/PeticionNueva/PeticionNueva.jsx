import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { nuevaPeticion } from '../../services/peticiones/nuevaPeticion.js'
import styles from './PeticionNueva.module.css'
import stylesForm from '../../Styles/form.module.css'

function PeticionNueva () {
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()
  const navigation = useLocation()

  const { formValues, reset, handleFormChange } = useForm({
    titulo: '',
    descripcion: ''
  })

  return (
    <div className={styles.body}>
        <h1 className={styles.title}>Solicitar Proyecto</h1>
        <form className={`${stylesForm.form}`} onSubmit={(event) => nuevaPeticion({ event, proyectoId: navigation.state.id_proyecto, formValues, setErrors, navigate, reset })}>
            <label htmlFor="titulo">TITULO</label>
            <input
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

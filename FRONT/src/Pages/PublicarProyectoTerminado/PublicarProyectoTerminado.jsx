import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { publicarProyectoTerminado } from '../../services/proyectos/publicarProyectoTerminado.js'
import styles from './PublicarProyectoTerminado.module.css'
import formStyles from '../../Styles/form.module.css'

function PublicarProyectoTerminado () {
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()
  const navigation = useLocation()

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

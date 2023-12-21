import { useLocation } from 'react-router'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { aceptarPeticion } from '../../services/peticiones/aceptarPeticion.js'
import { rechazarPeticion } from '../../services/peticiones/rechazarPeticion.js'
import styles from './Peticion.module.css'

function Peticion () {
  const [errors, setErrors] = useState(null)

  const navigation = useLocation()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticion del usuario &quot;{navigation.state.autor}&quot;</h1>
      <div className={styles.container}>
        <p>TITULO</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.peticion_titulo}</p>
        </div>
        <p>DESCRIPCION</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.peticion_descripcion}</p>
        </div>
        <div className={styles.buttonContainer}>
          <NavLink to="/peticion/proyecto">
            <button className={styles.buttonDecline} onClick={() => rechazarPeticion({ idPeticion: navigation.state.id_peticion, setErrors, errors, navigate, token })}
            >
              RECHAZAR
            </button>
          </NavLink>
          <NavLink to="/peticion/proyecto">
            <button className={styles.buttonAccept} onClick={() => aceptarPeticion({ idPeticion: navigation.state.id_peticion, setErrors, errors, navigate, token })}>
              ACEPTAR
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export { Peticion }

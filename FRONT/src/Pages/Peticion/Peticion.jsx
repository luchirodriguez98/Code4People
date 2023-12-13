import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import styles from './Peticion.module.css'

function Peticion () {
  const navigation = useLocation()

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticion de usuario "{navigation.state.id_usuario}"</h1>
      <div className={styles.container}>
        <p>TITULO</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.titulo}</p>
        </div>
        <p>DESCRIPCION</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.descripcion}</p>
        </div>
        <div className={styles.buttonContainer}>
          <NavLink to="/peticion/proyecto">
            <div className={styles.buttonDecline}>RECHAZAR</div>
          </NavLink>
          <NavLink to="/peticion/proyecto">
            <div className={styles.buttonAccept}>ACEPTAR</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export { Peticion }

import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './DetalleProyecto.module.css'

function DetalleProyecto () {
  const navigation = useLocation()

  return (
    <div className={styles.body}>
      <NavLink to="/proyectos/disponibles">
        <div className={styles.backNav}>
          <ChevronLeftIcon className={styles.icon}/>
          <p>Proyectos para realizar</p>
        </div>
      </NavLink>
      <h1 className={styles.title}>Detalle del proyecto</h1>
      <div className={styles.container}>
        <h2 className={styles.proyectTitle}>{navigation.state.titulo}</h2>
        <div className={styles.textContainer}>
          <p>{navigation.state.descripcion}</p>
        </div>
        <NavLink to="/peticion/nueva" state={navigation}>
          <div className={styles.button}>APLICAR</div>
        </NavLink>
      </div>
    </div>
  )
}

export { DetalleProyecto }

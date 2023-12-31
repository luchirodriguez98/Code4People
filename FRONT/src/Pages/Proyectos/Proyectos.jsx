import { NavLink } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import styles from './Proyectos.module.css'

function Proyectos () {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Proyectos</h1>
      <ul className={styles.list}>
        <NavLink to="/proyectos/realizados" className={styles.item}>
          <li>Proyectos ya realizados</li>
          <ChevronRightIcon className={styles.arrow}/>
        </NavLink>
        <NavLink to="/proyectos/disponibles" className={styles.item}>
          <li>Proyectos para realizar</li>
          <ChevronRightIcon className={styles.arrow}/>
        </NavLink>
      </ul>
    </div>
  )
}

export { Proyectos }

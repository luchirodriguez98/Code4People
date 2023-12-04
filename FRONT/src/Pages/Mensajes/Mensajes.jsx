import { NavLink } from 'react-router-dom'
import styles from './Mensajes.module.css'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function Mensajes () {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Mis mensajes</h1>
      <ul className={styles.list}>
        <NavLink to="/mensajes/recibidos" className={styles.item}>
          <li>Mensajes recibidos</li>
          <ChevronRightIcon className={styles.arrow}/>
        </NavLink>
        <NavLink to="/mensajes/enviados" className={styles.item}>
          <li>Mensajes enviados</li>
          <ChevronRightIcon className={styles.arrow}/>
        </NavLink>
      </ul>
    </div>
  )
}

export { Mensajes }

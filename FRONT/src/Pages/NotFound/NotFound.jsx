import { NavLink } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound () {
  return (
    <div className={styles.body}>
        <h1>Pagina no encontrada</h1>
        <span className={styles.redirectText}>
          <p>HAZ</p>
          <NavLink to='/' className={styles.link}>
            <p>CLICK</p>
          </NavLink>
          <p>PARA IR A LA PAGINA PRINCIPAL</p>
        </span>
    </div>
  )
}

export { NotFound }

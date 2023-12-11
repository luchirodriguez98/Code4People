import { NavLink } from 'react-router-dom'
import styles from './ListaProyecto.module.css'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function ListaProyectos ({ toMap }) {
  return (
    <div className={styles.proyectoList}>
      {toMap.map(item => {
        return (
          <span key ={item.id_proyecto} className={styles.proyectoItem}>
            <div className={styles.text}>
              <p>{item.titulo}</p>
              <p>{item.url}</p>
            </div>
            <NavLink to={item.url ? item.url : `/proyectos/disponibles/${item.id_proyecto}`} state={item}>
              <ChevronRightIcon className={styles.icon}/>
            </NavLink>
          </span>
        )
      })}
      </div>
  )
}

export { ListaProyectos }

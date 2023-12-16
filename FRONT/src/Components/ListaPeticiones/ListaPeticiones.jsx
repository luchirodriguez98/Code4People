import { NavLink } from 'react-router-dom'
import styles from './ListaPeticiones.module.css'
import { XMarkIcon, CheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function ListaPeticiones ({ toMap, route }) {
  const iconToRender = (item) => {
    if (item.estado === 'aceptado') {
      return <CheckIcon className={styles.greenIcon}/>
    } else if (item.estado === 'denegado') {
      return <XMarkIcon className={styles.redIcon}/>
    } else if (item.estado === 'nada') {
      return <></>
    } else {
      return <ChevronRightIcon className={styles.blackIcon}/>
    }
  }
  return (
    <div className={styles.list}>
      {toMap.map(item => {
        return (
          <span key={item.id_usuario ? item.id_usuario : item.id_peticion} className={styles.item}>
            <p className={styles.text}>
              {item.usuario ? item.usuario : item.titulo}
            </p>
            <NavLink to={route + item.id_usuario} state={item}>
              {iconToRender(item)}
            </NavLink>
          </span>
        )
      })}
      </div>
  )
}

export { ListaPeticiones }

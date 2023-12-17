import { NavLink } from 'react-router-dom'
import styles from './ListaPeticiones.module.css'
import { XMarkIcon, CheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function ListaPeticionesEmpresa ({ toMap, route }) {
  const iconToRender = ({ item, route }) => {
    if (item?.estado === true) {
      return <CheckIcon className={styles.greenIcon}/>
    } else if (item?.estado === false) {
      return <XMarkIcon className={styles.redIcon}/>
    }
  }
  return (
    <div className={styles.list}>
      {toMap.map(item => {
        console.log(item)
        return (
          <span key={item.id_usuario ? item.id_usuario : item.id_peticion} className={styles.item}>
            <p className={styles.text}>
              {item.usuario ? item.usuario : item.titulo}
            </p>
            {item.estado === null
              ? <NavLink to={route + item.id_usuario} state={item}>
              <ChevronRightIcon className={styles.blackIcon}/>
            </NavLink>
              : iconToRender(item) }
          </span>
        )
      })}
      </div>
  )
}

export { ListaPeticionesEmpresa }

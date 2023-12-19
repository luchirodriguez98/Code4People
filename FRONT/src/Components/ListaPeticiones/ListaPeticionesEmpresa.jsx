import { NavLink } from 'react-router-dom'
import styles from './ListaPeticiones.module.css'
import { XMarkIcon, CheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

function ListaPeticionesEmpresa ({ toMap, route }) {
  const iconToRender = ({ item, route }) => {
    console.log(item)
    if (
      // item?.estado === true ||
      item?.peticion_estado === 1) {
      return (
        <>
          <NavLink to='/mensajes/nuevo' state={item.autor}>
            <EnvelopeIcon className={styles.blackIcon}/>
          </NavLink>
          <CheckIcon className={styles.greenIcon}/>
        </>
      )
    } else if (
      // item?.estado === false ||
      item?.peticion_estado === 0) {
      return <XMarkIcon className={styles.redIcon}/>
    }
  }
  return (
    <div className={styles.list}>
      {toMap.map(item => {
        console.log(item)
        return (
          <span key={item.autor} className={styles.item}>
            <p className={styles.text}>
              USUARIO {item.autor}
            </p>
            {item.peticion_estado === null
              ? <NavLink to={route + item.id_usuario} state={item}>
              <ChevronRightIcon className={styles.blackIcon}/>
            </NavLink>
              : iconToRender({ item }) }
          </span>
        )
      })}
      </div>
  )
}

export { ListaPeticionesEmpresa }

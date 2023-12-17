import { NavLink } from 'react-router-dom'
import styles from './ListaPeticiones.module.css'
import { XMarkIcon, CheckIcon, ChevronRightIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

function ListaPeticionesEmpresa ({ toMap, route }) {
  const iconToRender = ({ item, route }) => {
    if (item?.estado === true) {
      return (
        <>
          <NavLink to='/mensajes/nuevo' state={item.autor}>
            <EnvelopeIcon className={styles.blackIcon}/>
          </NavLink>
          <CheckIcon className={styles.greenIcon}/>
        </>
      )
    } else if (item?.estado === false) {
      return <XMarkIcon className={styles.redIcon}/>
    }
  }
  return (
    <div className={styles.list}>
      {toMap.map(item => {
        console.log(item)
        return (
          <span key={item.autor ? item.autor : item.id_peticion} className={styles.item}>
            <p className={styles.text}>
              USUARIO {item.autor ? item.autor : item.titulo}
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

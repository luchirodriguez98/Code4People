import { NavLink } from 'react-router-dom'
import styles from './ListaPeticiones.module.css'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

function ListaPeticiones ({ toMap }) {
  const iconToRender = ({ item }) => {
    if (item.estado === 1) {
      return (
        <>
        <NavLink to='/mensajes/nuevo' state={item.autor_proyecto}>
            <EnvelopeIcon className={styles.blackIcon}/>
        </NavLink>
        <CheckIcon className={styles.greenIcon}/>
        </>
      )
    } else if (item.estado === 0) {
      return <XMarkIcon className={styles.redIcon}/>
    } else if (item.estado === null) {
      return <></>
    }
  }
  return (
    <div className={styles.list}>
      {toMap.map(item => {
        return (
          <span key={item.id_peticion} className={styles.item}>
            <p className={styles.text}>
              PETICION NUMERO #{item.id_peticion}
            </p>
            {iconToRender({ item })}
          </span>
        )
      })}
      </div>
  )
}

export { ListaPeticiones }

import { useState } from 'react'
import { eliminarProyectos } from '../../services/admin/eliminarProyectos'
import { eliminarUsuarios } from '../../services/admin/eliminarUsuarios'
import { XMarkIcon } from '@heroicons/react/24/solid'
import styles from './ListaAdmin.module.css'

function ListaAdmin ({ toMap }) {
  const [errors, setErrors] = useState(null)

  const token = localStorage.getItem('token')

  const toDelete = (item) => { item.id_usuario ? eliminarUsuarios({ token, setErrors, errors, idToDelete: item.id_usuario }) : eliminarProyectos({ token, setErrors, idToDelete: item.id_proyecto }) }
  return (
    <div className={styles.adminList}>
      {toMap.map(item => {
        return (
          <span key={item.id_usuario ? item.id_usuario : item.id_proyecto} className={styles.item}>
            <div className={styles.text}>
              <p>{item.nombre ? item.nombre : item.titulo}</p>
              <p>{item.email ? item.email : item.url}</p>
            </div>
            <div onClick={() => toDelete(item)}>
              <XMarkIcon className={styles.icon}/>
            </div>
          </span>
        )
      })}
      </div>
  )
}

export { ListaAdmin }

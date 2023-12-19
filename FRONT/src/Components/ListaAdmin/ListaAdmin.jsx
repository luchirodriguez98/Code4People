import styles from './ListaAdmin.module.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

function ListaAdmin ({ toMap, toDelete }) {
  return (
    <div className={styles.adminList}>
      {toMap.map(item => {
        return (
          <span key={item.id_usuario ? item.id_usuario : item.id_proyecto} className={styles.item}>
            <div className={styles.text}>
              <p>{item.nombre ? item.nombre : item.titulo}</p>
              <p>{item.email ? item.email : item.url}</p>
            </div>
            <div onClick={() => {
              toDelete(item.id_usuario ? item.id_usuario : item.id_proyecto)
            }}>
              <XMarkIcon className={styles.icon}/>
            </div>
          </span>
        )
      })}
      </div>
  )
}

export { ListaAdmin }

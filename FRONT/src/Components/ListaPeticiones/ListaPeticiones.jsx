import styles from './ListaPeticiones.module.css'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid'

function ListaPeticiones ({ toMap }) {
  const iconToRender = (item) => {
    if (item.estado === true) {
      return <CheckIcon className={styles.greenIcon}/>
    } else if (item.estado === false) {
      return <XMarkIcon className={styles.redIcon}/>
    } else if (item.estado === null) {
      return <></>
    }
  }
  return (
    <div className={styles.list}>
      {toMap.map(item => {
        return (
          <span key={item.id_usuario} className={styles.item}>
            <p className={styles.text}>
              {item.usuario}
            </p>
            {iconToRender(item)}
          </span>
        )
      })}
      </div>
  )
}

export { ListaPeticiones }

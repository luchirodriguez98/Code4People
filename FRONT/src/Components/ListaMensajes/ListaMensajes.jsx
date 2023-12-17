import { NavLink } from 'react-router-dom'
import styles from './ListaMensajes.module.css'

function ListaMensajes ({ toMap, icon }) {
  return (
    <div className={styles.messageList}>
      {toMap.map(item => {
        return (
          <span key ={item.usuario} className={styles.messageItem}>
            <div className={styles.text}>
              <p>USUARIO {item.usuario ? item.usuario : item.destinatario}</p>
              <p>{item.mensaje}</p>
            </div>
            <NavLink to="/mensajes/nuevo" state={item.usuario}>
              {icon}
            </NavLink>
          </span>
        )
      })}
      </div>
  )
}

export { ListaMensajes }

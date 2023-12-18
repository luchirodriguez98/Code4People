import { NavLink } from 'react-router-dom'
import styles from './ListaMensajes.module.css'

function ListaMensajes ({ toMap, icon }) {
  return (
    <div className={styles.messageList}>
      {toMap.map(item => {
        return (
          <span key ={item.id_mail} className={styles.messageItem}>
            <div className={styles.text}>
              <p>USUARIO {item.origen ? item.origen : item.destinatario}</p>
              <p>{item.mensaje}</p>
            </div>
            {icon &&
              <NavLink to="/mensajes/nuevo" state={item.origen}>
                {icon}
              </NavLink>
            }
          </span>
        )
      })}
      </div>
  )
}

export { ListaMensajes }

import { NavLink } from 'react-router-dom'
import styles from './ListaMensajes.module.css'
import { useState } from 'react'

function ListaMensajes ({ toMap, icon }) {
  const [mostrarMensajeCompleto, setMostrarMensajeCompleto] = useState(false)

  const mensajeCompleto = () => {
    setMostrarMensajeCompleto((lastStatus) => !lastStatus)
  }

  return (
    <div className={styles.messageList}>
      {toMap.map(item => {
        return (
          <span key ={item.id_mail} className={styles.messageItem}>
            <div className={styles.text}>
              <p>USUARIO {item.origen ? item.origen : item.destinatario}</p>
              <p onClick={mensajeCompleto} className={mostrarMensajeCompleto ? styles.mensajeLargo : styles.mensajeCorto}>{item.mensaje}</p>
              {/* <p className={mostrarMensajeCompleto && styles.completeMessege}>{item.mensaje}</p> */}
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

import { NavLink } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import styles from './MensajesEnviados.module.css'
import { ListaMensajes } from '../../Components/ListaMensajes/ListaMensajes'

const mensajesEnviados = [
  { usuario: 123, mensaje: 'Hola para cuando estaria el login?' },
  { usuario: 12, mensaje: 'Hola cuantas secciones queres?' },
  { usuario: 3, mensaje: 'Hola gracias por seleccionarme. Tenias alguna idea?' }
]

function MensajesEnviados () {
  return (
        <div className={styles.body}>
          <NavLink to="/mensajes">
            <div className={styles.backNav}>
              <ChevronLeftIcon className={styles.icon}/>
              <p>Mensajes</p>
            </div>
          </NavLink>
          <h1 className={styles.title}>Mensajes enviados</h1>
          <ListaMensajes toMap={mensajesEnviados}/>
        </div>
  )
}

export { MensajesEnviados }

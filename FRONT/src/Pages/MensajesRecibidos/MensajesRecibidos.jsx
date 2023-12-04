import { NavLink } from 'react-router-dom'
import { ChevronLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/solid'
import styles from './MensajesRecibidos.module.css'
import { ListaMensajes } from '../../Components/ListaMensajes/ListaMensajes'

const mensajesRecibidos = [
  { usuario: 123, mensaje: 'Hola recibi tu solicitud' },
  { usuario: 12, mensaje: 'Hola me gustaria que el CCS tenga estos colores' },
  { usuario: 3, mensaje: 'Hola gracias por seleccionarme. Tenias alguna idea?' }
]

const icon = <ArrowUturnRightIcon className={styles.icon}/>

function MensajesRecibidos () {
  return (
        <div className={styles.body}>
          <NavLink to="/mensajes">
            <div className={styles.backNav}>
              <ChevronLeftIcon className={styles.icon}/>
              <p>Mensajes</p>
            </div>
          </NavLink>
          <h1 className={styles.title}>Mensajes recibidos</h1>
          <ListaMensajes toMap={mensajesRecibidos} icon={icon}/>
        </div>
  )
}

export { MensajesRecibidos }

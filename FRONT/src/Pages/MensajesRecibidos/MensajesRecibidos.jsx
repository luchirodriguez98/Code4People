import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ListaMensajes } from '../../Components/ListaMensajes/ListaMensajes'
import { mensajesRecibidos } from '../../services/mensajes/mensajesRecibidos.js'
import { ChevronLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/solid'
import styles from './MensajesRecibidos.module.css'

const icon = <ArrowUturnRightIcon className={styles.icon}/>

function MensajesRecibidos () {
  const [mensajes, setMensajes] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    mensajesRecibidos({ setMensajes, setErrors })
  }, [])

  return (
        <div className={styles.body}>
          {/* <NavLink to="/mensajes">
            <div className={styles.backNav}>
              <ChevronLeftIcon className={styles.icon}/>
              <p>Mensajes</p>
            </div>
          </NavLink> */}
          <h1 className={styles.title}>Mensajes recibidos</h1>
          {errors
            ? <span className='errorSpan'>{errors}</span>
            : (mensajes.length === 0
                ? <p className='errorSpan'>No tienes mensajes</p>
                : <ListaMensajes toMap={mensajes} icon={icon}/>
              )
          }
        </div>
  )
}

export { MensajesRecibidos }

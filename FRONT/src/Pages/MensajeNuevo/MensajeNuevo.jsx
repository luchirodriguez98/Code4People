import { NavLink, useLocation } from 'react-router-dom'
import styles from './MensajeNuevo.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function MensajeNuevo () {
  const navigation = useLocation()

  return (
    <div className={styles.body}>
      <NavLink to="/mensajes">
        <div className={styles.backNav}>
          <ChevronLeftIcon className={styles.icon}/>
          <p>Mensajes</p>
        </div>
      </NavLink>
      <div className={styles.containerBackdrop}>
        <h1 className={styles.title}>Mensaje Nuevo</h1>
        <div className={styles.container}>
          <input type="text" value={`USUARIO ${navigation.state}`}/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <NavLink to="/mensajes/enviados">
            <p>ENVIAR</p>
            <ChevronRightIcon className={styles.icon}/>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export { MensajeNuevo }

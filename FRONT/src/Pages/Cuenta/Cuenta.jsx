import { NavLink } from 'react-router-dom'
import { ChatBubbleLeftRightIcon, BellIcon, ClipboardIcon, Cog8ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import styles from './Cuenta.module.css'
import { useContext } from 'react'
import { MyContext } from '../../Context/Context'

function Cuenta () {
  const context = useContext(MyContext)

  const accountIsColab = context.user && context.user.tipo_usuario === 0 ? '/peticionesRealizadas' : '/peticionesProyecto'

  return (
    <div className={styles.body}>
        <h1 className={styles.title}>Mi Cuenta</h1>
        <p className={styles.subTitle}>Aquí tienes acceso a todo lo que necesitas para administrar tu cuenta y aprovechar al máximo nuestra plataforma.</p>
        <span className={styles.grid}>
          <NavLink to="/mensajes">
            <div className={styles.button}>
              <ChatBubbleLeftRightIcon />
            </div>
          </NavLink>
          <NavLink to="/notificaciones">
            <div className={styles.button}>
              <BellIcon />
            </div>
          </NavLink>
          <NavLink to={accountIsColab}>
            <div className={styles.button}>
              <ClipboardIcon />
            </div>
          </NavLink>
          <NavLink to="/configuracion">
            <div className={styles.button}>
              <Cog8ToothIcon />
            </div>
          </NavLink>
          <NavLink to="/" className={styles.buttonCenter}>
            <div className={styles.button} onClick={() => context.logOut()}>
              <ArrowRightOnRectangleIcon />
            </div>
          </NavLink>
        </span>
    </div>
  )
}

export { Cuenta }

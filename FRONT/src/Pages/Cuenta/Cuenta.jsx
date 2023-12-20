import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../Hooks/useUserContext'
import { ChatBubbleLeftRightIcon, ClipboardIcon, ArrowRightOnRectangleIcon, UserIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import styles from './Cuenta.module.css'

function Cuenta () {
  const context = useUserContext()

  return (
    <div className={styles.body}>
        <h1 className={styles.title}>{`Hola ${context.usuario?.nombre}!`}</h1>
        <p className={styles.subTitle}>Aquí tienes acceso a todo lo que necesitas para administrar tu cuenta y aprovechar al máximo nuestra plataforma.</p>
        <span className={context.usuario?.role === 'admin' ? styles.gridAdmin : styles.grid}>
          <NavLink to="/mensajes">
            <div className={styles.button}>
              <ChatBubbleLeftRightIcon />
            </div>
            <p className={styles.textButton}>MENSAJES</p>
          </NavLink>
          {(context.usuario.role === 'usuario') &&
          <NavLink to='/peticion/realizadas'>
            <div className={styles.button}>
              <ClipboardIcon />
            </div>
            <p className={styles.textButton}>PETICIONES</p>
          </NavLink>
          }
          {(context.usuario.role === 'empresa') &&
          <NavLink to='/peticion/proyecto'>
            <div className={styles.button}>
              <BriefcaseIcon />
            </div>
            <p className={styles.textButton}>PROYECTOS</p>
          </NavLink>
          }
          {context.usuario?.role === 'admin' &&
            <>
              <NavLink to='/admin/proyectos'>
                <div className={styles.button}>
                  <BriefcaseIcon />
                </div>
                <p className={styles.textButton}>PROYECTOS</p>
              </NavLink>
              <NavLink to="/admin/usuarios">
                <div className={styles.button}>
                  <UserIcon />
                </div>
                <p className={styles.textButton}>USUARIOS</p>
              </NavLink>
            </>
          }
          <NavLink to="/">
            <div className={styles.button} onClick={() => context.logOut()}>
              <ArrowRightOnRectangleIcon />
            </div>
            <p className={styles.textButton}>CERRAR SESION</p>
          </NavLink>
        </span>
    </div>
  )
}

export { Cuenta }

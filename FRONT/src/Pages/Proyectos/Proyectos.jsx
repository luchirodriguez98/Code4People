import { NavLink } from 'react-router-dom'
import styles from './Proyectos.module.css'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useUserContext } from '../../Hooks/useUserContext'

function Proyectos () {
  const context = useUserContext()

  if (!context.usuario) {
    return (
      <div className={styles.body}>
        <h1 className={styles.title}>Proyectos</h1>
        <ul className={styles.list}>
          <NavLink to="/proyectos/realizados" className={styles.item}>
            <li>Proyectos ya realizados</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
        </ul>
      </div>
    )
  } else if (context.usuario.role === 'usuario') {
    return (
      <div className={styles.body}>
        <h1 className={styles.title}>Proyectos</h1>
        <ul className={styles.list}>
          <NavLink to="/proyectos/realizados" className={styles.item}>
            <li>Proyectos ya realizados</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
          <NavLink to="/proyectos/disponibles" className={styles.item}>
            <li>Proyectos para realizar</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
          <NavLink to="/proyectos/publicarTerminado" className={styles.item}>
            <li>Publicar proyecto terminado</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
        </ul>
      </div>
    )
  } else if (context.usuario.role === 'empresa') {
    return (
      <div className={styles.body}>
        <h1 className={styles.title}>Proyectos</h1>
        <ul className={styles.list}>
          <NavLink to="/proyectos/realizados" className={styles.item}>
            <li>Proyectos ya realizados</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
          <NavLink to="/proyectos/publicarTerminado" className={styles.item}>
            <li>Publicar proyecto terminado</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
        </ul>
      </div>
    )
  } else if (context.usuario.role === 'admin') {
    return (
      <div className={styles.body}>
        <h1 className={styles.title}>Proyectos</h1>
        <ul className={styles.list}>
          <NavLink to="/proyectos/realizados" className={styles.item}>
            <li>Proyectos ya realizados</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
          <NavLink to="/proyectos/disponibles" className={styles.item}>
            <li>Proyectos para realizar</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
          {/* <NavLink to="/proyectos/publicarNuevo" className={styles.item}>
            <li>Publicar nuevo proyecto</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink>
          <NavLink to="/proyectos/publicarTerminado" className={styles.item}>
            <li>Publicar proyecto terminado</li>
            <ChevronRightIcon className={styles.arrow}/>
          </NavLink> */}
        </ul>
      </div>
    )
  }
}

export { Proyectos }

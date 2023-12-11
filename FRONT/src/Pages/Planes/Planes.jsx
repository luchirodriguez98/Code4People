import { NavLink } from 'react-router-dom'
import styles from './Planes.module.css'

function Planes () {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Planes</h1>
      <p className={styles.subTitle}>Ofrecemos dos tipos de planes para que se adapten justo a tus necesidades. Contamos con desarrolladores capacitados para ambas opciones para que no te preocupes por nada!</p>
      <div>
        <span className={styles.grid}>
          <span>
            <h2 className={styles.gridTitle}>CODE</h2>
            <ul className={styles.gridList}>
              <li>Personalización avanzada</li>
              <li>Mayor flexibilidad en diseño</li>
              <li>Escalabilidad Ilimitada</li>
              <li>Desarrollo de funcionalidades específicas</li>
            </ul>
            <div className={styles.gridButton}>SELECCIONAR PLAN</div>
          </span>
          <span>
            <h2 className={styles.gridTitle}>NO CODE</h2>
            <ul className={styles.gridList}>
              <li>Rápida implementación</li>
              <li>Facilidad de uso</li>
              <li>Infinidad de plantillas para el diseño</li>
              <li>Actualizaciones de plataforma simples</li>
            </ul>
            <NavLink to="/registro">
              <div className={styles.gridButton}>SELECCIONAR PLAN</div>
            </NavLink>
          </span>
        </span>
      </div>
    </div>
  )
}

export { Planes }

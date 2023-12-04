import styles from './MensajesRecibidos.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function MensajesRecibidos () {
  return (
        <div className={styles.body}>
          <div className={styles.backNav}>
            <ChevronLeftIcon className={styles.icon}/>
            <p>Mensajes</p>
          </div>
          <h1 className={styles.title}>Mensajes recibidos</h1>
          <div className={styles.messageList}>
            <span className={styles.messageItem}>
              <p>USUARIO123</p>
              <p>Hola! Vi que me seleccionaste para realizar el proyecto</p>
              <ChevronRightIcon className={styles.icon}/>
            </span>
            <span className={styles.messageItem}>
            <p>USUARIO123</p>
              <p>Hola! Vi que me seleccionaste para realizar el proyecto</p>
              <ChevronRightIcon className={styles.icon}/>
            </span>
            <span className={styles.messageItem}>
            <p>USUARIO123</p>
              <p>Hola! Vi que me seleccionaste para realizar el proyecto</p>
              <ChevronRightIcon className={styles.icon}/>
            </span>
            <span className={styles.messageItem}>
              <p>USUARIO123</p>
              <p>Hola! Vi que me seleccionaste para realizar el proyecto</p>
              <ChevronRightIcon className={styles.icon}/>
            </span>
          </div>
        </div>
  )
}

export { MensajesRecibidos }

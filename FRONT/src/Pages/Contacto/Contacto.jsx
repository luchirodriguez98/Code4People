import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid'
import styles from './Contacto.module.css'

function Contacto () {
  return (
        <div className={styles.body}>
          <h1 className={styles.title}>Contacto</h1>
          <p className={styles.subTitle}>Si tienes dudas contactanos por las siguientes vias y las resolveremos a la brevedad.</p>
          <div className={styles.buttonsContainer}>
            <div className={styles.item}>
            <PhoneIcon className={styles.icon}/>
              <div className={styles.textContainer}>
                <p>TELEFONO</p>
                <p>653-879-876</p>
              </div>
            </div>
            <div className={styles.item}>
              <EnvelopeIcon className={styles.icon}/>
              <div className={styles.textContainer}>
                <p>EMAIL</p>
                <p>code4people@gmail.com</p>
              </div>
            </div>
            <div className={styles.item}>
              <UserIcon className={styles.icon}/>
              <div className={styles.textContainer}>
                <p>FACEBOOK</p>
                <p>CODE 4 PEOPLE</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export { Contacto }

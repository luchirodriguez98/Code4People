import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

function Modal ({ children, toggle }) {
  return createPortal(
    <div className={`${styles.modalScreen}`}>
    <div className={`${styles.backdrop}`} onClick={toggle}></div>
    <div className={`${styles.modalBox}`}>
        {children}
    </div>
    </div>, document.body
  )
}

export { Modal }

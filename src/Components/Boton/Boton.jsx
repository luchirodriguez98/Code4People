import styles from './Boton.module.css'

// eslint-disable-next-line react/prop-types
function Boton({texto}) {
    return(
        <div className={`${styles.boton}`}>
            {texto}
        </div>
    )
}

export {Boton}
import styles from './BotonNav.module.css'

// eslint-disable-next-line react/prop-types
function BotonNav({texto}) {
    return(
        <div className={`${styles.boton}`}>
            {texto}
        </div>
    )
}

export {BotonNav}
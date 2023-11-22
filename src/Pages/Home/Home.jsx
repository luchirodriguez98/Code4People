import { NavLink } from "react-router-dom"
import styles from './Home.module.css'

function Home () {
    return (
        <div className={`${styles.body}`}>
            <h1 className={`${styles.title}`}>CODE 4 PEOPLE</h1>
            <p className={`${styles.titleSmall}`}>A TU ALCANCE</p>
            <p className={`${styles.text}`}>Somos una compañia dedicada a ayudar a las empresas a lograr su objetivo de digitalizarse, y con el beneficio de que sea gratuito. Esto lo lorgamos gracias a que contamos con la colaboracion de estudiantes y profesionales del rubro.</p>
            <div className={`${styles.button}`}>
                <NavLink to="/quienes-somos">
                    <div>DESCUBRINOS</div>
                </NavLink>
            </div>
        </div>
    )
}

export { Home }
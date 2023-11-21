import { NavLink } from "react-router-dom"
import styles from './Home.module.css'

function Home () {
    return (
        <div className={`${styles.body}`}>
            <img src="../../../assets/logotitulo-removebg-preview.png" alt="Code 4 People" />
            <p className={`${styles.title}`}>A TU ALCANCE</p>
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
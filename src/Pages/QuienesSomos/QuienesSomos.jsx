import { NavLink } from 'react-router-dom'
import styles from './QuienesSomos.module.css'

function QuienesSomos () {
    return (
        <div className={`${styles.body}`}>
        <span className={`${styles.quote}`}>
            <img src="../../../assets/Copia_de_Logotipo_marca_personal_minimalista_moderno_tipográfico_con_iniciales_banco_y_negro-removebg-preview.png" alt="" />
            <p>El 40% de las compañías que no se digitalicen cerrarán en los próximos 5 años.</p>
        </span>
        <span className={`${styles.grid}`}>
            <article>
                <p className={`${styles.title}`}>15-20%</p>
                <p className={`${styles.text}`}>De las empresas españolas actualmente temen que digitalizarse sea un proceso demasiado caro.</p>
            </article>
            <article>
                <p className={`${styles.title}`}>29-47%</p>
                <p className={`${styles.text}`}>El crecicimento de las empresas crecerán en el posicionamiento en buscadores.</p>
            </article>
            <article>
                <p className={`${styles.title}`}>34%</p>
                <p className={`${styles.text}`}>De las pequeñas y medianas empresas españolas no tiene previsto invertir en digitalización, al menos en los próximos tres años.</p>
            </article>
        </span>
        <span className={`${styles.buttonContainer}`}>
            <NavLink to="/registro">
                <div className={`${styles.button}`}>REGISTRATE AHORA</div>
            </NavLink>
        </span>
        {/* <img className={`${styles.imageBackground}`} src="../../../assets/1-removebg.png" alt="" /> */}
        <span>
            <span className={`${styles.containerText}`}>
                <p className={`${styles.title}`}>El Futuro</p>
                <p className={`${styles.text}`}>El futuro de las empresas es en la digitalizacion.</p>
            </span>
            <span className={`${styles.containerText}`}>
                <p className={`${styles.title}`}>La tecnología</p>
                <p className={`${styles.text}`}>Ofrecemos opciones de proyectos CODE o NO CODE, eso lo decides tu!</p>
            </span>
            <span className={`${styles.containerText}`}>
                <p className={`${styles.title}`}>Los servicios</p>
                <p className={`${styles.text}`}>Nuestro servicio es 100% gratuito. Solo abonaras el dominio y el hosting.</p>
                <NavLink to="/planes">
                    <p className={`${styles.navText}`}>MAS SOBRE LOS PLANES</p>
                </NavLink>
            </span>
        </span>
        </div>
    )
}

export { QuienesSomos }
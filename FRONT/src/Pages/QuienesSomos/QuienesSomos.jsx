import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../Context/Context'
import styles from './QuienesSomos.module.css'

function QuienesSomos () {
  const context = useContext(MyContext)

  return (
        <div className={`${styles.body}`}>
        <span className={`${styles.quote}`}>
            <img src="../../../assets/comillas.png" alt="" />
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
            <NavLink to={context.user ? '/cuenta' : '/registro'}>
                <div className={`${styles.button}`}>{context.buttonToRender}</div>
            </NavLink>
        </span>
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
            </span>
        </span>
        <h2 className={styles.perfilesTitle}>NOSOTROS SOMOS:</h2>
        <span className={styles.perfilesContainer}>
            <NavLink to="https://github.com/damigo98" target='blank'>
                <div className={styles.perfil}>
                    <img src="../../../assets/daniel.jpg" alt="Daniel Amigo" />
                    <p>Daniel Amigo</p>
                </div>
            </NavLink>
            <NavLink to="https://github.com/LuisHenaoS" target='blank'>
                <div className={styles.perfil}>
                    <img src="../../../assets/luis.jpg" alt="Luis Henao" />
                    <p>Luis Henao</p>
                </div>
            </NavLink>
            <NavLink to="https://github.com/luchirodriguez98" target='blank'>
                <div className={styles.perfil}>
                    <img src="../../../assets/lucia.jpg" alt="Lucia Rodriguez" />
                    <p>Lucia Rodriguez</p>
                </div>
            </NavLink>
        </span>
        </div>
  )
}

export { QuienesSomos }

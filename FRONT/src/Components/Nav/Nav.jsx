// import { useContext } from "react";
import { NavLink, useLocation } from 'react-router-dom'
import { useToggle } from '../../Hooks/useToggle'
import { BotonNav } from '../BotonNav/BotonNav'
import { Modal } from '../Modal/Modal'
import { Bars3Icon } from '@heroicons/react/24/solid'
import styles from './Nav.module.css'
import { useUserContext } from '../../Hooks/useUserContext'
import logo from '../../../assets/2.png'

const Nav = () => {
  const [isModalOpen, toggleModal] = useToggle(false)

  const location = useLocation().pathname

  const context = useUserContext()

  const route = () => {
    if (context.usuario === null || (context.usuario && context.usuario.role === 'empresa')) {
      return '/proyectos/realizados'
    } else if (context.usuario && context.usuario.role === 'usuario') {
      return '/proyectos/disponibles'
    } else if (context.usuario && context.usuario.role === 'admin') {
      return '/proyectos'
    }
  }

  return (
        <nav className={`${styles.nav}`}>
            {/* parte derecha */}
            <span>
                    <NavLink
                        to="/"
                    >
                        <img src={logo}></img>
                    </NavLink>
            </span>
            {/* parte centro */}
            <ul className={`${styles.list} ${styles.navDesktop}`}>
                <li className={`${styles.listItem}`}>
                    <NavLink
                        to="/"
                        className={location === '/' ? `${styles.navLinkActive}` : `${styles.navLink}`}
                    >
                        <p>INICIO</p>
                    </NavLink>
                </li>
                <li className={`${styles.listItem}`}>
                    <NavLink
                        to="/quienes-somos"
                        className={location === '/quienes-somos' ? `${styles.navLinkActive}` : `${styles.navLink}`}
                    >
                        <p>QUIENES SOMOS</p>
                    </NavLink>
                </li>
                <li className={`${styles.listItem}`}>
                    <NavLink
                        to={route()}
                        className={location === '/proyectos' ? `${styles.navLinkActive}` : `${styles.navLink}`}
                    >
                        <p>PROYECTOS</p>
                    </NavLink>
                </li>
                <li className={`${styles.listItem}`}>
                    <NavLink
                        to="/contacto"
                        className={location === '/contacto' ? `${styles.navLinkActive}` : `${styles.navLink}`}
                    >
                        <p>CONTACTO</p>
                    </NavLink>
                </li>
            </ul>
            {/* parte izquierda */}
            <span>
                <NavLink to={context.user ? '/cuenta' : '/login'}>
                    <BotonNav texto={context.buttonToRender} />
                </NavLink>
            </span>
            <div className={`${styles.menuMobile}`}>
                <Bars3Icon className={`${styles.menuMobileIcon}`} onClick={toggleModal}></Bars3Icon>
                {isModalOpen &&
                    <Modal toggle={toggleModal}>
                        <ul className="modalMenu">

                            <li onClick={toggleModal}>
                                <NavLink to="/">
                                    <p>INICIO</p>
                                </NavLink>
                            </li>
                            <li onClick={toggleModal}>
                                <NavLink to="/quienes-somos">
                                    <p>QUIENES SOMOS</p>
                                </NavLink>
                            </li>
                            <li onClick={toggleModal}>
                                <NavLink to={route()}>
                                    <p>PROYECTOS</p>
                                </NavLink>
                            </li>
                            <li onClick={toggleModal}>
                                <NavLink to={context.user ? '/cuenta' : '/login'} >
                                    <p className={`${styles.violetLink}`}>{context.buttonToRender}</p>
                                </NavLink>
                            </li>
                            <li onClick={toggleModal}>
                                <NavLink to="/contacto" >
                                    <p>CONTACTO</p>
                                </NavLink>
                            </li>

                        </ul>
                    </Modal>}
            </div>
        </nav>

  )
}

export { Nav }

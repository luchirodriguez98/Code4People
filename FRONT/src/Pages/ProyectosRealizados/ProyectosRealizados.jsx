import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import styles from './ProyectosRealizados.module.css'

const proyectosRealizados = [
  { titulo: 'Pagina para abogados', url: 'https://www.facebook.com/', id_proyecto: 1 },
  { titulo: 'Pagina e-commerce', url: 'https://www.facebook.com/', id_proyecto: 2 },
  { titulo: 'Pagina de contabilidad', url: 'https://www.facebook.com/', id_proyecto: 5 }
]

function ProyectosRealizados () {
  return (
    <div className={styles.body}>
      <NavLink to="/proyectos">
        <div className={styles.backNav}>
          <ChevronLeftIcon className={styles.icon}/>
          <p>Proyectos</p>
        </div>
      </NavLink>
      <h1 className={styles.title}>Proyectos realizados</h1>
      <ListaProyectos toMap={proyectosRealizados}/>
    </div>
  )
}

export { ProyectosRealizados }

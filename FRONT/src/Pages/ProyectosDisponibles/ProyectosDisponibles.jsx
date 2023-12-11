import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import styles from './ProyectosDisponibles.module.css'

const proyectosPorHacer = [
  { titulo: 'Pagina para abogados', descripcion: 'ndjkfnsdjkfsdjkfndks', autor: 'empresa123', id_proyecto: 1 },
  { titulo: 'Pagina e-commerce', descripcion: 'ndjkfnsdjkfsdjkfndks', autor: 'empresa13', id_proyecto: 2 },
  { titulo: 'Pagina de contabilidad', descripcion: 'ndjkfnsdjkfsdjkfndks', autor: 'empresa23', id_proyecto: 5 }
]

function ProyectosDisponibles () {
  return (
    <div className={styles.body}>
      <NavLink to="/proyectos">
        <div className={styles.backNav}>
          <ChevronLeftIcon className={styles.icon}/>
          <p>Proyectos</p>
        </div>
      </NavLink>
      <h1 className={styles.title}>Proyectos para realizar</h1>
      <ListaProyectos toMap={proyectosPorHacer}/>
    </div>
  )
}

export { ProyectosDisponibles }

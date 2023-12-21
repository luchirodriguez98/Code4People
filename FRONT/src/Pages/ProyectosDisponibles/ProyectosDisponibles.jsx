import { useEffect, useState } from 'react'
import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import { proyectosParaRealizar } from '../../services/proyectos/proyectosParaRealizar.js'
import styles from './ProyectosDisponibles.module.css'

function ProyectosDisponibles () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    proyectosParaRealizar({ setErrors, setProyectos })
  }, [])

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Proyectos para realizar</h1>
      {errors
        ? <span className='errorSpan'>Hubo un error, recarga la pagina</span>
        : (proyectos.length === 0
            ? <p className='errorSpan'>No hay proyectos</p>
            : <ListaProyectos toMap={proyectos}/>)
      }
    </div>
  )
}

export { ProyectosDisponibles }

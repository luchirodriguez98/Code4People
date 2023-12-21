import { useEffect, useState } from 'react'
import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import { proyectosRealizados } from '../../services/proyectos/proyectosRealizados.js'
import styles from './ProyectosRealizados.module.css'

function ProyectosRealizados () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    proyectosRealizados({ setErrors, setProyectos })
  }, [])

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Proyectos realizados</h1>
      {errors
        ? <span className='errorSpan'>Hubo un error, recarga la pagina</span>
        : (proyectos.length === 0
            ? <p className='errorSpan'>No hay proyectos</p>
            : <ListaProyectos toMap={proyectos}/>)
      }
    </div>
  )
}

export { ProyectosRealizados }

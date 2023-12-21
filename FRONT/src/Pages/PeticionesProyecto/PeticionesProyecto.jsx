import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ListaPeticionesEmpresa } from '../../Components/ListaPeticiones/ListaPeticionesEmpresa'
import { proyectosEmpresa } from '../../services/proyectos/proyectosEmpresa.js'
import { PlusIcon } from '@heroicons/react/24/solid'
import styles from './PeticionesProyecto.module.css'

function PeticionesProyecto () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    proyectosEmpresa({ setErrors, setProyectos })
  }, [])

  return (
    <div className={styles.body}>
      <NavLink to="/proyectos/publicarNuevo" className={styles.nuevoProy}>
        <PlusIcon className={styles.icon}/>
      </NavLink>
      <h1 className={styles.title}>Tus proyectos</h1>
      {proyectos.length === 0
        ? <p className='errorSpan'>No tienes proyectos publicados</p>
        : proyectos.map(proyecto => {
          return (
            <div key={proyecto.id_proyecto} className={styles.proyectoContainer}>
            <h2 className={styles.titleProject}>PROYECTO {proyecto.proyecto_titulo}</h2>
            {proyecto.proyecto_estado === null
              ? <NavLink to="/proyectos/publicarTerminado" className={styles.nuevoProy} state={proyecto.id_proyecto}>
                  <p className={styles.subtitleViolet}>MARCAR COMO TERMINADO</p>
                </NavLink>
              : <p className={styles.subtitleWhite}>PROYECTO FINALIZADO</p>
            }
            { errors
              ? <span className='errorSpan'>Hubo un error, recarga la pagina</span>
              : (proyecto.peticiones.length === 0
                  ? <p className={styles.textSinPeticiones}>Este proyecto no tiene peticiones</p>
                  : <ListaPeticionesEmpresa toMap={proyecto.peticiones} route={'/peticion/proyecto/'}/>
                )
              }
            </div>
          )
        })
    }
    </div>
  )
}

export { PeticionesProyecto }

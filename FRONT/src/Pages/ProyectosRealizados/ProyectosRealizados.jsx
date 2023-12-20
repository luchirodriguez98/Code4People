import { useEffect, useState } from 'react'
import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import { proyectosRealizados } from '../../services/proyectos/proyectosRealizados.js'
import styles from './ProyectosRealizados.module.css'

function ProyectosRealizados () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const baseUrl = 'http://localhost:5000'

  //     try {
  //       const response = await fetch(`${baseUrl}/proyectos`)
  //       const data = await response.json()
  //       console.log(data.data)
  //       if (!response.ok) {
  //         if (data.error) {
  //           setErrors(data.error)
  //         } else {
  //           setErrors(data.message)
  //         }
  //         return
  //       }
  //       setProyectos(data.data)
  //     } catch (error) {
  //       console.error('Error:', error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])
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

import { useEffect, useState } from 'react'
import { ListaPeticionesEmpresa } from '../../Components/ListaPeticiones/ListaPeticionesEmpresa'
import styles from './PeticionesProyecto.module.css'
import { NavLink } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/solid'
import { proyectosEmpresa } from '../../services/proyectos/proyectosEmpresa.js'

function PeticionesProyecto () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   const fetchData = async () => {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       }
  //     }
  //     const baseUrl = 'http://localhost:5000'

  //     try {
  //       const response = await fetch(`${baseUrl}/proyectopeticiones`, options)
  //       const data = await response.json()
  //       console.log(data)
  //       if (!response.ok) {
  //         if (data.error) {
  //           setErrors(data.error)
  //           return
  //         } else {
  //           setErrors(data.message)
  //         }
  //         return
  //       }

  //       const originalData = data.data
  //       // Nuevo array para almacenar la estructura deseada
  //       const newData = []

  //       originalData.forEach((item) => {
  //         const idProyecto = item.id_proyecto

  //         // Buscar si ya existe un objeto con el mismo id_proyecto en newData
  //         const existingProject = newData.find((project) => project.id_proyecto === idProyecto)

  //         if (existingProject) {
  //           // Si existe, agregar la petición al array de peticiones, solo si autor no es nulo
  //           if (item.autor !== null) {
  //             existingProject.peticiones.push({
  //               id_peticion: item.id_peticion,
  //               autor: item.autor,
  //               peticion_titulo: item.peticion_titulo,
  //               peticion_descripcion: item.peticion_descripcion,
  //               peticion_estado: item.peticion_estado
  //             })
  //           }
  //         } else {
  //           // Si no existe, crear un nuevo objeto con la estructura deseada, solo si autor no es nulo
  //           if (item.id_peticion && item.autor !== null) {
  //             newData.push({
  //               id_proyecto: idProyecto,
  //               proyecto_titulo: item.proyecto_titulo,
  //               proyecto_descripcion: item.proyecto_descripcion,
  //               proyecto_estado: item.proyecto_estado,
  //               peticiones: [
  //                 {
  //                   id_peticion: item.id_peticion,
  //                   autor: item.autor,
  //                   peticion_titulo: item.peticion_titulo,
  //                   peticion_descripcion: item.peticion_descripcion,
  //                   peticion_estado: item.peticion_estado
  //                 }
  //               ]
  //             })
  //           } else if (!item.id_peticion) {
  //             // Si no hay id_peticion, agregar el proyecto sin peticiones
  //             newData.push({
  //               id_proyecto: idProyecto,
  //               proyecto_titulo: item.proyecto_titulo,
  //               proyecto_descripcion: item.proyecto_descripcion,
  //               proyecto_estado: item.proyecto_estado,
  //               peticiones: []
  //             })
  //           }
  //         }
  //       })
  //       setProyectos(newData)
  //     } catch (error) {
  //       console.error('Error:', error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])

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

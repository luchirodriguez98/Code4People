import { useEffect, useState } from 'react'
import { ListaPeticionesEmpresa } from '../../Components/ListaPeticiones/ListaPeticionesEmpresa'
import styles from './PeticionesProyecto.module.css'
import { NavLink } from 'react-router-dom'

function PeticionesProyecto () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const baseUrl = 'http://localhost:5000'

      try {
        const response = await fetch(`${baseUrl}/proyectopeticiones`, options)
        const data = await response.json()
        console.log(data)
        if (!response.ok) {
          if (data.error) {
            setErrors(data.error)
          } else {
            setErrors(data.message)
          }
          return
        }
        // setProyectos(data.data)
        const originalData = data.data
        // Nuevo array para almacenar la estructura deseada
        const newData = []

        // Recorrer el array original y organizar los datos
        originalData.forEach(item => {
          const idProyecto = item.id_proyecto

          // Buscar si ya existe un objeto con el mismo id_proyecto en newData
          const existingProject = newData.find(project => project.id_proyecto === idProyecto)

          if (existingProject) {
            // Si existe, agregar la petición al array de peticiones
            existingProject.peticiones.push({
              'id_peticion': item.id_peticion,
              'peticion_titulo': item.peticion_titulo,
              'peticion_descripcion': item.peticion_descripcion,
              'peticion_estado': item.peticion_estado
            })
          } else {
            // Si no existe, crear un nuevo objeto con la estructura deseada
            newData.push({
              'id_proyecto': idProyecto,
              'proyecto_titulo': item.proyecto_titulo,
              'proyecto_estado': item.proyecto_estado,
              'peticiones': [
                {
                  'autor' : item.autor,
                  'id_peticion': item.id_peticion,
                  'peticion_titulo': item.peticion_titulo,
                  'peticion_descripcion': item.peticion_descripcion,
                  'peticion_estado': item.peticion_estado
                }
              ]
            })
          }
        })
        setProyectos(newData)
      } catch (error) {
        console.error('Error:', error.message)
      }
    }
    fetchData()
  }, [])
  console.log(proyectos)

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Tus proyectos</h1>
      {/* <NavLink to='/peticion/proyecto/aprobadas'>
        <p className={styles.peticionesAprobadas}>PETICIONES QUE HAS APROBADO</p>
      </NavLink> */}
      {proyectos.map(proyecto => {
        return (
          <>
          <h2 className={styles.titleProject}>{proyecto.proyecto_titulo}</h2>
          { errors
            ? <span className='errorSpan'>Hubo un error, recarga la pagina</span>
            : <ListaPeticionesEmpresa toMap={proyecto.peticiones} route={'/peticion/proyecto/'}/>
          }
          </>
        )
      })}
    </div>
  )
}

export { PeticionesProyecto }

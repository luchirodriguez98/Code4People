import { useEffect, useState } from 'react'
import { ListaPeticionesEmpresa } from '../../Components/ListaPeticiones/ListaPeticionesEmpresa'
import styles from './PeticionesProyecto.module.css'
import { NavLink } from 'react-router-dom'

function PeticionesProyecto () {
  const [peticiones, setPeticiones] = useState([])
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
        const response = await fetch(`${baseUrl}/peticiones`, options)
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
        setPeticiones(data.data)
      } catch (error) {
        console.error('Error:', error.message)
      }
    }
    fetchData()
  }, [])
  console.log(peticiones)

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticiones pendientes de modificar</h1>
      <NavLink to='/peticion/proyecto/aprobadas'>
        <p className={styles.peticionesAprobadas}>PETICIONES QUE HAS APROBADO</p>
      </NavLink>
      <h2 className={styles.titleProject}>{peticiones[0]?.titulo_proyecto}</h2>
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaPeticionesEmpresa toMap={peticiones} route={'/peticion/proyecto/'}/>}
    </div>
  )
}

export { PeticionesProyecto }

import { useEffect, useState } from 'react'
import { ListaPeticionesEmpresa } from '../../Components/ListaPeticiones/ListaPeticionesEmpresa'
import styles from './PeticionProyectoAprobadas.module.css'

function PeticionesProyectoAprobadas () {
  const [peticiones, setPeticiones] = useState([])
  const [errors, setErrors] = useState(null)
  console.log(errors)

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
      <h1 className={styles.title}>Peticiones que has aprobado</h1>
      {/* <h2 className={styles.titleProject}>{peticiones[0]?.titulo_proyecto}</h2> */}
      <ListaPeticionesEmpresa toMap={peticiones}/>
    </div>
  )
}

export { PeticionesProyectoAprobadas }

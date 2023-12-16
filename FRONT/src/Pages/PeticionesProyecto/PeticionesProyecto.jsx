import { useEffect, useState } from 'react'
import { ListaPeticiones } from '../../Components/ListaPeticiones/ListaPeticiones'
import styles from './PeticionesProyecto.module.css'

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
      <h1 className={styles.title}>Peticiones realizadas a tu proyecto</h1>
      <h2 className={styles.titleProject}>Proyecto: E-Commerce</h2>
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaPeticiones toMap={peticiones} route={'/peticion/proyecto/'}/>}
    </div>
  )
}

export { PeticionesProyecto }

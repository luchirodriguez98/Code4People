import { useEffect, useState } from 'react'
import { ListaPeticiones } from '../../Components/ListaPeticiones/ListaPeticiones'
import styles from './PeticionesRealizadas.module.css'

function PeticionesRealizadas () {
  const [peticiones, setPeticiones] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect((peticiones) => {
    const token = localStorage.getItem('token')
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const userID = userInfo.id

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
        const response = await fetch(`${baseUrl}/peticiones/${userID}`, options)
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
        if (data.data.length === 0) {
          setErrors('No tienes peticiones realizadas')
        }
      } catch (error) {
        console.error('Error:', error.message)
      }
    }
    fetchData()
  }, [])

  console.log(peticiones)

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticiones Realizadas</h1>
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaPeticiones toMap={peticiones} />}
    </div>
  )
}

export { PeticionesRealizadas }

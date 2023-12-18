import { useLocation } from 'react-router'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Peticion.module.css'
import { useState } from 'react'

function Peticion () {
  // const [peticion, setPeticion] = useState()
  const [errors, setErrors] = useState(null)

  const navigation = useLocation()
  console.log(navigation.state)
  const navigate = useNavigate()

  const aceptarPeticion = async (id) => {
    const token = localStorage.getItem('token')
    console.log(id)
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/peticiones/aceptar/${id}`, options)
      const data = await response.json()
      console.log(data.data)
      if (!response.ok) {
        if (data.error) {
          setErrors(data.error)
        } else {
          setErrors(data.message)
        }
        return
      }
      // setPeticion(data.data)
      navigate('/peticion/proyecto')
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  const rechazarPeticion = async (id) => {
    const token = localStorage.getItem('token')

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/peticiones/denegar/${id}`, options)
      const data = await response.json()
      console.log(data.data)
      if (!response.ok) {
        if (data.error) {
          setErrors(data.error)
        } else {
          setErrors(data.message)
        }
        return
      }
      // setPeticion(data.data)
      navigate('/peticion/proyecto')
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <div className={styles.body}>
      {/* <ErrorModal mensaje={errors}/> */}
      <h1 className={styles.title}>Peticion del usuario &quot;{navigation.state.autor}&quot;</h1>
      <div className={styles.container}>
        <p>TITULO</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.titulo}</p>
        </div>
        <p>DESCRIPCION</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.descripcion}</p>
        </div>
        <div className={styles.buttonContainer}>
          <NavLink to="/peticion/proyecto">
            <button className={styles.buttonDecline} onClick={() => rechazarPeticion(navigation.state.id_peticion)}>RECHAZAR</button>
          </NavLink>
          <NavLink to="/peticion/proyecto">
            <button className={styles.buttonAccept} onClick={() => aceptarPeticion(navigation.state.id_peticion)}>ACEPTAR</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export { Peticion }

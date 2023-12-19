import { useLocation } from 'react-router'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Peticion.module.css'
import { useState } from 'react'
import { aceptarPeticion } from '../../services/peticiones/aceptarPeticion.js'
import { rechazarPeticion } from '../../services/peticiones/rechazarPeticion.js'

function Peticion () {
  const [errors, setErrors] = useState(null)

  const navigation = useLocation()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  // const aceptarPeticion = async (id) => {
  //   console.log(id)
  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`
  //     }
  //   }

  //   const baseUrl = 'http://localhost:5000'

  //   try {
  //     const response = await fetch(`${baseUrl}/peticiones/aceptar/${id}`, options)
  //     const data = await response.json()
  //     console.log(data.data)
  //     if (!response.ok) {
  //       if (data.error) {
  //         setErrors(data.error)
  //       } else {
  //         setErrors(data.message)
  //       }
  //       toast.error(errors)
  //       return
  //     }
  //     if (response.ok) {
  //       toast.success('Peticion aceptada')
  //       navigate('/peticion/proyecto')
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message)
  //   }
  // }

  // const rechazarPeticion = async (id) => {
  //   const token = localStorage.getItem('token')

  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`
  //     }
  //   }

  //   const baseUrl = 'http://localhost:5000'

  //   try {
  //     const response = await fetch(`${baseUrl}/peticiones/denegar/${id}`, options)
  //     const data = await response.json()
  //     console.log(data.data)
  //     if (!response.ok) {
  //       if (data.error) {
  //         setErrors(data.error)
  //       } else {
  //         setErrors(data.message)
  //       }
  //       toast.error(errors)
  //       return
  //     }
  //     if (response.ok) {
  //       toast.success('Peticion denegada')
  //       navigate('/peticion/proyecto')
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message)
  //   }
  // }

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticion del usuario &quot;{navigation.state.autor}&quot;</h1>
      <div className={styles.container}>
        <p>TITULO</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.peticion_titulo}</p>
        </div>
        <p>DESCRIPCION</p>
        <div className={styles.whiteContainer}>
          <p>{navigation.state.peticion_descripcion}</p>
        </div>
        <div className={styles.buttonContainer}>
          <NavLink to="/peticion/proyecto">
            <button className={styles.buttonDecline} onClick={() => rechazarPeticion({ idPeticion: navigation.state.id_peticion, setErrors, errors, navigate, token })}
            >
              RECHAZAR
            </button>
          </NavLink>
          <NavLink to="/peticion/proyecto">
            <button className={styles.buttonAccept} onClick={() => aceptarPeticion({ idPeticion: navigation.state.id_peticion, setErrors, errors, navigate, token })}>
              ACEPTAR
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export { Peticion }

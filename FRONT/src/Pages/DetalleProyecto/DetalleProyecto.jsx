import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './DetalleProyecto.module.css'
import { useEffect, useState } from 'react'

function DetalleProyecto () {
  const [proyecto, setProyecto] = useState([])
  // const [errors, setErrors] = useState(null)
  const navigation = useLocation()

  useEffect(() => {
    // Mover la lógica al useEffect para evitar el bucle de renderizado
    setProyecto(navigation.state)
  }, [navigation.state])
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
  //       const response = await fetch(`${baseUrl}/proyectospendientes/${navigation.state.id_proyecto}`, options)
  //       const data = await response.json()
  //       console.log(data)
  //       if (!response.ok) {
  //         if (data.error) {
  //           setErrors(data.error)
  //         } else {
  //           setErrors(data.message)
  //         }
  //         return
  //       }
  //       setProyecto(data.data)
  //     } catch (error) {
  //       console.error('Error:', error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])
  // console.log(errors)
  // console.log(navigation.state)
  return (
    <div className={styles.body}>
      <NavLink to="/proyectos/disponibles">
        <div className={styles.backNav}>
          <ChevronLeftIcon className={styles.icon}/>
          <p>Proyectos para realizar</p>
        </div>
      </NavLink>
      <h1 className={styles.title}>Detalle del proyecto</h1>
      <div className={styles.container}>
        <h2 className={styles.proyectTitle}>{navigation.state.titulo}</h2>
        <div className={styles.textContainer}>
          <p>{navigation.state.descripcion}</p>
        </div>
        <NavLink to="/peticion/nueva" state={proyecto}>
          <div className={styles.button}>APLICAR</div>
        </NavLink>
      </div>
    </div>
  )
}

export { DetalleProyecto }

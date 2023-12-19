import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import { proyectosParaRealizar } from '../../services/proyectos/proyectosParaRealizar'
import styles from './ProyectosDisponibles.module.css'
import { useEffect, useState } from 'react'

function ProyectosDisponibles () {
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
  //       const response = await fetch(`${baseUrl}/proyectospendientes`, options)
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
  //       setProyectos(data.data)
  //     } catch (error) {
  //       console.error('Error:', error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])
  useEffect(() => {
    proyectosParaRealizar({ setErrors, setProyectos })
  }, [])

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Proyectos para realizar</h1>
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaProyectos toMap={proyectos}/>}
    </div>
  )
}

export { ProyectosDisponibles }

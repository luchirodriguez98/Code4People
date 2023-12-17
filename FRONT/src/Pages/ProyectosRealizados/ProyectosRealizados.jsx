import { NavLink } from 'react-router-dom'
import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import styles from './ProyectosRealizados.module.css'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../Hooks/useUserContext'

function ProyectosRealizados () {
  const userContext = useUserContext()

  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'http://localhost:5000'

      try {
        const response = await fetch(`${baseUrl}/proyectos`)
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
        setProyectos(data.data)
      } catch (error) {
        console.error('Error:', error.message)
      }
    }
    fetchData()
  }, [])
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Proyectos realizados</h1>
      {userContext.usuario &&
        <NavLink to="/proyectos/publicarNuevo" className={styles.nuevoProy}>
          <p>AÑADE UN NUEVO PROYECTO</p>
        </NavLink>
      }
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaProyectos toMap={proyectos}/>}
      {/* <NavLink to="/proyectos" className={styles.hrefIcon}>
        <div className={styles.containerIcon}>
          <PlusIcon className={styles.icon}/>
        </div>
      </NavLink> */}
    </div>
  )
}

export { ProyectosRealizados }

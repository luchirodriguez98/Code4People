import { ListaProyectos } from '../../Components/ListaProyectos/ListaProyectos'
import styles from './ProyectosRealizados.module.css'
import { useEffect, useState } from 'react'

function ProyectosRealizados () {
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
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaProyectos toMap={proyectos}/>}
    </div>
  )
}

export { ProyectosRealizados }

import { useEffect, useState } from 'react'
import { ListaAdmin } from '../../Components/ListaAdmin/ListaAdmin'
import styles from './TodosProyectos.module.css'
import { toast } from 'react-toastify'

function TodosProyectos () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  const token = localStorage.getItem('token')

  const getProyectos = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/proyectos`, options)
      const data = await response.json()
      console.log(data.data)
      if (!response.ok) {
        if (data.error) {
          setErrors(data.error)
        } else {
          setErrors(data.message)
        }
        toast.error(errors)
        setErrors(null)
        return
      }
      setProyectos(data.data)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  useEffect(() => {
    getProyectos()
  }, [])

  const eliminarProyecto = async (id) => {
    console.log(id)
    const token = localStorage.getItem('token')

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/delete/${id}`, options)
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
      toast.success('Proyecto eliminado correctamente')
      getProyectos()
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Proyectos</h1>
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaAdmin toMap={proyectos} toDelete={eliminarProyecto}/>}
    </div>
  )
}

export { TodosProyectos }

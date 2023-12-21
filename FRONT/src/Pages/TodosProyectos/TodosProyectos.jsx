import { useEffect, useState } from 'react'
import { ListaAdmin } from '../../Components/ListaAdmin/ListaAdmin'
import { todosProyectos } from '../../services/admin/todosProyectos.js'
import styles from './TodosProyectos.module.css'

function TodosProyectos () {
  const [proyectos, setProyectos] = useState([])
  const [errors, setErrors] = useState(null)

  const token = localStorage.getItem('token')

  useEffect(() => {
    todosProyectos({ setErrors, errors, setProyectos, token })
  }, [])

  return (
    <div>
      <h1 className={styles.title}>Proyectos</h1>
      {errors
        ? <span className='errorSpan'>Hubo un error, recarga la pagina</span>
        : (proyectos.length === 0
            ? <p className='errorSpan'>No hay proyectos para eliminar</p>
            : <ListaAdmin toMap={proyectos} />)
      }
    </div>
  )
}

export { TodosProyectos }

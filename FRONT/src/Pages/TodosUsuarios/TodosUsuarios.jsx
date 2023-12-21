import { useEffect, useState } from 'react'
import { ListaAdmin } from '../../Components/ListaAdmin/ListaAdmin'
import { todosUsuarios } from '../../services/admin/todosUsuarios.js'
import styles from './TodosUsuarios.module.css'

function TodosUsuarios () {
  const [usuarios, setUsuarios] = useState([])
  const [errors, setErrors] = useState(null)

  const token = localStorage.getItem('token')

  useEffect(() => {
    todosUsuarios({ token, setErrors, setUsuarios })
  }, [])

  return (
    <div>
      <h1 className={styles.title}>Usuarios</h1>
      {errors
        ? <span className='errorSpan'>Hubo un error, recarga la pagina</span>
        : (usuarios.length === 0
            ? <p className='errorSpan'>No hay usuarios</p>
            : <ListaAdmin toMap={usuarios} />)
      }
    </div>
  )
}

export { TodosUsuarios }

import { useEffect, useState } from 'react'
import { ListaAdmin } from '../../Components/ListaAdmin/ListaAdmin'
import styles from './TodosUsuarios.module.css'
import { todosUsuarios } from '../../services/admin/todosUsuarios.js'

function TodosUsuarios () {
  const [usuarios, setUsuarios] = useState([])
  const [errors, setErrors] = useState(null)

  const token = localStorage.getItem('token')

  // const getUsuarios = async () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`
  //     }
  //   }

  //   const baseUrl = 'http://localhost:5000'

  //   try {
  //     const response = await fetch(`${baseUrl}/users/usuarios`, options)
  //     const data = await response.json()
  //     console.log(data.data)
  //     if (!response.ok) {
  //       if (data.error) {
  //         setErrors(data.error)
  //       } else {
  //         setErrors(data.message)
  //       }
  //       return
  //     }
  //     setUsuarios(data.data)
  //   } catch (error) {
  //     console.error('Error:', error.message)
  //   }
  // }

  useEffect(() => {
    todosUsuarios({ token, setErrors, setUsuarios })
  }, [])

  // const eliminarUsuario = async (id) => {
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
  //     const response = await fetch(`${baseUrl}/users/delete/${id}`, options)
  //     const data = await response.json()
  //     console.log(data)
  //     if (!response.ok) {
  //       if (data.error) {
  //         setErrors(data.error)
  //       } else {
  //         setErrors(data.message)
  //       }
  //       toast.error(errors)
  //       setErrors(null)
  //       return
  //     }
  //     toast.success('Usuario eliminado correctamente')
  //     getUsuarios()
  //   } catch (error) {
  //     console.error('Error:', error.message)
  //   }
  // }

  return (
    <div>
      <h1 className={styles.title}>Usuarios</h1>
      {errors ? <span className='errorSpan'>Hubo un error, recarga la pagina</span> : <ListaAdmin toMap={usuarios} />}
    </div>
  )
}

export { TodosUsuarios }

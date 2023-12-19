import { toast } from 'react-toastify'
import { todosUsuarios } from './todosUsuarios'

const eliminarUsuarios = async ({ token, setErrors, errors, idToDelete }) => {
  const options = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/delete/${idToDelete}`, options)
    const data = await response.json()
    console.log(data)
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
    toast.success('Usuario eliminado correctamente')
    todosUsuarios()
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { eliminarUsuarios }

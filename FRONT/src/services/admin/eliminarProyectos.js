import { toast } from 'react-toastify'
import { todosProyectos } from './todosProyectos'

const eliminarProyectos = async ({ token, setErrors, errors, idToDelete }) => {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/delete/${idToDelete}`, options)
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
    toast.success('Proyecto eliminado correctamente')
    todosProyectos()
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { eliminarProyectos }

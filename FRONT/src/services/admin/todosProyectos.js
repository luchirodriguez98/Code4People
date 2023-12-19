import { toast } from 'react-toastify'

const todosProyectos = async ({ setErrors, errors, setProyectos, token }) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/proyectos`, options)
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

export { todosProyectos }

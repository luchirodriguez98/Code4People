import { toast } from 'react-toastify'

const publicarProyectoTerminado = async ({ event, setErrors, navigate, proyectoId }) => {
  const formData = new FormData(event.target)
  event.preventDefault()
  const token = localStorage.getItem('token')

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/nuevoAcabado/${proyectoId}`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      setErrors(data.errors)
      toast.error('Hay errores en el formulario, vuelve a intentarlo')
      return
    }
    if (response.ok && response.status === 200) {
      toast.success('Proyecto publicado correctamente')
      navigate('/')
    }
  } catch (error) {
    console.error('Error:', error.message)
    toast.error('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
  }
}

export { publicarProyectoTerminado }

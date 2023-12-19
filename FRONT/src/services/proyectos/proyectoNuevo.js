import { toast } from 'react-toastify'

const proyectoNuevo = async ({ event, formValues, setErrors, navigate, reset }) => {
  event.preventDefault()
  const token = localStorage.getItem('token')

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(formValues)
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/nuevoProyecto`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      setErrors(data.error)
      toast.error('Error en el formulario, vuelve a intentarlo')
    }
    if (response.ok) {
      toast.success('Proyecto publicado')
      navigate('/peticion/proyecto')
      reset({
        titulo: '',
        descripcion: ''
      })
    }
  } catch (error) {
    console.error('Error:', error.message)
    toast.error('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
  }
}

export { proyectoNuevo }

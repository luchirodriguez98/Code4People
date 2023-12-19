import { toast } from 'react-toastify'

const nuevaPeticion = async ({ proyectoId, formValues, setErrors, navigate, reset }) => {
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
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/nuevaPeticion/${proyectoId}`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      setErrors(data.error)
      toast.error('Hay errores en el formulario, intentelo nuevamente')
      return
    }
    if (response.ok && response.status === 200) {
      toast.success('Peticion enviada')
      navigate('/peticion/realizadas')
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

export { nuevaPeticion }

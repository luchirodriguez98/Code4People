import { toast } from 'react-toastify'

const mensajeNuevo = async ({ event, formValues, navigation, navigate, reset, setErrors }) => {
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
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/mails/correoNuevo/${navigation.state}`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      setErrors(data.error)
      toast.error('Debes escribir un mensaje, vuelve a intentarlo')
      return
    }
    if (response.ok && response.status === 200) {
      toast.success('Mensaje enviado')
      navigate('/mensajes/enviados')
      reset({
        mensaje: ''
      })
    }
  } catch (error) {
    console.error('Error:', error.message)
    setErrors('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
  }
}

export { mensajeNuevo }

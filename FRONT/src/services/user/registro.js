import { toast } from 'react-toastify'

const registro = async ({ event, formValues, setErrors, errors, navigate, reset }) => {
  event.preventDefault()

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formValues)
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/registro`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok && response.status === 400) {
      setErrors(data.errors)
      toast.error('Hay errores en el formulario, intentelo nuevamente')
      return
    }
    if (!response.ok && response.status === 500) {
      setErrors(data.error)
      toast.error(errors)
      return
    }
    if (response.ok) {
      toast.success(data.message)
      navigate('/login')
      await reset({
        nombre: '',
        email: '',
        pass: '',
        role: ''
      })
    }
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { registro }

import { toast } from 'react-toastify'

const logInUser = async ({ event, formValues, context, reset, navigate, setErrors, errors }) => {
  event.preventDefault()

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formValues)
  }
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      setErrors(data.error)
      toast.error(errors || 'Formulario con errores, vuelve a intentarlo')
      return
    }
    if (!response.ok && response.status === 500) {
      setErrors(data.error)
      return
    }
    if (response.ok) {
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('userInfo', JSON.stringify(data.data.user))
      context.logIn(data.data.user)
      navigate('/cuenta')
      reset({
        email: '',
        pass: ''
      })
    }
  } catch (error) {
    console.error(error)
    toast.error('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.')
  }
}

export { logInUser }

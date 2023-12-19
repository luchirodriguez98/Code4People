import { toast } from 'react-toastify'

const logInUser = async ({ event, formValues, reset, userContext }) => {
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
      toast.error('Formulario con errores, vuelve a intentarlo')
      return
    }
    if (response.ok && response.status === 200) {
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('userInfo', JSON.stringify(data.data.user))
      userContext.logIn(data.data.user)
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

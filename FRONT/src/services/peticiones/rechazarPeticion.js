import { toast } from 'react-toastify'

const rechazarPeticion = async ({ idPeticion, setErrors, errors, navigate, token }) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/peticiones/denegar/${idPeticion}`, options)
    const data = await response.json()
    console.log(data.data)
    if (!response.ok) {
      if (data.error) {
        setErrors(data.error)
      } else {
        setErrors(data.message)
      }
      toast.error(errors)
      return
    }
    if (response.ok) {
      toast.success('Peticion denegada')
      navigate('/peticion/proyecto')
    }
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { rechazarPeticion }

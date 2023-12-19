const mensajesEnviados = async ({ setErrors, setMensajes }) => {
  const token = localStorage.getItem('token')

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/mails/enviados`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      if (data.error) {
        setErrors(data.error)
      } else {
        setErrors(data.message)
      }
      return
    }
    setMensajes(data.data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { mensajesEnviados }

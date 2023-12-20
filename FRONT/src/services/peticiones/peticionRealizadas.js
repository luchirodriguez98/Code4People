const peticionRealizadas = async ({ setErrors, setPeticiones }) => {
  const token = localStorage.getItem('token')
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const userID = userInfo.id

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/peticiones/${userID}`, options)
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
    setPeticiones(data.data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { peticionRealizadas }

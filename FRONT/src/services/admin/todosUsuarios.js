const todosUsuarios = async ({ token, setErrors, setUsuarios }) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/usuarios`, options)
    const data = await response.json()
    console.log(data.data)
    if (!response.ok) {
      if (data.error) {
        setErrors(data.error)
      } else {
        setErrors(data.message)
      }
      return
    }
    setUsuarios(data.data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { todosUsuarios }

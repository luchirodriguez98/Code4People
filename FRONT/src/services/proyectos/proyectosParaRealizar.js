const proyectosParaRealizar = async ({ setErrors, setProyectos }) => {
  const token = localStorage.getItem('token')

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/proyectospendientes`, options)
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
    setProyectos(data.data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { proyectosParaRealizar }

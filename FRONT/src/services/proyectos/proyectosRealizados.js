const proyectosRealizados = async ({ setErrors, setProyectos }) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/proyectos`)
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
    setProyectos(data.data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { proyectosRealizados }

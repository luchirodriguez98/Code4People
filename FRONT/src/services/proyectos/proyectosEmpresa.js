const proyectosEmpresa = async ({ setErrors, setProyectos }) => {
  const token = localStorage.getItem('token')

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/proyectopeticiones`, options)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      if (data.error) {
        setErrors(data.error)
        return
      } else {
        setErrors(data.message)
      }
      return
    }

    const originalData = data.data
    // Nuevo array para almacenar la estructura deseada
    const newData = []

    originalData.forEach((item) => {
      const idProyecto = item.id_proyecto

      // Buscar si ya existe un objeto con el mismo id_proyecto en newData
      const existingProject = newData.find((project) => project.id_proyecto === idProyecto)

      if (existingProject) {
        // Si existe, agregar la petición al array de peticiones, solo si autor no es nulo
        if (item.autor !== null) {
          existingProject.peticiones.push({
            id_peticion: item.id_peticion,
            autor: item.autor,
            peticion_titulo: item.peticion_titulo,
            peticion_descripcion: item.peticion_descripcion,
            peticion_estado: item.peticion_estado
          })
        }
      } else {
        // Si no existe, crear un nuevo objeto con la estructura deseada, solo si autor no es nulo
        if (item.id_peticion && item.autor !== null) {
          newData.push({
            id_proyecto: idProyecto,
            proyecto_titulo: item.proyecto_titulo,
            proyecto_descripcion: item.proyecto_descripcion,
            proyecto_estado: item.proyecto_estado,
            peticiones: [
              {
                id_peticion: item.id_peticion,
                autor: item.autor,
                peticion_titulo: item.peticion_titulo,
                peticion_descripcion: item.peticion_descripcion,
                peticion_estado: item.peticion_estado
              }
            ]
          })
        } else if (!item.id_peticion) {
          // Si no hay id_peticion, agregar el proyecto sin peticiones
          newData.push({
            id_proyecto: idProyecto,
            proyecto_titulo: item.proyecto_titulo,
            proyecto_descripcion: item.proyecto_descripcion,
            proyecto_estado: item.proyecto_estado,
            peticiones: []
          })
        }
      }
    })
    setProyectos(newData)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export { proyectosEmpresa }

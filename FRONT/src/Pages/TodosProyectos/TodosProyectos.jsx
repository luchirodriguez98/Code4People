import { useState } from 'react'
import { ListaAdmin } from '../../Components/ListaAdmin/ListaAdmin'
import styles from './TodosProyectos.module.css'

const proyectosRealizados = [
  { titulo: 'Pagina para abogados', url: 'https://www.facebook.com/', id_proyecto: 1 },
  { titulo: 'Pagina e-commerce', url: 'https://www.facebook.com/', id_proyecto: 2 },
  { titulo: 'Pagina de contabilidad', url: 'https://www.facebook.com/', id_proyecto: 5 }
]

function TodosProyectos () {
  const [proyectos, setProyectos] = useState(proyectosRealizados)

  const eliminarProyecto = (id) => {
    const indexProyecto = proyectos.findIndex(proyecto => proyecto.id_proyecto === id)
    if (indexProyecto !== -1) {
      const nuevosProyectos = [...proyectos]
      nuevosProyectos.splice(indexProyecto, 1)
      setProyectos(nuevosProyectos)
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Proyectos</h1>
      <ListaAdmin toMap={proyectos} toDelete={eliminarProyecto}/>
    </div>
  )
}

export { TodosProyectos }

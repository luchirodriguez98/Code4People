import { useState } from 'react'
import { ListaAdmin } from '../../Components/ListaAdmin/ListaAdmin'
import styles from './TodosUsuarios.module.css'

const usuariosBBDD = [
  { nombre: 'Lucia', email: 'luchi@gmail.com', id_usuario: 1 },
  { nombre: 'Luis', email: 'luis@gmail.com', id_usuario: 2 },
  { nombre: 'Daniel', email: 'dani@gmail.com', id_usuario: 5 }
]

function TodosUsuarios () {
  const [usuarios, setUsuarios] = useState(usuariosBBDD)

  const eliminarUsuario = (id) => {
    const indexUsuario = usuarios.findIndex(usuario => usuario.id_usuario === id)
    if (indexUsuario !== -1) {
      const nuevosUsuarios = [...usuarios]
      nuevosUsuarios.splice(indexUsuario, 1)
      setUsuarios(nuevosUsuarios)
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Usuarios</h1>
      <ListaAdmin toMap={usuarios} toDelete={eliminarUsuario}/>
    </div>
  )
}

export { TodosUsuarios }

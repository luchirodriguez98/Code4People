import { ListaPeticiones } from '../../Components/ListaPeticiones/ListaPeticiones'
import styles from './PeticionesProyecto.module.css'

const peticionesUsuariosArray = [
  { usuario: 'Lucia', id_usuario: 1, id_peticion: 234, titulo: 'ndfjknfsdjk', descripcion: 'njdsknfsdjkfdjnfdjknfsdjkfndjfnsdj' },
  { usuario: 'Luis', id_usuario: 3, id_peticion: 456, titulo: 'ndfjknfsdjk', descripcion: 'njdsknfsdjkfdjnfdjknfsdjkfndjfnsdj' },
  { usuario: 'Juan', id_usuario: 5, id_peticion: 332, titulo: 'ndfjknfsdjk', descripcion: 'njdsknfsdjkfdjnfdjknfsdjkfndjfnsdj' },
  { usuario: 'Daniel', id_usuario: 7, id_peticion: 768, titulo: 'ndfjknfsdjk', descripcion: 'njdsknfsdjkfdjnfdjknfsdjkfndjfnsdj' }
]

function PeticionesProyecto () {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticiones realizadas a tu proyecto</h1>
      <ListaPeticiones toMap={peticionesUsuariosArray} route={'/peticion/proyecto/'}/>
    </div>
  )
}

export { PeticionesProyecto }

import { ListaPeticiones } from '../../Components/ListaPeticiones/ListaPeticiones'
import styles from './PeticionesRealizadas.module.css'

const peticionesArray = [
  { titulo: 'PAGINA PARA DESPACHO DE ABOGADOS', id_peticion: 1, accepted: true },
  { titulo: 'PAGINA DE E-COMMERCE PARA TIENDA DE MODA', id_peticion: 3, accepted: true },
  { titulo: 'PAGINA DE BLOG DE VIAJE PARA INFLUENCER', id_peticion: 5, accepted: false }
]

function PeticionesRealizadas () {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticiones Realizadas</h1>
      <ListaPeticiones toMap={peticionesArray} />
    </div>
  )
}

export { PeticionesRealizadas }

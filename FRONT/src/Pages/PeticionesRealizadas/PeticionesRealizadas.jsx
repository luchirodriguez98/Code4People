import { useEffect, useState } from 'react'
import { ListaPeticiones } from '../../Components/ListaPeticiones/ListaPeticiones'
import { peticionRealizadas } from '../../services/peticiones/peticionRealizadas.js'
import styles from './PeticionesRealizadas.module.css'

function PeticionesRealizadas () {
  const [peticiones, setPeticiones] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    peticionRealizadas({ setErrors, setPeticiones })
  }, [])

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticiones Realizadas</h1>
      {errors
        ? <span className='errorSpan'>Hubo un error, recarga la pagina</span>
        : (peticiones.length === 0
            ? <p className='errorSpan'>No tienes peticiones</p>
            : <ListaPeticiones toMap={peticiones} />)
      }
    </div>
  )
}

export { PeticionesRealizadas }

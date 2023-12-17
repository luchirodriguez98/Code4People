import { useEffect, useState } from 'react'
import { ListaPeticionesEmpresa } from '../../Components/ListaPeticiones/ListaPeticionesEmpresa'
import styles from './PeticionProyectoAprobadas.module.css'
import { NavLink, useLocation } from 'react-router-dom'

function PeticionesProyectoAprobadas () {
  const [peticiones, setPeticiones] = useState([])

  const navigation = useLocation()

  useEffect(() => {
    setPeticiones(navigation.state)
  }, [navigation])

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Peticiones realizadas a tu proyecto</h1>
      <NavLink to='/peticion/proyecto/aprobadas' state={peticiones}>
        <p className={styles.peticionesAprobadas}>PETICIONES QUE HAS APROBADO</p>
      </NavLink>
      {/* <h2 className={styles.titleProject}>{peticiones[0]?.titulo_proyecto}</h2> */}
      <ListaPeticionesEmpresa toMap={peticiones}/>
    </div>
  )
}

export { PeticionesProyectoAprobadas }

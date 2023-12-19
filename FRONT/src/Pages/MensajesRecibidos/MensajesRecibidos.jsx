import { NavLink } from 'react-router-dom'
import { ChevronLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/solid'
import styles from './MensajesRecibidos.module.css'
import { ListaMensajes } from '../../Components/ListaMensajes/ListaMensajes'
import { useEffect, useState } from 'react'
import { mensajesRecibidos } from '../../services/mensajes/mensajesRecibidos.js'

const icon = <ArrowUturnRightIcon className={styles.icon}/>

function MensajesRecibidos () {
  const [mensajes, setMensajes] = useState([])
  const [errors, setErrors] = useState(null)

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   const fetchData = async () => {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       }
  //     }
  //     const baseUrl = 'http://localhost:5000'

  //     try {
  //       const response = await fetch(`${baseUrl}/mails/recibidos`, options)
  //       const data = await response.json()
  //       console.log(data)
  //       if (!response.ok) {
  //         if (data.error) {
  //           setErrors(data.error)
  //         } else {
  //           setErrors(data.message)
  //         }
  //         return
  //       }
  //       setMensajes(data.data)
  //     } catch (error) {
  //       console.error('Error:', error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])
  useEffect(() => {
    mensajesRecibidos({ setMensajes, setErrors })
  }, [])

  return (
        <div className={styles.body}>
          <NavLink to="/mensajes">
            <div className={styles.backNav}>
              <ChevronLeftIcon className={styles.icon}/>
              <p>Mensajes</p>
            </div>
          </NavLink>
          <h1 className={styles.title}>Mensajes recibidos</h1>
          {errors
            ? <span className='errorSpan'>{errors}</span>
            : (mensajes.length === 0
                ? <p className='errorSpan'>No tienes mensajes</p>
                : <ListaMensajes toMap={mensajes} icon={icon}/>
              )
          }
        </div>
  )
}

export { MensajesRecibidos }

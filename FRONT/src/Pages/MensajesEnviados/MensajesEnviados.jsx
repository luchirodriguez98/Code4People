import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ListaMensajes } from '../../Components/ListaMensajes/ListaMensajes'
import { mensajesEnviados } from '../../services/mensajes/mensajesEnviados.js'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import styles from './MensajesEnviados.module.css'

function MensajesEnviados () {
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
  //       const response = await fetch(`${baseUrl}/mails/enviados`, options)
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
    mensajesEnviados({ setErrors, setMensajes })
  }, [])

  return (
        <div className={styles.body}>
          <NavLink to="/mensajes">
            <div className={styles.backNav}>
              <ChevronLeftIcon className={styles.icon}/>
              <p>Mensajes</p>
            </div>
          </NavLink>
          <h1 className={styles.title}>Mensajes enviados</h1>
          {errors
            ? <span className='errorSpan'>{errors}</span>
            : (mensajes.length === 0
                ? <p className='errorSpan'>No tienes mensajes</p>
                : <ListaMensajes toMap={mensajes}/>
              )
          }
        </div>
  )
}

export { MensajesEnviados }

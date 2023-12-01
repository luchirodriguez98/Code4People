import { NavLink } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Contacto.module.css'
// import { AtSymbolIcon } from '@heroicons/react'
import { AtSymbolIcon, PhoneIcon, UserGroupIcon } from '@heroicons/react/24/solid'

function Contacto () {
  const [formValues, setFormValues, handleFormChange] = useForm({
    nombre: '',
    email: '',
    pass: '',
    aditional: ''
  })
  const { nombre, email, pass, aditional } = formValues

  const registerColaborator = async (event) => {
    // event.preventDefault()
    if (nombre === '' || email === '' || pass === '' || aditional === '') return

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000/users/registerColaborator'

    try {
      const response = await fetch(baseUrl, options)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Error:', error.message)
    }
    setFormValues({
      nombre: '',
      email: '',
      pass: '',
      aditional: ''
    })
  }

  return (
        <div className={styles.body}>
          <h1 className={styles.title}>Date de alta como colaborador!</h1>
          <p className={styles.subTitle}>Envianos tu solicitud para registrarte como colaborador. Una vez aprobada la solicitud de avisaremos por email.</p>
          <form action="" className={`${styles.form}`} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="nombre">NOMBRE</label>
                <input required
                type="text"
                id="nombre"
                name="nombre"
                placeholder='Escribe tu nombre'
                value={formValues.nombre}
                onChange={handleFormChange}
                />
                <label htmlFor="email">EMAIL</label>
                <input
                required
                type="email"
                id="email"
                name="email"
                placeholder='Escribe tu contraseña'
                value={formValues.email}
                onChange={handleFormChange}
                />
                <label htmlFor="password">CLAVE</label>
                <input
                required
                type="password"
                id="pass"
                name="pass"
                placeholder='Escribe tu contraseña'
                value={formValues.pass}
                onChange={handleFormChange}
                />
                <label htmlFor="password">DATOS ADICIONALES</label>
                <input
                required
                type="text"
                id="aditional"
                name="aditional"
                placeholder='Escribe informacion adicional'
                value={formValues.aditional}
                onChange={handleFormChange}
                />
                <NavLink to="/">
                  <button className={`${styles.button}`} onClick={() => registerColaborator()}>ENVIAR</button>
                </NavLink>
            </form>
            <div>
              <h1 className={styles.title}>Contacto</h1>
              <p className={styles.subTitle}>Puedes comunicarte con nosotros por las siguientes vias:</p>
              <span className={styles.contactSection}>
                <div>
                  <AtSymbolIcon className={styles.icon} href="mailto:code4people@example.com"/>
                </div>
                <div>
                  <UserGroupIcon className={styles.icon}/>
                </div>
                <div>
                  <PhoneIcon className={styles.icon}/>
                </div>
              </span>
            </div>
        </div>
  )
}

export { Contacto }

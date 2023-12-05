import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Registro.module.css'

function Registro () {
  const [formValues, setFormValues, handleFormChange] = useForm({
    username: '',
    email: '',
    password: '',
    role: 'usuario'
  })

  const navigate = useNavigate()
  const { username, email, password, role } = formValues

  const saveNewUser = async (event) => {
    event.preventDefault()
    if (username === '' || email === '' || password === '' || role === '') return

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000'

    try {
      const response = await fetch(`${baseUrl}/users/registro`, options)
      const data = await response.json()
      console.log(data)
      navigate('/')
    } catch (error) {
      console.error('Error:', error.message)
    }
    setFormValues({
      nombre: '',
      email: '',
      pass: '',
      role: 'usuario'
    })
  }
  return (
        <div className={`${styles.body}`}>
            <form action="" className={`${styles.form}`} onSubmit={saveNewUser}>
                <h1 className={`${styles.title}`}>Registra tu empresa!</h1>
                <label htmlFor="nombre">NOMBRE / NOMBRE DE EMPRESA</label>
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
                {/* <NavLink to="/"> */}
                  <button className={`${styles.button}`}>GUARDAR</button>
                {/* </NavLink> */}
            </form>
        </div>
  )
}

export { Registro }

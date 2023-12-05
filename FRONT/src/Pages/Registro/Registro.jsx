import { NavLink } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Registro.module.css'
import stylesForm from '../../Styles/form.module.css'

function Registro () {
  const [formValues, setFormValues, handleFormChange] = useForm({
    nombre: '',
    email: '',
    pass: '',
    tipo_usuario: 0
  })
  const { nombre, email, pass } = formValues

  const saveNewUser = async (event) => {
    event.preventDefault()
    if (nombre === '' || email === '' || pass === '') return

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }

    const baseUrl = 'http://localhost:5000/users/register'

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
      tipo_usuario: 0
    })
  }
  return (
        <div className={`${styles.body}`}>
            <h1 className={`${styles.title}`}>Registra tu empresa!</h1>
            <form action="" className={`${stylesForm.form}`} onSubmit={saveNewUser}>
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
                <NavLink to="/">
                  <button className={`${stylesForm.button}`}>GUARDAR</button>
                </NavLink>
            </form>
        </div>
  )
}

export { Registro }

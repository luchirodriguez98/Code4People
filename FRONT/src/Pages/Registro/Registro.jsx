import { useNavigate } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import styles from './Registro.module.css'
import stylesForm from '../../Styles/form.module.css'

function Registro () {
  const { formValues, reset, handleFormChange } = useForm({
    nombre: '',
    email: '',
    pass: '',
    role: ''
  })

  const navigate = useNavigate()
  const { nombre, email, pass, role } = formValues

  const saveNewUser = async (event) => {
    event.preventDefault()
    if (nombre === '' || email === '' || pass === '' || role === '') return

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
      reset({
        nombre: '',
        email: '',
        pass: '',
        role: ''
      })
      navigate('/')
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
  return (
    <div className={`${styles.body}`}>
      <h1 className={`${styles.title}`}>Registra tu empresa!</h1>
      <form action="" className={`${stylesForm.form}`} onSubmit={saveNewUser}>
      <label htmlFor="nombre">NOMBRE</label>
        <input
          required
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
          placeholder='Escribe tu email'
          value={formValues.email}
          onChange={handleFormChange}
        />
      <label htmlFor="pass">CLAVE</label>
        <input
          required
          type="password"
          id="pass"
          name="pass"
          placeholder='Escribe tu pass'
          value={formValues.pass}
          onChange={handleFormChange}
        />
        <span className={stylesForm.containerButton}>
          <input
            checked={formValues.role === 'empresa'}
            onChange={handleFormChange}
            value='empresa'
            type="radio"
            id='empresa'
            name='role'
            className={stylesForm.inputSelect}
            />
          <label htmlFor="empresa" className={stylesForm.selectButton}>
            EMPRESA
          </label>
          <input
            checked={formValues.role === 'usuario'}
            onChange={handleFormChange}
            value='usuario'
            type="radio"
            id='usuario'
            name='role'
            className={stylesForm.inputSelect}
          />
          <label htmlFor="usuario" className={stylesForm.selectButton}>
            DESARROLLADOR
          </label>
        </span>
        <button className={`${stylesForm.button}`}>GUARDAR</button>
      </form>
  </div>
  )
}

export { Registro }

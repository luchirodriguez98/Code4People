import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'
import { useForm } from '../../Hooks/useForm'
import { ErrorModal } from '../../Components/ErrorModal/ErrorModal'
import styles from './Registro.module.css'
import stylesForm from '../../Styles/form.module.css'

function Registro () {
  const errorContext = useContext(ErrorContext)

  const [errors, setErrors] = useState(null)

  const { formValues, reset, handleFormChange } = useForm({
    nombre: '',
    email: '',
    pass: '',
    role: ''
  })

  const navigate = useNavigate()

  const saveNewUser = async (event) => {
    event.preventDefault()

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
      if (!response.ok && response.status === 400) {
        setErrors(data.errors)
        return
      }
      navigate('/')
      reset({
        nombre: '',
        email: '',
        pass: '',
        role: ''
      })
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
  errorContext.closeModal()
  return (
    <div className={`${styles.body}`}>
      <ErrorModal />
      <h1 className={`${styles.title}`}>Registra tu empresa!</h1>
      <form action="" className={`${stylesForm.form}`} onSubmit={saveNewUser}>
        <label htmlFor="nombre">NOMBRE</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder='Escribe tu nombre'
          value={formValues.nombre}
          onChange={handleFormChange}
          className={errors?.nombre ? stylesForm.invalidInput : undefined}
        />
        {errors?.nombre && <span>{errors.nombre}</span>}
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Escribe tu email'
          value={formValues.email}
          onChange={handleFormChange}
          className={errors?.email ? stylesForm.invalidInput : undefined}
        />
        {errors?.email && <span>{errors.email}</span>}
        <label htmlFor="pass">CLAVE</label>
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder='Escribe tu pass'
          value={formValues.pass}
          onChange={handleFormChange}
          className={errors?.pass ? stylesForm.invalidInput : undefined}
        />
        {errors?.pass && <span>{errors.pass}</span>}
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
        {errors?.role && <span>Debes seleccionar un tipo de usuario</span>}
        <button
          onClick={() => {
            errorContext.openModal()
            setErrors(null)
          }}
          className={`${stylesForm.button}`}
        >
          GUARDAR
        </button>
      </form>
  </div>
  )
}

export { Registro }

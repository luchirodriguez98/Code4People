import { useContext } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ErrorModal ({ mensaje }) {
  const { showErrorModal } = useContext(ErrorContext)

  if (showErrorModal) {
    toast.error(mensaje || 'Error en el formulario, vuelve a intentarlo', {
      position: 'bottom-right',
      theme: 'dark'
    })
  }
  return <ToastContainer />
}

export { ErrorModal }

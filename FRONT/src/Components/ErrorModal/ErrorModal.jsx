import { useContext } from 'react'
import { ErrorContext } from '../../Context/ErrorContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ErrorModal ({ mensaje }) {
  const { showErrorModal } = useContext(ErrorContext)

  if (showErrorModal) {
    toast.error(mensaje || 'Formulario incompleto', {
      position: 'bottom-right',
      theme: 'dark'
    })
  }
  return <ToastContainer />
}

export { ErrorModal }

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useErrorContext } from '../../Hooks/useErrorContext'

function ErrorModal ({ show, message }) {
  const { showErrorModal, errorMessage } = useErrorContext()

  if (showErrorModal) {
    toast.error(errorMessage, {
      position: 'bottom-right',
      theme: 'dark'
    })
  }

  return <ToastContainer />
}

export { ErrorModal }

import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from '../../Context/UserContext'
import { Nav } from '../../Components/Nav/Nav'
import { Layout } from '../../Components/Layout/Layout'
import { AppRoutes } from '../../Routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
      <UserContextProvider>
        <BrowserRouter>
            <Nav />
            <Layout>
              <AppRoutes />
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </Layout>
        </BrowserRouter>
      </UserContextProvider>
  )
}

export { App }

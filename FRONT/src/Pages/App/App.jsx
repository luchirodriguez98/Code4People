import { UserContextProvider } from '../../Context/UserContext'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Nav } from '../../Components/Nav/Nav'
import { Layout } from '../../Components/Layout/Layout'
import { Home } from '../Home/Home'
import { QuienesSomos } from '../QuienesSomos/QuienesSomos'
import { Proyectos } from '../Proyectos/Proyectos'
import { ProyectosRealizados } from '../ProyectosRealizados/ProyectosRealizados'
import { ProyectosDisponibles } from '../ProyectosDisponibles/ProyectosDisponibles'
import { DetalleProyecto } from '../DetalleProyecto/DetalleProyecto'
import { Contacto } from '../Contacto/Contacto'
import { Login } from '../Login/Login'
import { Registro } from '../Registro/Registro'
import { Cuenta } from '../Cuenta/Cuenta'
import { Mensajes } from '../Mensajes/Mensajes'
import { MensajesEnviados } from '../MensajesEnviados/MensajesEnviados'
import { MensajesRecibidos } from '../MensajesRecibidos/MensajesRecibidos'
import { PeticionesRealizadas } from '../PeticionesRealizadas/PeticionesRealizadas'
import { Peticion } from '../Peticion/Peticion'
import { NotFound } from '../NotFound/NotFound'
import { ProyectoTerminado } from '../ProyectoTerminado/ProyectoTerminado'
import { ProyectoNuevo } from '../ProyectoNuevo/ProyectoNuevo'
import { MensajeNuevo } from '../MensajeNuevo/MensajeNuevo'
import { PeticionesProyecto } from '../PeticionesProyecto/PeticionesProyecto'
import { PeticionNueva } from '../PeticionNueva/PeticionNueva'
import { TodosProyectos } from '../TodosProyectos/TodosProyectos'
import { TodosUsuarios } from '../TodosUsuarios/TodosUsuarios'
import { PrivateRoute } from '../../Routes/PrivateRoute'
import { PublicRoute } from '../../Routes/PublicRoute'
import { ErrorContextProvider } from '../../Context/ErrorContext'
import { ToastContainer } from 'react-toastify'

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/quienes-somos',
      element: <QuienesSomos />
    },
    {
      path: '/proyectos',
      element: <PrivateRoute hasRole='admin' />,
      children: [
        {
          path: '',
          element: <Proyectos />
        }
      ]
    },
    {
      path: '/proyectos/realizados',
      element: <ProyectosRealizados />
    },
    {
      path: '/proyectos/disponibles',
      element: <PrivateRoute hasRole= {['usuario', 'admin']} path='/proyectos'/>,
      children: [
        {
          path: '',
          element: <ProyectosDisponibles />
        }
      ]
    },
    {
      path: '/proyectos/disponibles/:id',
      element: <PrivateRoute hasRole={['usuario', 'admin']} path='/proyectos'/>,
      children: [
        {
          path: '',
          element: <DetalleProyecto />
        }
      ]
    },
    {
      path: '/proyectos/publicarTerminado',
      element: <PrivateRoute hasRole={['empresa', 'usuario', 'admin']} path='/proyectos'/>,
      children: [
        {
          path: '',
          element: <ProyectoTerminado />
        }
      ]
    },
    {
      path: '/proyectos/publicarNuevo',
      element: <PrivateRoute hasRole={['empresa', 'admin']} path='/proyectos'/>,
      children: [
        {
          path: '',
          element: <ProyectoNuevo />
        }
      ]
    },
    {
      path: '/contacto',
      element: <Contacto />
    },
    {
      path: '/login',
      element: <PublicRoute />,
      children: [
        {
          path: '',
          element: <Login />
        }
      ]
    },
    {
      path: '/registro',
      element: <PublicRoute />,
      children: [
        {
          path: '',
          element: <Registro />
        }
      ]
    },
    {
      path: '/cuenta',
      element: <PrivateRoute hasRole={['empresa', 'usuario', 'admin']}/>,
      children: [
        {
          path: '',
          element: <Cuenta />
        }
      ]
    },
    {
      path: '/mensajes',
      element: <PrivateRoute hasRole={['empresa', 'usuario', 'admin']}/>,
      children: [
        {
          path: '',
          element: <Mensajes />
        }
      ]
    },
    {
      path: '/mensajes/enviados',
      element: <PrivateRoute hasRole={['empresa', 'usuario', 'admin']}/>,
      children: [
        {
          path: '',
          element: <MensajesEnviados />
        }
      ]
    },
    {
      path: '/mensajes/recibidos',
      element: <PrivateRoute hasRole={['empresa', 'usuario', 'admin']}/>,
      children: [
        {
          path: '',
          element: <MensajesRecibidos />
        }
      ]
    },
    {
      path: '/mensajes/nuevo',
      element: <PrivateRoute hasRole={['empresa', 'usuario', 'admin']}/>,
      children: [
        {
          path: '',
          element: <MensajeNuevo />
        }
      ]
    },
    {
      path: '/peticion/realizadas',
      element: <PrivateRoute hasRole={['usuario', 'admin']} path='/cuenta' />,
      children: [
        {
          path: '',
          element: <PeticionesRealizadas />
        }
      ]
    },
    {
      path: '/peticion/proyecto',
      element: <PrivateRoute hasRole={['empresa', 'admin']} path='/cuenta'/>,
      children: [
        {
          path: '',
          element: <PeticionesProyecto />
        }
      ]
    },
    {
      path: '/peticion/proyecto/:id',
      element: <PrivateRoute hasRole={['empresa', 'admin']} path='/'/>,
      children: [
        {
          path: '',
          element: <Peticion />
        }
      ]
    },
    {
      path: '/peticion/nueva',
      element: <PrivateRoute hasRole={['usuario', 'admin']} path='/'/>,
      children: [
        {
          path: '',
          element: <PeticionNueva />
        }
      ]
    },
    {
      path: '/admin/proyectos',
      element: <PrivateRoute hasRole='admin' path='/'/>,
      children: [
        {
          path: '',
          element: <TodosProyectos />
        }
      ]
    },
    {
      path: '/admin/usuarios',
      element: <PrivateRoute hasRole='admin' path='/' />,
      children: [
        {
          path: '',
          element: <TodosUsuarios />
        }
      ]
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ])
  return routes
}

function App () {
  return (
      <UserContextProvider>
        <BrowserRouter>
          <ErrorContextProvider>
            <Nav />
            <Layout>
              <AppRoutes />
              <ToastContainer />
            </Layout>
          </ErrorContextProvider>
        </BrowserRouter>
      </UserContextProvider>
  )
}

export { App }

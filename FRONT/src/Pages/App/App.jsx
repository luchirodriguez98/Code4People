import { MyContextProvider } from '../../Context/Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Nav } from '../../Components/Nav/Nav'
import { Layout } from '../../Components/Layout/Layout'
import { Home } from '../Home/Home'
import { QuienesSomos } from '../QuienesSomos/QuienesSomos'
import { Informacion } from '../Informacion/Informacion'
import { Proyectos } from '../Proyectos/Proyectos'
import { ProyectosRealizados } from '../ProyectosRealizados/ProyectosRealizados'
import { ProyectosDisponibles } from '../ProyectosDisponibles/ProyectosDisponibles'
import { DetalleProyecto } from '../DetalleProyecto/DetalleProyecto'
import { Contacto } from '../Contacto/Contacto'
import { Login } from '../Login/Login'
import { Registro } from '../Registro/Registro'
import { Cuenta } from '../Cuenta/Cuenta'
// import { ConfiguracionCuenta } from '../ConfiguracionCuenta/ConfiguracionCuenta'
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
      path: '/informacion',
      element: <Informacion />
    },
    {
      path: '/proyectos',
      element: <Proyectos />
    },
    {
      path: '/proyectos/realizados',
      element: <ProyectosRealizados />
    },
    {
      path: '/proyectos/disponibles',
      element: <ProyectosDisponibles />
    },
    {
      path: '/proyectos/disponibles/:id',
      element: <DetalleProyecto />
    },
    {
      path: '/proyectos/publicarTerminado',
      element: <ProyectoTerminado />
    },
    {
      path: '/proyectos/publicarNuevo',
      element: <ProyectoNuevo />
    },
    {
      path: '/contacto',
      element: <Contacto />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/registro',
      element: <Registro />
    },
    {
      path: '/cuenta',
      element: <Cuenta />
    },
    // {
    //   path: '/configuracion-cuenta',
    //   element: <ConfiguracionCuenta />
    // },
    {
      path: '/mensajes',
      element: <Mensajes />
    },
    {
      path: '/mensajes/enviados',
      element: <MensajesEnviados />
    },
    {
      path: '/mensajes/recibidos',
      element: <MensajesRecibidos />
    },
    {
      path: '/mensajes/nuevo',
      element: <MensajeNuevo />
    },
    {
      path: '/peticion/realizadas',
      element: <PeticionesRealizadas />
    },
    {
      path: '/peticion/proyecto',
      element: <PeticionesProyecto />
    },
    {
      path: '/peticion/proyecto/:id',
      element: <Peticion />
    },
    {
      path: '/peticion/nueva',
      element: <PeticionNueva />
    },
    {
      path: '/admin/proyectos',
      element: <TodosProyectos />
    },
    {
      path: '/admin/usuarios',
      element: <TodosUsuarios />
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
      <MyContextProvider>
        <BrowserRouter>
          <Nav />
          <Layout>
          <AppRoutes />
          </Layout>
        </BrowserRouter>
      </MyContextProvider>
  )
}

export { App }

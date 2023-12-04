import { MyContextProvider } from '../../Context/Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Nav } from '../../Components/Nav/Nav'
import { Layout } from '../../Components/Layout/Layout'
import { Home } from '../Home/Home'
import { QuienesSomos } from '../QuienesSomos/QuienesSomos'
import { Planes } from '../Planes/Planes'
import { Proyectos } from '../Proyectos/Proyectos'
import { ProyectosRealizados } from '../ProyectosRealizados/ProyectosRealizados'
import { ProyectosDisponibles } from '../ProyectosDisponibles/ProyectosDisponibles'
import { Contacto } from '../Contacto/Contacto'
import { Login } from '../Login/Login'
import { Registro } from '../Registro/Registro'
import { Cuenta } from '../Cuenta/Cuenta'
import { ConfiguracionCuenta } from '../ConfiguracionCuenta/ConfiguracionCuenta'
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
import { SolicitudesColaboradores } from '../SolicitudesColaboradores/SolicitudesColaboradores'
import { SolicitudColaborador } from '../SolicitudColaborador/SolicitudColaborador'
import { SolicitudesProyectos } from '../SolicitudesProyectos/SolicitudesProyectos'

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
      path: '/planes',
      element: <Planes />
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
    {
      path: '/configuracion-cuenta',
      element: <ConfiguracionCuenta />
    },
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
      path: '/peticionesRealizadas',
      element: <PeticionesRealizadas />
    },
    {
      path: '/peticionesProyecto',
      element: <PeticionesProyecto />
    },
    {
      path: '/peticion/:id',
      element: <Peticion />
    },
    {
      path: '/peticion/nueva',
      element: <PeticionNueva />
    },
    {
      path: '/solicitudes/altaColaborador',
      element: <SolicitudesColaboradores />
    },
    {
      path: '/solicitudes/altaColaborador/:id',
      element: <SolicitudColaborador />
    },
    {
      path: '/solicitudes/proyectosTerminados',
      element: <SolicitudesProyectos />
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

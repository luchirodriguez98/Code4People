
import { MyContextProvider } from '../../Context/Context';
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Nav } from '../../Components/Nav/Nav';
import { Layout } from '../../Components/Layout/Layout';
import { Home } from '../Home/Home';
import { QuienesSomos } from '../QuienesSomos/QuienesSomos';
import { Planes } from '../Planes/Planes';
import { PeticionesSolicitadas } from '../PeticionesSolicitadas/PeticionesSolicitadas';
import { Proyectos } from '../Proyectos/Proyectos'
import { ProyectosRealizados } from '../ProyectosRealizados/ProyectosRealizados';
import { ProyectosDisponibles } from '../ProyectosDisponibles/ProyectosDisponibles';
import { Contacto } from '../Contacto/Contacto';
import { Login } from '../Login/Login';
import { Registro } from '../Registro/Registro';
import { Cuenta } from '../Cuenta/Cuenta';
import { ConfiguracionCuenta } from '../ConfiguracionCuenta/ConfiguracionCuenta';
import { Mensajes } from '../Mensajes/Mensajes';
import { MensajesEnviados } from '../MensajesEnviados/MensajesEnviados';
import { MensajesRecibidos } from '../MensajesRecibidos/MensajesRecibidos';
import { Notificaciones } from '../Notificaciones/Notificaciones';
import { PeticionesRealizadas } from '../PeticionesRealizadas/PeticionesRealizadas';
import { Peticion } from '../Peticion/Peticion';
import { NotFound } from '../NotFound/NotFound';

const AppRoutes = () =>{
  let routes = useRoutes([
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
        path: '/peticiones-solicitadas',
        element: <PeticionesSolicitadas />
      },
      {
        path: '/proyectos',
        element: <Proyectos />
      },
      {
        path: '/proyectos-realizados',
        element: <ProyectosRealizados />
      },
      {
        path: '/proyectos-disponibles',
        element: <ProyectosDisponibles />
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
        path: '/mensajes-enviados',
        element: <MensajesEnviados />
      },
      {
        path: '/mensajes-recibidos',
        element: <MensajesRecibidos />
      },
      {
        path: '/notificaciones',
        element: <Notificaciones />
      },
      {
        path: '/peticiones-realizadas',
        element: <PeticionesRealizadas />
      },
      {
        path: '/peticion/:id',
        element: <Peticion />
      },
      {
        path: '/*',
        element: <NotFound />
      },
    ])
  return routes
  };


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
    );
}

export { App };

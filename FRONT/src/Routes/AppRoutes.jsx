import { useRoutes } from 'react-router-dom'
import {
  Home,
  QuienesSomos,
  Proyectos,
  ProyectosRealizados,
  ProyectosDisponibles,
  DetalleProyecto,
  Contacto,
  Login,
  Registro,
  Cuenta,
  Mensajes,
  MensajesEnviados,
  MensajesRecibidos,
  PeticionesRealizadas,
  Peticion,
  NotFound,
  PublicarProyectoTerminado,
  ProyectoNuevo,
  MensajeNuevo,
  PeticionesProyecto,
  PeticionNueva,
  TodosProyectos,
  TodosUsuarios
} from '../Hooks/useAppRoutes.js'
import { PrivateRoute } from './PrivateRoute.jsx'
import { PublicRoute } from './PublicRoute.jsx'

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
          element: <PublicarProyectoTerminado />
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

export { AppRoutes }

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'

import SolicitudesTarjetas, { action as nuevaSolicitudAction } from './pages/SolicitudesTarjetas'
import TarjetasSolicitadas ,{loader as tarjetasLoader} from './pages/TarjetasSolicitadas'
import TarjetasAprobadas ,{loader as tarjetasAprobadasLoader}from './pages/TarjetasAprobadas'
import {action as eliminarSolicitud} from "./components/Clientes"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TarjetasSolicitadas/>,
        loader:tarjetasLoader,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/solicitudes',
        element: < SolicitudesTarjetas />,
        errorElement: <ErrorPage />,
        action: nuevaSolicitudAction
      },
      {
        path: '/tarjetasSolicitadas',
        element: <TarjetasSolicitadas />,
        loader:tarjetasLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/tarjetasAprobadas',
        element: <TarjetasAprobadas />,
        loader: tarjetasAprobadasLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/tarjetasSolicitadas/:solicitudId/eliminar',
        action:eliminarSolicitud,
        errorElement: <ErrorPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)

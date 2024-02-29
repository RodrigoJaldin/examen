import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-green-900 px-5 py-10' >
        <h2 className='text-4xl font-black text-center text-white'>Banco Credit Suisse</h2>
        <nav className='mt-10'>
          <Link className={`${location.pathname === '/solicitudes' ? 'text-green-500' : 'text-white'} text-2xl block mt-2 hover:text-green-500`} to="/solicitudes">Solicitud de Tarjetas</Link>
          <Link className={`${location.pathname === '/tarjetasSolicitadas' ? 'text-green-500' : 'text-white'} text-2xl block mt-2 hover:text-green-500`} to="/tarjetasSolicitadas">Tarjetas Solicitudas  </Link>
          <Link className={`${location.pathname === '/tarjetasAprobadas' ? 'text-green-500' : 'text-white'} text-2xl block mt-2 hover:text-green-500`} to="/tarjetasAprobadas">Tarjetas Aprobadas</Link>

        </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>

  )
}

export default Layout

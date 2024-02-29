
import { obtenerClientes } from '../data/clientes'

export function loader() {
  const clientes = obtenerClientes()
  console.log(clientes)
  return clientes
}

const Index = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Bienvenido al Banco Credit Suisse!</h1>
        <p className="text-lg text-gray-600 mb-8">Aquí puedes encontrar información sobre nuestros clientes.</p>
      </div>
    </>
  )
}

export default Index

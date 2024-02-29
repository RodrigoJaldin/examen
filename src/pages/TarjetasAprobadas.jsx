
import { obtenerSolicitudesAprobadas } from '../data/tarjetas'
import { useLoaderData } from 'react-router-dom'
import Aprobados from '../components/Aprobados'

export function loader() {
    const tarjetas = obtenerSolicitudesAprobadas()
    console.log(tarjetas)
    return tarjetas
}

function TarjetasAprobadas() {
    const tarjetas = useLoaderData()

    return (
        <>
            <h1 className='font-black text-4xl text-green-900'>Tarjetas Solicitadas</h1>
            <p className='mt-3 '> Tus Tarjetas</p>
            {tarjetas.length > 0 ? (
                <table className='w-full bg-white shodow mt-5 table-auto'>
                    <thead className='bg-green-800 text-white '>
                        <tr>
                            <th className='p-2'> Cliente</th>
                            <th className='p-2'> Informacion</th>
                            <th className='p-2'> monto</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tarjetas.map((tarjeta) => (
                            <Aprobados
                                tarjeta={tarjeta}
                                key={tarjeta.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='text-center mt-10 '>No hay Clientes</p>
            )}
        </>
    )
}

export default TarjetasAprobadas

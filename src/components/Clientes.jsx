import { useState } from 'react'
import { Form, redirect } from 'react-router-dom'
import { eliminarSolicitud, actualizarEstado } from "../data/tarjetas"

export async function action({ params }) {
   await eliminarSolicitud(params.solicitudId);
    return redirect('/');
}

const Clientes = ({ tarjeta }) => {

    const { nombre, documento, email, telefono, id, monto, estado } = tarjeta
    const [estadoSolicitud, setEstadoSolicitud] = useState(estado);
    const [aprobado, setAprobado] = useState(false);

    const handleAprobar = async () => {
        await actualizarEstado(id);
        setEstadoSolicitud('aprobado');
        setAprobado(true);

    };
    
     if (aprobado) {
         alert('¡La solicitud ha sido aprobada!');
         setAprobado(false);
     }

    return (
        <tr className='border-b'>
            <td className='p-6 space-y-2' >
                <p className='text-2xl text-gray-800 '>{nombre}</p>
                <p>{documento}</p>
            </td>
            <td className='p-6 '>
                <p className='text-gray-600'>Email: <span className='text-gray-800 uppercase font-bold'>{email}</span></p>
                <p className='text-gray-600'>Telefono: <span className='text-gray-800 uppercase font-bold'>{telefono}</span></p>
                <p className='text-gray-600'>Monto: <span className='text-gray-800 uppercase font-bold'>{monto}</span></p>

            </td>
            <td className='p-6 flex gap-3'>
                <button
                    type='button'
                    className='text-green-600 hover:text-green-700 uppercase font:bold text-xs'
                    onClick={handleAprobar}
                >
                    Aprobar
                </button>
                <Form
                    method='post'
                    action={`/tarjetasSolicitadas/${id}/eliminar`}
                    onSubmit={(e) => {
                        if (!confirm('Estas Seguro de Elimnar el Registro')) {
                            e.preventDefault()
                        }

                    }}
                >
                    <button
                        type='submit'
                        className='text-red-600 hover:text-red-700 uppercase font:bold text-xs'
                    >
                        Rechazar
                    </button>
                </Form>


            </td>
        </tr>
    )
}

export default Clientes

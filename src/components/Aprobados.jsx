import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { actualizarMontoTarjeta } from '../data/tarjetas';

function Aprobados({ tarjeta }) {
    const navigate = useNavigate();
    const [monto, setMonto] = useState(tarjeta.monto);

    const { nombre, documento, email, telefono, id } = tarjeta;

    const actualizarMonto = async (newMonto) => {
        setMonto(newMonto);
        await actualizarMontoTarjeta(id, newMonto);
    };

    const handleMontoChange = (event) => {
        const newMonto = event.target.value;
        actualizarMonto(newMonto);
    };
    return (
        <tr className='border-b'>
            <td className='p-6 space-y-2' >
                <p className='text-2xl text-gray-800 '>{nombre}</p>
                <p>{documento}</p>
            </td>
            <td className='p-6 '>
                <p className='text-gray-600'>Email: <span className='text-gray-800 uppercase font-bold'>{email}</span></p>
                <p className='text-gray-600'>Telefono: <span className='text-gray-800 uppercase font-bold'>{telefono}</span></p>
            </td>
            <td className='p-6 flex gap-3'>
                <input
                    type='text'
                    placeholder='Monto'
                    value={monto}
                    onChange={handleMontoChange}
                    className='border rounded px-2 py-1'
                />
            </td>
        </tr>
    );
}

export default Aprobados;

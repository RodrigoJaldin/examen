import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import {agregarSolicitud} from "../data/tarjetas"

export async function action({ request }) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')

    //validaciones
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')

    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if (!regex.test(email)) {
        errores.push('El email no es valido')

    }

    if (Object.keys(errores).length) {
        return errores
    }
    console.log(datos)
    /await agregarSolicitud(datos)

    return redirect('/tarjetasSolicitadas')
}



function SolicitudesTarjetas() {
    const errores = useActionData()

    const navigate = useNavigate();

    return (
        <>
            <h1 className='font-black text-4xl text-green-900'>Nuevo Solicitud</h1>
            <p className='mt-3 '>Llena todos los campos para registrar un Solicitud</p>
            <div className='flex justify-end'>
                <button className='bg-green-800 text-white px-3 py-1 font-bold uppercase'
                    onClick={() => navigate('/')}
                >
                    Volver
                </button>
            </div>

            {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

            <Form
                method='post'
            >

                <Formulario></Formulario>
                <input type="submit"
                    className='mt-5 w-full bg-green-800 uppercase font-bold text-white p-3 hover:bg-green-900 cursor-pointer'
                    value='Procesar Solicitud'
                />
            </Form>
        </>
    )
}

export default SolicitudesTarjetas

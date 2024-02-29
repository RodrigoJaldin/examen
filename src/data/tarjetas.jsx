export async function obtenerSolicitudes() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado;
}

export async function obtenerSolicitudesAprobadas() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json();
    const solicitudesAprobadas = resultado.filter(solicitud => solicitud.estado === 'aprobado');
    return solicitudesAprobadas;
}


export async function agregarSolicitud(datos) {
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {

    }
}


export async function actualizarMontoTarjeta(id, nuevoMonto) {
    try {
        await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ monto: nuevoMonto })
        });
    } catch (error) {
        console.error('Error actualizando monto:', error);
    }
}

export async function eliminarSolicitud(id) {

console.log( "eliminar id "+id)
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',

        })
        await respuesta.json()
    } catch (error) {

    }
}

export async function actualizarEstado(id) {
    try {
        await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ estado: 'aprobado' })
        });
    } catch (error) {
        console.error('Error actualizando estado:', error); 
    }
}

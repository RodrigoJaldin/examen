const Formulario = ({ cliente }) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={cliente?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="ci"
                >Documento de identidad:</label>
                <input
                    id="ci"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Ingrese su documento de identidad"
                    name="documento"
                    defaultValue={cliente?.documento}

                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={cliente?.email}

                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    defaultValue={cliente?.telefono}

                />

            </div>
            <div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="monto"
                    >Monto:</label>
                    <input
                        id="monto"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Monto Solicitado"
                        name="monto"
                        defaultValue={cliente?.monto}

                    />

                </div>
            </div>
            <input
                type="hidden"
                name="estado"
                value="espera"
            />

        </>
    )
}

export default Formulario
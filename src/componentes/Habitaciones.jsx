import React from 'react'

const Habitaciones = ({habitaciones}) => {
    return (
        <div>
            {
                habitaciones.map(habitacion => (
                    <div key={habitacion.id} className="habitaciones" style={{border: '1px solid #000', margin: '10px'}}>
                        <img src={habitacion.imagenes[0].path} alt="imagen-habitacion" style={{width: "100%", height: "auto"}} />
                        <div className="p-2">
                            <h5>{habitacion.nombre}</h5>
                            <p><span className="fw-bold">Descripción:</span> {habitacion.descripcion}</p>
                            <p><span className="fw-bold">Precio: $</span>{habitacion.precio}</p>
                        </div>
                    </div>  
                ))
            }
        </div>
    )
}

export default Habitaciones

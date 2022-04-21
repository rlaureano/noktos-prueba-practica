import React from 'react'

const Amenidades = ({amenidades}) => {
    return (
        <div 
            className="p-5"
        >   
            { amenidades.map( amenidad => (
                <div key={amenidad.id}>
                    <h6><i className={amenidad.icon} style={{fontSize:"19px"}}></i> <span className="fw-bold"> {amenidad.nombre}</span></h6>
                    <p style={{paddingLeft: '1em'}}><span className="fw-bold">Descripción: </span>{amenidad.descripcion}</p>
                </div>
            ))}
        </div>
    )
}

export default Amenidades

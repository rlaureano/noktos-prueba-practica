import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Imagenes = ({imagenes}) => {
    return (
        <Carousel>

            {
                imagenes.map( imagen => (
                    <Carousel.Item key={imagen.id}>
                        <img
                            className="d-block w-100"
                            src={imagen.path}
                            alt={imagen.id}
                            style={{maxWidth: '100%', maxHeight: 'auto'}}
                        />
                    </Carousel.Item>
                ))
            }

            
        </Carousel>
    )
}

export default Imagenes

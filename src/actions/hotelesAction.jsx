import {
    CONSULTAR_HOTELES,
    CONSULTAR_HOTELES_EXITO,
    CONSULTAR_HOTELES_ERROR
} from '../types'


export function consultarHotelesAction( data ) {
    return async dispatch => {
        
        dispatch( consultarHoteles() )

        const init = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer  ${data.token}`,
              }
        }
        const url = `https://desarrollo.api.noktos.com/api/admin/hosts/${data.cantidad}`

        const hoteles = await fetch( url, init )
            .then(response => response.json())
            .catch(err => console.error(err))

        if( hoteles.host.length > 0 ) {

            dispatch( consultarHotelesExito( hoteles.host ) )

        } else { 

            dispatch( consultarHotelesError( 'NO HAY DATOS PARA MOSTRAR' ) )

        }
        
    }
}

const consultarHoteles = () => ({
    type: CONSULTAR_HOTELES,
})

const consultarHotelesExito = hoteles => ({
    type: CONSULTAR_HOTELES_EXITO,
    playload : hoteles
})

const consultarHotelesError = mensaje => ({
    type: CONSULTAR_HOTELES_ERROR,
    playload : mensaje
})

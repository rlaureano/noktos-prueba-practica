import {
    INICIAR_SESION ,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR,
} from '../types'

export function iniciarSesionAction( credenciales ) {
    return async dispatch => {
        
        dispatch( iniciarSesion() )

        const body = JSON.stringify( credenciales )
        const init = {
            method: 'POST',
            body,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        }
        const url = 'https://desarrollo.api.noktos.com/api/login'

        const sesion = await fetch( url, init )
            .then(response => response.json())
            .catch(err => console.error(err))

        if( sesion.res === true ) {

            dispatch( iniciarSesionExito( sesion.token ) )

        } else { 

            dispatch( iniciarSesionError( sesion.message ) )

        }
        
    }
}

const iniciarSesion = () => ({
    type: INICIAR_SESION,
})

const iniciarSesionExito = token => ({
    type: INICIAR_SESION_EXITO,
    playload : token
})

const iniciarSesionError = mensaje => ({
    type: INICIAR_SESION_ERROR,
    playload : mensaje
})
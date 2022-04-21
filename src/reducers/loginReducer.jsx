import {
    INICIAR_SESION ,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR,
} from '../types'

const initialState = {
    token: null,
    mensajeError: null,
    loading: false,
}

export default function( state= initialState, action ) {

    switch ( action.type ) {
        case INICIAR_SESION:
            return {
                ...state,
                loading: true,
            }
        case INICIAR_SESION_EXITO:
            return {
                ...state,
                token: action.playload,
                mensajeError: null,
                loading: false,
            }
        case INICIAR_SESION_ERROR:
            return {
                ...state,
                mensajeError: action.playload,
                token: null,
                loading: false,
            }
        default:
            return state
    }
}
import {
    CONSULTAR_HOTELES,
    CONSULTAR_HOTELES_EXITO,
    CONSULTAR_HOTELES_ERROR
} from '../types'

const initialState = {
    lista: [],
    error: null,
    loading: false
}

export default function ( state = initialState, action ) {

    switch ( action.type ) {

        case CONSULTAR_HOTELES:
            return {
                ...state,
                loading: true
            }

        case CONSULTAR_HOTELES_EXITO:
            return {
                ...state,
                loading: false,
                lista: action.playload,
            }
        case CONSULTAR_HOTELES_ERROR:
            return {
                lista: [],
                loading: false,
                error: action.playload,
            }
        default: 
            return state
    }
}
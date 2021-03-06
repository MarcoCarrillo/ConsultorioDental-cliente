import {
    PAGOS_CLIENTE,
    AGREGAR_PAGO,
    MOSTRAR_ALERTA_PAGO,
    OCULTAR_ALERTA_PAGO,
    ELIMINAR_PAGO,
    PAGO_ACTUAL,
    ACTUALIZAR_PAGO
} from '../../types';

//eslint-disable-next-line 
export default (state, action) => {
    switch (action.type) {
        case PAGOS_CLIENTE:
            return{
                ...state,
                pagoscliente: action.payload,
                errorpago: false
            }
        case AGREGAR_PAGO:
            return{
                ...state,
                pagoscliente: [...state.pagoscliente, action.payload],
                errorpago: false,
                pagoseleccionado: null
            }
        case MOSTRAR_ALERTA_PAGO:
            return{
                ...state,
                errorpago: action.payload
            }
        case OCULTAR_ALERTA_PAGO:
            return{
                ...state,
                errorpago: false
            }
        case ELIMINAR_PAGO:
            return{
                ...state,
                pagoscliente: state.pagoscliente.filter( pago => pago._id !== action.payload)
            }
        case PAGO_ACTUAL:
            return{
                ...state,
                pagoseleccionado: action.payload
            }
        case ACTUALIZAR_PAGO:
            return{
                ...state,
                pagoscliente: state.pagoscliente.map(pago => pago._id === action.payload._id ? action.payload : pago),
                pagoseleccionado: null
            }

        default:
            return state;
    }
}
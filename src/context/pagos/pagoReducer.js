import {
    PAGOS_CLIENTE,
    AGREGAR_PAGO,
    VALIDAR_FORMULARIO_PAGO,
    ELIMINAR_PAGO,
    PAGO_ACTUAL
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case PAGOS_CLIENTE:
            return{
                ...state,
                pagoscliente: state.pagos.filter( pago => pago.clienteId === action.payload)
            }
        case AGREGAR_PAGO:
            return{
                ...state,
                pagos: [...state.pagos, action.payload],
                errorpago: false,
                pagoseleccionado: null
            }
        case VALIDAR_FORMULARIO_PAGO:
            return{
                ...state,
                errorpago: true
            }
        case ELIMINAR_PAGO:
            return{
                ...state,
                pagos: state.pagos.filter( pago => pago.id !== action.payload)
            }
        case PAGO_ACTUAL:
            return{
                ...state,
                pagoseleccionado: action.payload
            }

        default:
            return state;
    }
}
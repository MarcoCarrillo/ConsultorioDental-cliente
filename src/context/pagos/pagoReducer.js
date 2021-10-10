import {
    PAGOS_CLIENTE,
    AGREGAR_PAGO
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
                pagos: [...state.pagos, action.payload]
            }
        
        default:
            return state;
    }
}
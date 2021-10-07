import {
    CARGOS_CLIENTE
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case CARGOS_CLIENTE:
            return{
                ...state,
                cargoscliente: state.cargos.filter(cargo => cargo.clienteId === action.payload)
            }

        default:
            return state;
    }
}
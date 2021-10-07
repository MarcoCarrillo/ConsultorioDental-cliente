import {
    CARGOS_CLIENTE,
    AGREGAR_CARGO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case CARGOS_CLIENTE:
            return{
                ...state,
                cargoscliente: state.cargos.filter(cargo => cargo.clienteId === action.payload)
            }
        case AGREGAR_CARGO:
            return{
                ...state,
                cargos: [...state.cargos, action.payload]
            }

        default:
            return state;
    }
}
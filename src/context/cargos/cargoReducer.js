import {
    CARGOS_CLIENTE,
    AGREGAR_CARGO,
    VALIDAR_FORMULARIO_CARGO,
    ELIMINAR_CARGO
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
                cargos: [...state.cargos, action.payload],
                errorcargo: false
            }
        case VALIDAR_FORMULARIO_CARGO:
            return{
                ...state,
                errorcargo: true
            }
        case ELIMINAR_CARGO:
            return{
                ...state,
                cargos: state.cargos.filter(cargo => cargo.id !== action.payload)
            }

        default:
            return state;
    }
}
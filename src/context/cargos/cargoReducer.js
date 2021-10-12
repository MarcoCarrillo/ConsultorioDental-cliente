import {
    CARGOS_CLIENTE,
    AGREGAR_CARGO,
    VALIDAR_FORMULARIO_CARGO,
    ELIMINAR_CARGO,
    CARGO_ACTUAL,
    ACTUALIZAR_CARGO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case CARGOS_CLIENTE:
            return{
                ...state,
                cargoscliente: state.cargos.filter(cargo => cargo.clienteId === action.payload),
                errorcargo: false
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
        case CARGO_ACTUAL:
            return{
                ...state,
                cargoseleccionado: action.payload
            }
        case ACTUALIZAR_CARGO:
            return{
                ...state,
                cargos: state.cargos.map(cargo => cargo.id === action.payload.id ? action.payload : cargo),
                cargoseleccionado: null
            }

        default:
            return state;
    }
}
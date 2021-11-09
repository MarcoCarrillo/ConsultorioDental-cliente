import {
    CARGOS_CLIENTE,
    AGREGAR_CARGO,
    VALIDAR_FORMULARIO_CARGO,
    ELIMINAR_CARGO,
    CARGO_ACTUAL,
    ACTUALIZAR_CARGO
} from '../../types';

//eslint-disable-next-line 
export default (state, action) => {
    switch (action.type) {
        case CARGOS_CLIENTE:
            return{
                ...state,
                cargoscliente: action.payload,
                errorcargo: false
            }
        case AGREGAR_CARGO:
            return{
                ...state,
                cargoscliente: [...state.cargoscliente, action.payload],
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
                cargoscliente: state.cargoscliente.filter(cargo => cargo._id !== action.payload)
            }
        case CARGO_ACTUAL:
            return{
                ...state,
                cargoseleccionado: action.payload
            }
        case ACTUALIZAR_CARGO:
            return{
                ...state,
                cargoscliente: state.cargoscliente.map(cargo => cargo._id === action.payload._id ? action.payload : cargo),
                cargoseleccionado: null
            }

        default:
            return state;
    }
}
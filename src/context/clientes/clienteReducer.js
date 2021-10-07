import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE,
    OBTENER_CLIENTES,
    AGREGAR_CLIENTE,
    VALIDAR_FORMULARIO_CLIENTE,
    CLIENTE_ACTUAL,
    ELIMINAR_CLIENTE
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case MOSTRAR_FORMULARIO_CLIENTE:
            return{
                ...state,
                formulario: true
            }
        case OCULTAR_FORMULARIO_CLIENTE:
            return{
                ...state,
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO_CLIENTE:
            return{
                ...state,
                errorformulario: true
            }
        case OBTENER_CLIENTES:
            return{
                ...state,
                clientes: action.payload
            }
        case AGREGAR_CLIENTE:
            return{
                ...state,
                clientes: [...state.clientes, action.payload],
                formulario: false,
                errorformulario: false
            }
        case CLIENTE_ACTUAL:
            return{
                ...state,
                cliente: state.clientes.filter(cliente => cliente.id === action.payload)
            }
        case ELIMINAR_CLIENTE:
            return{
                ...state,
                clientes: state.clientes.filter(cliente => cliente.id !== action.payload), //Traer los que no sean iguales,
                cliente: null
            }
        default: 
            return state;
    }
}
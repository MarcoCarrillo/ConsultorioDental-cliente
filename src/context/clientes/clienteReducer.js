import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE,
    OBTENER_CLIENTES,
    AGREGAR_CLIENTE,
    MOSTRAR_ALERTA_CLIENTE,
    OCULTAR_ALERTA_CLIENTE,
    CLIENTE_ACTUAL,
    ELIMINAR_CLIENTE,
    CLIENTE_ERROR
} from '../../types';

//eslint-disable-next-line 
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
        case MOSTRAR_ALERTA_CLIENTE:
            return{
                ...state,
                errorformulario: action.payload
            }
        case OCULTAR_ALERTA_CLIENTE:
            return{
                ...state,
                errorformulario: false
            }
        case OBTENER_CLIENTES:
            // console.log(action.payload);
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
                cliente: state.clientes.filter(cliente => cliente._id === action.payload)
            }
        case ELIMINAR_CLIENTE:
            return{
                ...state,
                clientes: state.clientes.filter(cliente => cliente._id !== action.payload), //Traer los que no sean iguales,
                cliente: null
            }
        case CLIENTE_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default: 
            return state;
    }
}
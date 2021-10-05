import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE,
    OBTENER_CLIENTES,
    AGREGAR_CLIENTE
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
                formulario: false
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
                formulario: false
            }

        default: 
            return state;
    }
}
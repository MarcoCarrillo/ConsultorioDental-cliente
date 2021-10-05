import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE,
    OBTENER_CLIENTES
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

        default: 
            return state;
    }
}
import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE
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

        default: 
            return state;
    }
}
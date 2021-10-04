import React, {useReducer} from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';

import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE
} from '../../types';

const ClienteState = props => {
    const initialState = {
        formulario: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(clienteReducer, initialState);

    //Funciones de clientes
    const mostrarFormulario = () =>{
        dispatch({
            type: MOSTRAR_FORMULARIO_CLIENTE
        })
    }
    const ocultarFormulario = () =>{
        dispatch({
            type: OCULTAR_FORMULARIO_CLIENTE
        })
    }


    return(
        <clienteContext.Provider
            value={{
                formulario: state.formulario,
                mostrarFormulario,
                ocultarFormulario
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
}

export default ClienteState;
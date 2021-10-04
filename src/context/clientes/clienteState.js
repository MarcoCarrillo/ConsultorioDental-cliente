import React, {useReducer} from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';

import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE
} from '../../types';

const ClienteState = props => {
    const initialState = {
        clientes : [
            {id:1, nombre: 'Memo Ochoa', edad: '30', telefono: '6181762612', tratamiento: 'Muelas picadas'},
            {id:2, nombre: 'Leo Messi', edad: '50', telefono: '6181762611', tratamiento: 'Brackets'},
            {id:3, nombre: 'Neymar', edad: '20', telefono: '6181762613', tratamiento: 'Muelas del juicio'},
            {id:4, nombre: 'Pelé', edad: '80', telefono: '6181762614', tratamiento: 'Extraccion'},
            {id:5, nombre: 'Hugo Sanchezz', edad: '80', telefono: '727829278', tratamiento: 'Modesto'}
        ],
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
                clientes: state.clientes,
                mostrarFormulario,
                ocultarFormulario
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
}

export default ClienteState;
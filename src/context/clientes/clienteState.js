import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';

import { 
    MOSTRAR_FORMULARIO_CLIENTE,
    OCULTAR_FORMULARIO_CLIENTE,
    VALIDAR_FORMULARIO_CLIENTE,
    OBTENER_CLIENTES,
    AGREGAR_CLIENTE,
    CLIENTE_ACTUAL,
    ELIMINAR_CLIENTE
} from '../../types';

const ClienteState = props => {

    const clientes = [
        {id:1, nombre: 'Memo Ochoa', edad: '30', telefono: '6181762612', tratamiento: 'Muelas picadas'},
        {id:2, nombre: 'Leo Messi', edad: '50', telefono: '6181762611', tratamiento: 'Brackets'},
        {id:3, nombre: 'Neymar', edad: '20', telefono: '6181762613', tratamiento: 'Muelas del juicio'}
    ];

    const initialState = {
        clientes : [],
        formulario: false,
        errorformulario: false,
        cliente: null
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

    //Obtener a los clientes
    const obtenerClientes = () =>{
        dispatch({
            type: OBTENER_CLIENTES,
            payload: clientes
        })
    }

    //Agregar un nuevo clientes 
    const agregarCliente = cliente =>{
        cliente.id = uuidv4();
        //Insertar el proyecto en el state de
        dispatch({
            type: AGREGAR_CLIENTE,
            payload: cliente
        })
    }

    //Validar formulario
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO_CLIENTE
        })
    }

    //Cliente actual
    const clienteActual = clienteId => {
        dispatch({
            type: CLIENTE_ACTUAL,
            payload: clienteId
        })
    }

    //Elimina un cliente
    const eliminarCliente = clienteId => {
        dispatch({
            type: ELIMINAR_CLIENTE,
            payload: clienteId
        })
    }

    return(
        <clienteContext.Provider
            value={{
                formulario: state.formulario,
                clientes: state.clientes,
                errorformulario: state.errorformulario,
                cliente: state.cliente,
                mostrarFormulario,
                ocultarFormulario,
                obtenerClientes,
                agregarCliente,
                mostrarError,
                clienteActual,
                eliminarCliente
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
}

export default ClienteState;
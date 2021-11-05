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
    CLIENTE_ERROR,
    CLIENTE_ACTUAL,
    ELIMINAR_CLIENTE
} from '../../types';
import clienteAxios from '../../config/axios';

const ClienteState = props => {

    const initialState = {
        clientes : [],
        formulario: false,
        errorformulario: false,
        cliente: null,
        mensaje: null
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
    const obtenerClientes = async () =>{
        try {
            const resultado = await clienteAxios.get('/api/clientes');
            console.log(resultado);
            dispatch({
                type: OBTENER_CLIENTES,
                payload: resultado.data.clientes
            })
        } catch (error) {
            // console.log(error);
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'danger'
            }
            dispatch({
                type: CLIENTE_ERROR,
                payload: alerta
            })
        }
    }

    //Agregar un nuevo clientes 
    const agregarCliente = async cliente =>{
        try {
            const resultado = await clienteAxios.post('/api/clientes', cliente);
            console.log(resultado);
            //Insertar el proyecto en el state de
            dispatch({
                type: AGREGAR_CLIENTE,
                payload: resultado.data
            });
        } catch (error) {
            // console.log(error);
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'danger'
            }
            dispatch({
                type: CLIENTE_ERROR,
                payload: alerta
            })
        }
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
    const eliminarCliente = async clienteId => {
        try {
            await clienteAxios.delete(`/api/clientes/${clienteId}`);
            dispatch({
                type: ELIMINAR_CLIENTE,
                payload: clienteId
            })
        } catch (error) {
            // console.log(error);
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'danger'
            }
            dispatch({
                type: CLIENTE_ERROR,
                payload: alerta
            })
        }
    }

    return(
        <clienteContext.Provider
            value={{
                formulario: state.formulario,
                clientes: state.clientes,
                errorformulario: state.errorformulario,
                cliente: state.cliente,
                mensaje: state.mensaje,
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
import React, {useReducer} from 'react';
import PagoContext from './pagoContext';
import PagoReducer from './pagoReducer';

import {
    PAGOS_CLIENTE,
    AGREGAR_PAGO,
    MOSTRAR_ALERTA_PAGO,
    OCULTAR_ALERTA_PAGO,
    ELIMINAR_PAGO,
    PAGO_ACTUAL,
    ACTUALIZAR_PAGO
} from '../../types';

import clienteAxios from '../../config/axios';

const PagoState = props => {
    const initialState={
        pagoscliente: [],
        errorpago: false,
        pagoseleccionado: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(PagoReducer, initialState);

    //Funciones

    //Obtener pagos de un cliente
    const obtenerPagos = async cliente => {
        // console.log(cliente);
        try {
            const resultado = await clienteAxios.get('/api/pagos', {params: { cliente }});
            // console.log(resultado);
            dispatch({
                type: PAGOS_CLIENTE,
                payload: resultado.data.pagos
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Agregar un nuevo pago
    const agregarPago = async pago =>{
        // console.log(pago);
        try {
            const resultado = await clienteAxios.post('/api/pagos', pago);
            console.log(resultado);
            dispatch({
                type: AGREGAR_PAGO,
                payload: pago
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Valida y muestra error
    const validarPago = (msg, categoria) =>{
        dispatch({
            type: MOSTRAR_ALERTA_PAGO,
            payload: {msg, categoria}
        })

        //Ocultar la alerta despues de 3 segundos
        setTimeout(() =>{
            dispatch({
                type: OCULTAR_ALERTA_PAGO
            });
        }, 3000);
    }

    //Elimina un pago
    const eliminarPago = async (id, cliente) =>{
        try {
            await clienteAxios.delete(`/api/pagos/${id}`, { params: { cliente }});
            dispatch({
                type: ELIMINAR_PAGO,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Extrae pago para edicion
    const guardarPagoActual = pago =>{
        dispatch({
            type: PAGO_ACTUAL,
            payload: pago
        })
    }

    //Actualizar pago
    const actualizarPago = async pago =>{
        // console.log(pago);
        try {
            const resultado = await clienteAxios.put(`/api/pagos/${pago._id}`, pago);
            // console.log(resultado);
            dispatch({
                type: ACTUALIZAR_PAGO,
                payload: resultado.data.pago
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <PagoContext.Provider
            value={{
               pagoscliente: state.pagoscliente,
               errorpago: state.errorpago,
               pagoseleccionado: state.pagoseleccionado,
               obtenerPagos,
               agregarPago,
               validarPago,
               eliminarPago,
               guardarPagoActual,
               actualizarPago
            }}
        >
            {props.children}
        </PagoContext.Provider>
    )
}

export default PagoState;
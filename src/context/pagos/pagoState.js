import React, {useContext, useReducer} from 'react';
import PagoContext from './pagoContext';
import PagoReducer from './pagoReducer';

import {
    PAGOS_CLIENTE,
    AGREGAR_PAGO,
    VALIDAR_FORMULARIO_PAGO,
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
    const obtenerPagos = clienteId => {
        dispatch({
            type: PAGOS_CLIENTE,
            payload: clienteId
        })
    }

    //Agregar un nuevo pago
    const agregarPago = async pago =>{
        console.log(pago);
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
    const validarPago = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO_PAGO
        })
    }

    //Elimina un pago
    const eliminarPago = id =>{
        dispatch({
            type: ELIMINAR_PAGO,
            payload: id
        })
    }

    //Extrae pago para edicion
    const guardarPagoActual = pago =>{
        dispatch({
            type: PAGO_ACTUAL,
            payload: pago
        })
    }

    //Actualizar pago
    const actualizarPago = pago =>{
        dispatch({
            type: ACTUALIZAR_PAGO,
            payload: pago
        })
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
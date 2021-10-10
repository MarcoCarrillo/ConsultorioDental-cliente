import React, {useContext, useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
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

const PagoState = props => {
    const initialState={
        pagos: [ 
            {id: 1,concepto: 'Primer mensualidad', cantidad: 500, fecha:'2021-10-19', clienteId: 1},
            {id: 2,concepto: 'Pago del diente', cantidad: 3000, fecha:'2021-10-20', clienteId: 2},
            {id: 3,concepto: 'Primer mensualidad id 3', cantidad: 500, fecha:'2021-10-19', clienteId: 3},
        ],
        pagoscliente: null,
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
    const agregarPago = pago =>{
        pago.id = uuidv4();
        dispatch({
            type: AGREGAR_PAGO,
            payload: pago
        })
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
               pagos: state.pagos,
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
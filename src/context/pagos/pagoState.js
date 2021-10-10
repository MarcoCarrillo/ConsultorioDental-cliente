import React, {useContext, useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PagoContext from './pagoContext';
import PagoReducer from './pagoReducer';

import {
    PAGOS_CLIENTE,
    AGREGAR_PAGO,
    VALIDAR_FORMULARIO_PAGO
} from '../../types';

const PagoState = props => {
    const initialState={
        pagos: [ 
            {concepto: 'Primer mensualidad', cantidad: 500, fecha:'2021-10-19', clienteId: 1},
            {concepto: 'Pago del diente', cantidad: 3000, fecha:'2021-10-20', clienteId: 2},
            {concepto: 'Primer mensualidad id 3', cantidad: 500, fecha:'2021-10-19', clienteId: 3},
        ],
        pagoscliente: null,
        errorpago: false
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

    return(
        <PagoContext.Provider
            value={{
               pagos: state.pagos,
               pagoscliente: state.pagoscliente,
               errorpago: state.errorpago,
               obtenerPagos,
               agregarPago,
               validarPago
            }}
        >
            {props.children}
        </PagoContext.Provider>
    )
}

export default PagoState;
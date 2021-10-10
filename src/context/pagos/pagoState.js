import React, {useContext, useReducer} from 'react'
import PagoContext from './pagoContext';
import PagoReducer from './pagoReducer';

import {
    PAGOS_CLIENTE
} from '../../types';

const PagoState = props => {
    const initialState={
        pagos: [ 
            {concepto: 'Primer mensualidad', cantidad: 500, fecha:'2021-10-19', clienteId: 1},
            {concepto: 'Pago del diente', cantidad: 3000, fecha:'2021-10-20', clienteId: 2},
            {concepto: 'Primer mensualidad id 3', cantidad: 500, fecha:'2021-10-19', clienteId: 3},
            {concepto: 'Pago del diente id 1', cantidad: 3000, fecha:'2021-10-20', clienteId: 1}
        ],
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

    return(
        <PagoContext.Provider
            value={{
               pagos: state.pagos,
               obtenerPagos
            }}
        >
            {props.children}
        </PagoContext.Provider>
    )
}

export default PagoState;
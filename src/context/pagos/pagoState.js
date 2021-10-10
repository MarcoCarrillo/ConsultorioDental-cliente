import React, {useContext, useReducer} from 'react'
import PagoContext from './pagoContext';
import PagoReducer from './pagoReducer';

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

    return(
        <PagoContext.Provider
            value={{
               pagos: state.pagos
            }}
        >
            {props.children}
        </PagoContext.Provider>
    )
}

export default PagoState;
import React, {useReducer} from 'react';
import CargoContext from './cargoContext';
import CargoReducer from './cargoReducer';
import {
    CARGOS_CLIENTE
} from '../../types';

const CargoState = props => {
    const initialState = {
        cargos: [
            {concepto: 'Anticipo', cantidad: 100, fecha:'2021-10-19', clienteId: 1},
            {concepto: 'Tratamiento dental', cantidad: 200, fecha:'2021-10-20', clienteId: 2},
            {concepto: 'Tratamiento', cantidad: 32000, fecha:'2021-10-20', clienteId: 3},
            {concepto: 'Anticipo', cantidad: 5500, fecha:'2021-10-19', clienteId: 3},
            {concepto: 'Tratamiento dental', cantidad: 100, fecha:'2021-10-20', clienteId: 1},
            {concepto: 'Tratamiento', cantidad: 200, fecha:'2021-10-20', clienteId: 2},
            {concepto: 'Anticipo', cantidad: 200, fecha:'2021-10-19', clienteId: 2},
            {concepto: 'Tratamiento dental', cantidad: 3000, fecha:'2021-10-20', clienteId: 3},
            {concepto: 'Tratamiento', cantidad: 100, fecha:'2021-10-20', clienteId: 1}
        ],
        cargoscliente: null
    }

    //Crear state y dispatch
    const [state, dispatch] = useReducer(CargoReducer, initialState);

    //Funciones

    //Obtener los cargos de un cliente 
    const obtenerCargos = clienteId => {
        dispatch({
            type: CARGOS_CLIENTE,
            payload: clienteId
        })
    }

    return (
        <CargoContext.Provider
            value={{
                cargos: state.cargos,
                cargoscliente: state.cargoscliente,
                obtenerCargos
            }}
        >
            {props.children}
        </CargoContext.Provider>
    )
}

export default CargoState;
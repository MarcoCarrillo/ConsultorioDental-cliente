import React, {useReducer} from 'react';
import CargoContext from './cargoContext';
import CargoReducer from './cargoReducer';
import {
    CARGOS_CLIENTE,
    AGREGAR_CARGO,
    VALIDAR_FORMULARIO_CARGO
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
        cargoscliente: null,
        errorcargo: false
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

    //Crear un nuevo cargo
    const agregarCargo = cargo =>{
        dispatch({
            type: AGREGAR_CARGO,
            payload: cargo
        })
    }

    //Valida y muestra un error en caso de que sea necesario 
    const validarCargo = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO_CARGO
        })
    }

    return (
        <CargoContext.Provider
            value={{
                cargos: state.cargos,
                cargoscliente: state.cargoscliente,
                errorcargo: state.errorcargo,
                obtenerCargos,
                agregarCargo,
                validarCargo
            }}
        >
            {props.children}
        </CargoContext.Provider>
    )
}

export default CargoState;
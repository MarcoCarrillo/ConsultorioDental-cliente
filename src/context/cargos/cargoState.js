import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import CargoContext from './cargoContext';
import CargoReducer from './cargoReducer';
import {
    CARGOS_CLIENTE,
    AGREGAR_CARGO,
    VALIDAR_FORMULARIO_CARGO,
    ELIMINAR_CARGO,
    CARGO_ACTUAL,
    ACTUALIZAR_CARGO
} from '../../types';

const CargoState = props => {
    const initialState = {
        cargos: [
            {id: 1,concepto: 'Anticipo', cantidad: 100, fecha:'2021-10-19', clienteId: 1},
            {id: 2,concepto: 'Tratamiento dental', cantidad: 200, fecha:'2021-10-20', clienteId: 2},
            {id: 3,concepto: 'Tratamiento', cantidad: 32000, fecha:'2021-10-20', clienteId: 3},
            {id: 4,concepto: 'Anticipo', cantidad: 5500, fecha:'2021-10-19', clienteId: 3},
            {id: 5,concepto: 'Tratamiento dental', cantidad: 100, fecha:'2021-10-20', clienteId: 1},
            {id: 6,concepto: 'Tratamiento', cantidad: 200, fecha:'2021-10-20', clienteId: 2},
            {id: 7,concepto: 'Anticipo', cantidad: 200, fecha:'2021-10-19', clienteId: 2},
            {id: 8,concepto: 'Tratamiento dental', cantidad: 3000, fecha:'2021-10-20', clienteId: 3},
            {id: 9,concepto: 'Tratamiento', cantidad: 100, fecha:'2021-10-20', clienteId: 1}
        ],
        cargoscliente: null,
        errorcargo: false,
        cargoseleccionado: null
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
        cargo.id = uuidv4();
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

    //Elimina un cargo por id
    const eliminarCargo = id =>{
        dispatch({
           type: ELIMINAR_CARGO,
           payload: id
        })
    }

    //Extrae un cargo para editarlo
    const guardarCargoActual = cargo => {
        dispatch({
            type: CARGO_ACTUAL,
            payload: cargo
        })
    }

    //Editar un cargo
    const actualizarCargo = cargo => {
        dispatch({
            type: ACTUALIZAR_CARGO,
            payload: cargo
        })
    }

    return (
        <CargoContext.Provider
            value={{
                cargos: state.cargos,
                cargoscliente: state.cargoscliente,
                errorcargo: state.errorcargo,
                cargoseleccionado: state.cargoseleccionado,
                obtenerCargos,
                agregarCargo,
                validarCargo,
                eliminarCargo,
                guardarCargoActual,
                actualizarCargo
            }}
        >
            {props.children}
        </CargoContext.Provider>
    )
}

export default CargoState;
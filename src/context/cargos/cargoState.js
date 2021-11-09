import React, {useReducer} from 'react';
import CargoContext from './cargoContext';
import CargoReducer from './cargoReducer';
import {
    CARGOS_CLIENTE,
    AGREGAR_CARGO,
    MOSTRAR_ALERTA_CARGO,
    OCULTAR_ALERTA_CARGO,
    ELIMINAR_CARGO,
    CARGO_ACTUAL,
    ACTUALIZAR_CARGO
} from '../../types';

import clienteAxios from '../../config/axios';

const CargoState = props => {
    const initialState = {
        cargoscliente: [],
        errorcargo: false,
        cargoseleccionado: null
    }

    //Crear state y dispatch
    const [state, dispatch] = useReducer(CargoReducer, initialState);

    //Funciones

    //Obtener los cargos de un cliente 
    const obtenerCargos = async cliente => {
        // console.log(cliente);
        try {
            const resultado = await clienteAxios.get('/api/cargos', {params : { cliente }});
            // console.log(resultado);
            dispatch({
                type: CARGOS_CLIENTE,
                payload: resultado.data.cargos
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Crear un nuevo cargo
    const agregarCargo = async cargo =>{
        // console.log(cargo);
        try {
            const resultado = await clienteAxios.post('/api/cargos', cargo);
            console.log(resultado);
            dispatch({
                type: AGREGAR_CARGO,
                payload: cargo
            });

        } catch (error) {
            console.log(error);
        }
    }

    //Valida y muestra un error en caso de que sea necesario 
    const validarCargo = (msg, categoria) =>{
        dispatch({
            type: MOSTRAR_ALERTA_CARGO,
            payload: {msg, categoria}
        });
        //Ocultar la alerta despues de 3 segundos
        setTimeout(() =>{
            dispatch({
                type: OCULTAR_ALERTA_CARGO
            });
        }, 3000);
    
    }

    //Elimina un cargo por id
    const eliminarCargo = async (id, cliente) =>{
        try {
            await clienteAxios.delete(`/api/cargos/${id}`, { params: { cliente }});
            dispatch({
                type: ELIMINAR_CARGO,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Extrae un cargo para editarlo
    const guardarCargoActual = cargo => {
        dispatch({
            type: CARGO_ACTUAL,
            payload: cargo
        })
    }

    //Editar un cargo
    const actualizarCargo = async cargo => {
        // console.log(cargo);
        try {
            const resultado = await clienteAxios.put(`/api/cargos/${cargo._id}`, cargo);
            // console.log(resultado);
            dispatch({
                type: ACTUALIZAR_CARGO,
                payload: resultado.data.cargo
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CargoContext.Provider
            value={{
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
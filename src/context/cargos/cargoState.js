import React, {useReducer} from 'react';
import CargoContext from './cargoContext';
import CargoReducer from './cargoReducer';

const CargoState = props => {
    const initialState = {
        cargos: [
            {concepto: 'Anticipo', cantidad: 100, fecha:'2021-10-19', cliente_id: 1},
            {concepto: 'Tratamiento dental', cantidad: 200, fecha:'2021-10-20', cliente_id: 2},
            {concepto: 'Tratamiento', cantidad: 32000, fecha:'2021-10-20', cliente_id: 3},
            {concepto: 'Anticipo', cantidad: 5500, fecha:'2021-10-19', cliente_id: 3},
            {concepto: 'Tratamiento dental', cantidad: 100, fecha:'2021-10-20', cliente_id: 1},
            {concepto: 'Tratamiento', cantidad: 200, fecha:'2021-10-20', cliente_id: 2},
            {concepto: 'Anticipo', cantidad: 200, fecha:'2021-10-19', cliente_id: 2},
            {concepto: 'Tratamiento dental', cantidad: 3000, fecha:'2021-10-20', cliente_id: 3},
            {concepto: 'Tratamiento', cantidad: 100, fecha:'2021-10-20', cliente_id: 1}
        ]
    }

    //Crear state y dispatch
    const [state, dispatch] = useReducer(CargoReducer, initialState);

    return (
        <CargoContext.Provider
            value={{
                cargos: state.cargos
            }}
        >
            {props.children}
        </CargoContext.Provider>
    )
}

export default CargoState;
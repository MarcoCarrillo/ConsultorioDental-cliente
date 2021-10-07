import React, {useReducer} from 'react';
import CargoContext from './cargoContext';
import CargoReducer from './cargoReducer';

const CargoState = props => {
    const initialState = {
        cargos: []
    }

    //Crear state y dispatch
    const [state, dispatch] = useReducer(CargoReducer, initialState);

    return (
        <CargoContext.Provider>
            {props.children}
        </CargoContext.Provider>
    )
}

export default CargoState;
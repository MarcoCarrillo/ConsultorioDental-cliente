import React, {useContext, useReducer} from 'react'
import PagoContext from './pagoContext';
import PagoReducer from './pagoReducer';

const PagoState = props => {
    const initialState={
        pagos: [],
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(PagoReducer, initialState);

    return(
        <PagoContext.Provider>
            {props.children}
        </PagoContext.Provider>
    )
}

export default PagoState;
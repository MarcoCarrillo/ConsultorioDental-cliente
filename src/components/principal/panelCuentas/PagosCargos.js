import React, {Fragment} from 'react'
import FormCargo from './cargos/FormCargo';
import FormPago from './pagos/FormPago';

const PagosCargos = () => {
    return ( 
        <Fragment>
            <FormCargo />
            <FormPago /> 
        </Fragment>
        
     );
}
 
export default PagosCargos;
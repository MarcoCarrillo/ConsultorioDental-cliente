import React, {Fragment} from 'react';
import ListadoCargos from './cargos/ListadoCargos';
import ListadoPagos from './pagos/ListadoPagos';

const Historial = () => {
    return ( 
        <Fragment>
            <h2 className='mb-4'>Historial</h2>
            <h3>Cargos</h3>
            <ListadoCargos /> 
            <h3 className='mt-4'>Pagos</h3>
            <ListadoPagos /> 
        </Fragment>
        
     );
}
 
export default Historial;
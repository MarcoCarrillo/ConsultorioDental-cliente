import React, {Fragment, useContext} from 'react';
import ListadoCargos from './cargos/ListadoCargos';
import ListadoPagos from './pagos/ListadoPagos';
import clienteContext from '../../../context/clientes/clienteContext';

const Historial = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Si no hay cliente seleccionado
    if(!cliente) return null;

    //Array destructuring para extraer los datos del cliente
    const [clienteActual] = cliente;

    return ( 
        <Fragment>
            <h2 className='mb-4 '>Historial</h2>
            <h3 className='title-cargo'>Cargos</h3>
            <ListadoCargos /> 
            <h3 className='mt-4 title-pago'>Pagos</h3>
            <ListadoPagos /> 
        </Fragment>
        
     );
}
 
export default Historial;
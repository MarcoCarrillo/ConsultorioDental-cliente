import React, {Fragment, useContext} from 'react'
import FormCargo from './cargos/FormCargo';
import FormPago from './pagos/FormPago';
import clienteContext from '../../../context/clientes/clienteContext';

const PagosCargos = () => {
    
    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Si no hay cliente seleccionado
    if(!cliente) return null;

    //Array destructuring para extraer los datos del cliente
    const [clienteActual] = cliente;
    
    return ( 
        <Fragment>
            <FormCargo />
            <FormPago /> 
        </Fragment>
        
     );
}
 
export default PagosCargos;
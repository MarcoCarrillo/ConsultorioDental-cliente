import React, {useContext} from 'react';
import clienteContext from '../../context/clientes/clienteContext';

const Cliente = ({cliente}) => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { clienteActual } = clientesContext;

    return ( 
        <li>
            <button
                type="button"
                className="boton btn-blank"
                onClick={ () => clienteActual(cliente.id) }
            >{cliente.nombre}</button>
        </li>
     );
}
 
export default Cliente;
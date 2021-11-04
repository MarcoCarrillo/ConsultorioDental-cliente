import React, {useContext} from 'react';
import clienteContext from '../../context/clientes/clienteContext';
import cargoContext from '../../context/cargos/cargoContext';
import pagoContext from '../../context/pagos/pagoContext';

const Cliente = ({cliente}) => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { clienteActual } = clientesContext;

    //Obtener la funcion del context de cargos
    const cargosContext = useContext(cargoContext);
    const { obtenerCargos } = cargosContext;

    //Funcion del context de pagos
    const pagosContext = useContext(pagoContext);
    const { obtenerPagos } = pagosContext;

    //Funcion para agregar el cliente actual
    const seleccionarCliente = id =>{
        clienteActual(id); //Fijar un cliente actual
        obtenerCargos(id); //Filtrar los cargos cuando se de clic
        obtenerPagos(id);//Filtrar pagos

    }

    return ( 
        <li>
            <button
                type="button"
                className="boton btn-blank"
                onClick={ () => seleccionarCliente(cliente._id) }
            >{cliente.nombre}</button>
        </li>
     );
}
 
export default Cliente;
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
            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="mr-2 mb-1 bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>{cliente.nombre}</button>
        </li>
     );
}
 
export default Cliente;
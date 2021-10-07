import React, {useContext} from 'react';
import clienteContext from '../../context/clientes/clienteContext';
import cargoContext from '../../context/cargos/cargoContext';

const Cliente = ({cliente}) => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { clienteActual } = clientesContext;

    //Obtener la funcion del context de tarea
    const cargosContext = useContext(cargoContext);
    const { obtenerCargos } = cargosContext;

    //Funcion para agregar el cliente actual
    const seleccionarCliente = id =>{
        clienteActual(id); //Fijar un cliente actual
        obtenerCargos(id); //Filtrar los cargos cuando se de clic

    }

    return ( 
        <li>
            <button
                type="button"
                className="boton btn-blank"
                onClick={ () => seleccionarCliente(cliente.id) }
            >{cliente.nombre}</button>
        </li>
     );
}
 
export default Cliente;
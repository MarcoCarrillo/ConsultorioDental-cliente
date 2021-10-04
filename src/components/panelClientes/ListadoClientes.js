import React, { useContext } from 'react';
import Cliente from './Cliente';

import clienteContext from '../../context/clientes/clienteContext';

const ListadoClientes = () => {

    //Obtener el state del formulario
    const clientesContext = useContext(clienteContext);
    const { clientes } = clientesContext;

    if(clientes.length === 0) return null;

    return ( 
        <ul className="listado-clientes">
            {clientes.map(cliente => (
                <Cliente 
                    key={cliente.id}
                    cliente={cliente}
                />
            ))}
        </ul>
     );
}
 
export default ListadoClientes;
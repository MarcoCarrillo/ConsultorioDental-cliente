import React, { useContext, useEffect } from 'react';
import Cliente from './Cliente';

import clienteContext from '../../context/clientes/clienteContext';

const ListadoClientes = () => {

    //Obtener clientes del state inicial
    const clientesContext = useContext(clienteContext);
    const { clientes, obtenerClientes } = clientesContext;
    
    //Obtener clientes cuando tarda el componente
    useEffect(() => {
        obtenerClientes();        
    }, []);

    if(clientes.length === 0) return<div className="alert alert-info" role="alert">No hay pacientes, comienza agregando uno!</div>;

    

    return ( 
        <ul className="listado-clientes">
            {clientes.map(cliente => (
                <Cliente 
                    key={cliente._id}
                    cliente={cliente}
                />
            ))}
        </ul>
     );
}
 
export default ListadoClientes;
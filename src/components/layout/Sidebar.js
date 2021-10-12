import React from 'react';
import NuevoCliente from '../panelClientes/NuevoCliente';
import ListadoClientes from '../panelClientes/ListadoClientes';

const Sidebar = () => {
    return ( 
        <aside className="sidebar">
            <h2 className="alert alert-info mt-0">Cuentas por cobrar</h2>
            <img className="img-sidebar" src="logo-consult.png" alt="Logo"/>

            <NuevoCliente />
            
            <div className="clientes">
                <h2 className="titulo-clientes">Pacientes</h2>
                <ListadoClientes />
            </div>
        </aside>
     );
}
 
export default Sidebar;
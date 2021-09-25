import React from 'react';
import NuevoCliente from '../panelClientes/NuevoCliente';

const Sidebar = () => {
    return ( 
        <aside className="sidebar">
            <h2 className="titulo-sidebar">Cuentas por Cobrar</h2>
            <img className="img-sidebar" src="logo-consult.png" alt="Logo"/>

            <NuevoCliente />
            
            <div className="clientes">
                <h2 className="titulo-clientes">Clientes</h2>
            </div>
        </aside>
     );
}
 
export default Sidebar;
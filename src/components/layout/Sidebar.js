import React from 'react';
import NuevoCliente from '../panelClientes/NuevoCliente';
import ListadoClientes from '../panelClientes/ListadoClientes';

const Sidebar = () => {
    return ( 
        <aside className="sidebar">
            
            <img className="img-sidebar" src="logo-consult.png" alt="Logo"/>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
            <svg className="mr-4 bi bi-bank" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/>
            </svg>
                <h3 className="m-0 alert-primary">
                    Sistema de cuentas por cobrar
                </h3>
            </div>

            <NuevoCliente />
            
            <div className="clientes">
                <h2 className="titulo-clientes">Pacientes</h2>
                <ListadoClientes />
            </div>
        </aside>
     );
}
 
export default Sidebar;
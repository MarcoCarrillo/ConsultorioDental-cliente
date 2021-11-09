import React, { useContext, useEffect } from 'react';
import Cliente from './Cliente';
import AlertaContext from '../../context/alertas/alertaContext';
import clienteContext from '../../context/clientes/clienteContext';

const ListadoClientes = () => {

    //Obtener clientes del state inicial
    const clientesContext = useContext(clienteContext);
    const { clientes, obtenerClientes } = clientesContext;

    const alertaContext = useContext(AlertaContext);
    const {mensaje, alerta, mostrarAlerta} = alertaContext;
    
    //Obtener clientes cuando tarda el componente
    useEffect(() => {

        //Si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        obtenerClientes();   
        //eslint-disable-next-line      
    }, [mensaje]);

    if(clientes.length === 0) return<div className="alert alert-info" role="alert">No hay pacientes, comienza agregando uno!</div>;

    

    return ( 
        <ul className="listado-clientes">
            {alerta ? (<div className={`alert alert-${alerta.categoria}`}>{alerta.msg}
            
            </div>)  : null}
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
import React, {Fragment, useContext} from 'react';
import clienteContext from '../../context/clientes/clienteContext';

const BarraInfo = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Si no hay cliente seleccionado
    if(!cliente) return <h2>Selecciona un paciente</h2>;

    //Array destructuring para extraer los datos del cliente
    const [clienteActual] = cliente;
    return ( 
        <Fragment>
        
            <div className="container bg-cliente">
                <div className="row justify-content-start wrap">
                    <div className="col-md-auto text-center alinear">
                        <span className="icon">
                            <i className="far fa-user-circle"></i>
                        </span>
                    </div>
                    <div className="container col-10">
                        <div className="row info-cliente">
                            <div className="col align-self-start">
                                <p>Nombre: {clienteActual.nombre}</p>
                                <p>Tratamiento: {clienteActual.tratamiento}</p>
                            </div>
                            <div className="col align-self-center">
                                <p>Edad: {clienteActual.edad}</p>
                                <p>Teléfono: {clienteActual.telefono}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default BarraInfo;
import React, {Fragment, useContext, useState, useEffect} from 'react';
import ListadoCargos from './cargos/ListadoCargos';
import ListadoPagos from './pagos/ListadoPagos';
import clienteContext from '../../../context/clientes/clienteContext';
import pagoContext from '../../../context/pagos/pagoContext';
import cargoContext from '../../../context/cargos/cargoContext';

const Historial = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Obtener los pagos del cliente
    const pagosContext = useContext(pagoContext);
    const { pagoscliente } = pagosContext;

    //Obtener los cargos del cliente
    const cargosContext = useContext(cargoContext);
    const { cargoscliente } = cargosContext;

    const [total, mostrarTotal] = useState(false);

    //Effect y operaciones para actualizar el total a deber
    const totalCargos = (cargoscliente.reduce((sum, value) => ( parseInt(value.cantidad) ? parseInt(sum) + parseInt(value.cantidad) : parseInt(sum)), 0));

    const totalPagos = (pagoscliente.reduce((sum, value) => ( parseInt(value.cantidad) ? parseInt(sum) + parseInt(value.cantidad) : parseInt(sum)),0));

    const totalDeber = totalCargos - totalPagos;
    

    useEffect(() => {
        // console.log(totalDeber);
        if(totalDeber < 0){
            mostrarTotal(false);
        }else {
            mostrarTotal(true);
        }
        //eslint-disable-next-line 
    }, [pagoscliente, cargoscliente])

    //Si no hay cliente seleccionado
    if(!cliente) return null;

    

    return ( 
        <Fragment>
            <h2 className='mb-4'>Resumen</h2>
            {total ? <div className="alert alert-danger mb-4 ml-3">El paciente debe un total de ${totalDeber}</div> : <div className="alert alert-success mb-4 ml-3">El paciente adelantó ${- totalDeber}</div>}
            <h2 className='mb-4 '>Historial</h2>
            <h3 className='title-cargo'>Cargos</h3>
            <ListadoCargos /> 
            <h3 className='mt-4 title-pago'>Pagos</h3>
            <ListadoPagos /> 
        </Fragment>
        
     );
}
 
export default Historial;
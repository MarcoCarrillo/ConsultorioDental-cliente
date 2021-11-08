import React, {useContext, useState, useEffect} from 'react';
import Pago from './Pago';
import pagoContext from '../../../../context/pagos/pagoContext';

const ListadoPagos = () => {

    //Obtener los pagos del cliente
    const pagosContext = useContext(pagoContext);
    const { pagoscliente } = pagosContext;

    //Alerta del total 
    const [alerta, mostrarAlerta] = useState(false);
    
    const total = (pagoscliente.reduce((sum, value) => ( parseInt(value.cantidad) ? parseInt(sum) + parseInt(value.cantidad) : parseInt(sum)),0));


    //Para actualizar cuando ha pagado
    useEffect(() => {
        if( total < 1 ) {
            mostrarAlerta(false);
        } else {
            mostrarAlerta(true);
        }
        
        console.log(total);
    },[pagoscliente])

    return ( 
        <ul className="cargos-realizados p-4">
            {alerta ? <div className="alert alert-success">El paciente ha pagado un total de ${total}</div> : null }
            {pagoscliente.length === 0 
                ? (<li>
                        <div className="alert alert-warning" role="alert">
                            El paciente no tiene pagos!
                        </div>
                    </li>)
                : pagoscliente.map((pago, index) => (
                    <Pago
                        key={index}
                        pago={pago}
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoPagos;
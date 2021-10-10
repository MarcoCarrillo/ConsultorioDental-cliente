import React, {useContext} from 'react';
import Pago from './Pago';
import pagoContext from '../../../../context/pagos/pagoContext';

const ListadoPagos = () => {

    //Obtener los pagos del cliente
    const pagosContext = useContext(pagoContext);
    const { pagoscliente } = pagosContext;
    
    return ( 
        <ul className="cargos-realizados p-4">
            {pagoscliente.length === 0 
                ? (<li>
                        <div class="alert alert-warning" role="alert">
                            El cliente no tiene pagos!
                        </div>
                    </li>)
                : pagoscliente.map(pago => (
                    <Pago
                        pago={pago}
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoPagos;
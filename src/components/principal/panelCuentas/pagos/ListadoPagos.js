import React from 'react';
import Pago from './Pago';

const ListadoPagos = () => {
    
    const pagos = []

    return ( 
        <ul className="cargos-realizados p-4">
            {pagos.length === 0 
                ? (<li>
                        <div class="alert alert-warning" role="alert">
                            El cliente no tiene pagos!
                        </div>
                    </li>)
                : pagos.map(pago => (
                    <Pago
                        pago={pago}
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoPagos;
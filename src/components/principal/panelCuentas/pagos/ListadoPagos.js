import React from 'react';
import Pago from './Pago';

const ListadoPagos = () => {
    
    const pagos = [
        {concepto: 'Primer mensualidad', cantidad: 500, fecha:'2021-10-19'},
        {concepto: 'Pago del diente', cantidad: 3000, fecha:'2021-10-20'},
        {concepto: 'Pago final', cantidad: 4000, fecha:'2021-10-29'},
        
    ]

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
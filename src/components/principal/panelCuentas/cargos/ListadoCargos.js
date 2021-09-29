import React from 'react';
import Cargo from './Cargo';

const ListadoCargos = () => {

    const cargos = [
        {concepto: 'Pago inicial', cantidad: '500'},
        {concepto: 'Tratamiento dental', cantidad: '5000'}
    ]

    return ( 
        <ul className="cargos-realizados p-4">
            {cargos.length === 0 
                ? (<li>
                        <div class="alert alert-warning" role="alert">
                            El cliente no tiene cargos!
                        </div>
                    </li>)
                : cargos.map(cargo => (
                    <Cargo
                        cargo={cargo}
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoCargos;
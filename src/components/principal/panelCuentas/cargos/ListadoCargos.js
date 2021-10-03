import React from 'react';
import Cargo from './Cargo';

const ListadoCargos = () => {

    const cargos = [
        {concepto: 'Anticipo', cantidad: 5500, fecha:'2021-10-19'},
        {concepto: 'Tratamiento dental', cantidad: 3000, fecha:'2021-10-20'},
        {concepto: 'Nueva muela', cantidad: 4000, fecha:'2021-10-29'}
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
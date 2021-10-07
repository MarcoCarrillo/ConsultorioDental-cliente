import React from 'react';
import Cargo from './Cargo';

const ListadoCargos = () => {

    const cargos = [];

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
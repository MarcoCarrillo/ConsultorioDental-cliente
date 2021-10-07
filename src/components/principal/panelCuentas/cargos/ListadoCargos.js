import React, {useContext} from 'react';
import Cargo from './Cargo';
import cargoContext from '../../../../context/cargos/cargoContext';

const ListadoCargos = () => {

    //Obtener los cargos del cliente
    const cargosContext = useContext(cargoContext);
    const { cargoscliente } = cargosContext;


    return ( 
        <ul className="cargos-realizados p-4">
            {cargoscliente.length === 0 
                ? (<li>
                        <div class="alert alert-warning" role="alert">
                            El cliente no tiene cargos!
                        </div>
                    </li>)
                : cargoscliente.map(cargo => (
                    <Cargo
                        cargo={cargo}
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoCargos;
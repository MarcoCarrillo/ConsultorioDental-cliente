import React, {useState, useContext, useEffect} from 'react';
import Cargo from './Cargo';
import cargoContext from '../../../../context/cargos/cargoContext';

const ListadoCargos = () => {

    //Obtener los cargos del cliente
    const cargosContext = useContext(cargoContext);
    const { cargoscliente } = cargosContext;

    const [alerta, mostrarAlerta] = useState(false);

    const total = (cargoscliente.reduce((sum, value) => ( parseInt(value.cantidad) ? parseInt(sum) + parseInt(value.cantidad) : parseInt(sum)), 0));

    useEffect(() => {
        if( total < 1 ) {
            mostrarAlerta(false);
        } else {
            mostrarAlerta(true);
        }
        console.log(total);
        console.log(cargoscliente);
    }, [cargoscliente]);
    
   

    return ( 
        <ul className="cargos-realizados p-4">
            {alerta ? <div className="alert alert-primary">Los cargos del paciente suman un total de ${total}</div> : null}
            {cargoscliente.length === 0 
                ? (<li>
                        <div className="alert alert-warning" role="alert">
                            El paciente no tiene cargos!
                        </div>
                    </li>)
                : cargoscliente.map(cargo => (
                    <Cargo
                        key={cargo.id}
                        cargo={cargo}
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoCargos;
import React, {useContext} from 'react';
import cargoContext from '../../../../context/cargos/cargoContext';
import clienteContext from '../../../../context/clientes/clienteContext';

const Cargo = ({cargo}) => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Obtener los cargos del cliente
    const cargosContext = useContext(cargoContext);
    const { eliminarCargo, obtenerCargos, guardarCargoActual } = cargosContext;

    //Extraer cliente actual
    const [ clienteActual ] = cliente;

    //Cuando el usuario da clic en eliminar
    const cargoEliminar = id => {
        eliminarCargo(id);
        obtenerCargos(clienteActual.id);
    }

    //Agrega un cargo actual cuando se quiera editar
    const seleccionarCargo = cargo => {
        guardarCargoActual(cargo);
    }

    return ( 
        <li className="cargos mt-2">
            <p>Concepto: {cargo.concepto}
                <span className="cargo">${cargo.cantidad}</span>
            </p>
            <p>Fecha: {cargo.fecha}</p>
            <div className="acciones mt-2">
                <button className="btn btn-warning mt-2" onClick={() => seleccionarCargo(cargo)}>Editar</button>
                <button className="btn btn-danger mt-2" onClick={ () => cargoEliminar(cargo.id) }>Eliminar</button>
            </div>
        </li>
     );
}
 
export default Cargo;
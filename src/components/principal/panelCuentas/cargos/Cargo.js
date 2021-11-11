import React, {useContext} from 'react';
import cargoContext from '../../../../context/cargos/cargoContext';
import clienteContext from '../../../../context/clientes/clienteContext';
import Swal from 'sweetalert2';

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
        eliminarCargo(id, clienteActual._id);
        obtenerCargos(clienteActual._id);
    }

    //Agrega un cargo actual cuando se quiera editar
    const seleccionarCargo = cargo => {
        guardarCargoActual(cargo);
        obtenerCargos(clienteActual._id);
    }

    return ( 
        <li className="cargos mt-2">
            <p>Concepto: {cargo.concepto}
                <span className="cargo">${cargo.cantidad}</span>
            </p>
            <p>Fecha: {cargo.fecha}</p>
            <div className="acciones mt-2">
                <button className="btn btn-warning mt-2" onClick={() => seleccionarCargo(cargo)}>Editar</button>
                <button className="btn btn-danger mt-2" onClick={ () => 
                    Swal.fire({
                        title: '¿Estás seguro de eliminar el registro?',
                        text: "Esta acción es irreversible!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'Cancelar',
                        confirmButtonText: 'Sí, eliminalo!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'Eliminado!',
                            'El cargo se ha eliminado exitosamente.',
                            'success'
                          )
                          cargoEliminar(cargo._id)
                        }
                      })
                    }>Eliminar</button>
            </div>
        </li>
     );
}
 
export default Cargo;
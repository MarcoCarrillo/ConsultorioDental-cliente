import React, {useContext} from 'react';
import pagoContext from '../../../../context/pagos/pagoContext';
import clienteContext from '../../../../context/clientes/clienteContext';
import Swal from 'sweetalert2';

const Pago = ({pago}) => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Obtener los pagos del cliente
    const pagosContext = useContext(pagoContext);
    const { eliminarPago, obtenerPagos, guardarPagoActual } = pagosContext;

    //Extraer cliente 
    const [clienteActual] = cliente;

    //Funcion para cuando se presione eliminar
    const pagoEliminar = id =>{
        eliminarPago(id);
        obtenerPagos(clienteActual.id);
    }

    //Agrega un pago actual cuando se quiera editar
    const seleccionarPago = pago => {
        guardarPagoActual(pago);
    }


    return ( 
        <li className="cargos mt-2">
            <p>Concepto: {pago.concepto}
                <span className="pago">${pago.cantidad}</span>
            </p>
            <p>Fecha: {pago.fecha}</p>
            <div className="acciones mt-2">
                <button className="btn btn-warning mt-2" onClick={() => seleccionarPago(pago)}>Editar</button>
                <button className="btn btn-danger mt-2" onClick={() => 
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
                            'El pago se ha eliminado exitosamente.',
                            'success'
                          )
                          pagoEliminar(pago.id)
                        }
                      })
                    }>Eliminar</button>
            </div>
        </li>
     );
}
 
export default Pago;
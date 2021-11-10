import React, {useState, useContext, useEffect} from 'react';
import clienteContext from '../../../../context/clientes/clienteContext';
import pagoContext from '../../../../context/pagos/pagoContext';
import Swal from 'sweetalert2';

const FormPago = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente, eliminarCliente } = clientesContext;

    //Obtener los pagos del cliente
    const pagosContext = useContext(pagoContext);
    const {errorpago, pagoseleccionado, validarPago, agregarPago, obtenerPagos, actualizarPago } = pagosContext;

    //Effect para cuando se seleccione un pagos 
    useEffect(() => {
        if(pagoseleccionado !== null) {
            guardarPago(pagoseleccionado);
        } else {
            guardarPago({
                concepto: '',
                cantidad: 0,
                fecha: ''
            });
        }
    }, [pagoseleccionado])

    //State
    const [pago, guardarPago] = useState({
        concepto: '',
        cantidad: 0,
        fecha: ''
    });

    //Array destructuring para extraer los datos del cliente
    const [clienteActual] = cliente;

    //Extraer valores
    const {concepto, cantidad, fecha} = pago;

    //Leer inputs
    const onChange = e => {
        guardarPago({
            ...pago,
            [e.target.name] : e.target.value
        })
    }

    //On submit
    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if(concepto.trim() === '' || cantidad === ''|| fecha.trim() === ''){
            validarPago('Todos los campos son obligatorios.', 'danger');
            return;
        }

        if(parseInt(cantidad, 10) < 1){
            validarPago('La cantidad debe ser mayor a 0.', 'warning');
            return;
        }
        //Ver si es edicion o pago nuevo
        if(pagoseleccionado === null){
            //Agregar pago al state de pagos
            pago.cliente = clienteActual._id; 
            agregarPago(pago);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El pago se registró correctamente.',
                showConfirmButton: false,
                timer: 1500
              })
        } else{
            //Validar
            if(concepto.trim() === '' || parseInt(cantidad, 10) < 1 || cantidad === '' || fecha.trim() === ''){
                validarPago();
                return;
            }else{
                //Editar
                actualizarPago(pago);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El pago se actualizó correctamente.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
        }

        //Obtener de nuevo los pagos del cliente
        obtenerPagos(clienteActual.id)
        //reiniciar el form
        guardarPago({
            concepto: '',
            cantidad: 0,
            fecha: ''
        })
    }

    return ( 
        <div className="form-container">
            
            <h2 className='mb-4'>Agregar Pago</h2>
            <form
                className='ml-4'
                onSubmit={onSubmit}
            >
                 {errorpago ? (<div className={`mt-3 alert alert-${errorpago.categoria}`}>{errorpago.msg}</div>)  : null}
                <div className="mb-3">
                    <label htmlFor="concepto-pago" className="form-label">Concepto de pago</label>
                    <input type="text" className="form-control" id="concepto-pago" placeholder='Ej. Primer mensualidad' name='concepto' value={concepto} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidad-pago" className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad-pago" placeholder='$1000' name='cantidad' value={cantidad} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha-pago" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="fecha-pago" name='fecha' value={fecha} onChange={onChange}/>
                </div>
                <input type='submit' className="btn btn-success mb-5" value={ pagoseleccionado ? 'Editar Pago' : 'Agregar Pago'} />
            </form>

            <div className="row">
                <button
                type="button"
                className="btn btn-danger m-auto bottom"
                onClick={() => 
                    Swal.fire({
                        title: '¿Estás seguro de eliminar al paciente?',
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
                            'El paciente se ha eliminado exitosamente.',
                            'success'
                          )
                          eliminarCliente(clienteActual._id)
                        }
                      })
                    
                    }
                >Eliminar Paciente &times;</button>
            </div>
            
        </div>
     );
}
 
export default FormPago;
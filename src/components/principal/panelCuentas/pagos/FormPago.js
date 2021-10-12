import React, {useState, useContext, useEffect} from 'react';
import clienteContext from '../../../../context/clientes/clienteContext';
import pagoContext from '../../../../context/pagos/pagoContext';
import cargoContext from '../../../../context/cargos/cargoContext';
import Swal from 'sweetalert2'

const FormPago = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente, eliminarCliente } = clientesContext;

    //Obtener los pagos del cliente
    const pagosContext = useContext(pagoContext);
    const {pagoscliente, pagoseleccionado, errorpago, agregarPago, validarPago, obtenerPagos, actualizarPago } = pagosContext;

    //Obtener los cargos del cliente
    const cargosContext = useContext(cargoContext);
    const { cargoscliente } = cargosContext;   

    //Alerta 
    const [alerta, mostrarAlerta] = useState(false);
    const [cant, mostrarCantidad] = useState(false);

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

    //Effect y operaciones para actualizar el total a deber
    const totalCargos = (cargoscliente.reduce((sum, value) => ( parseInt(value.cantidad) ? parseInt(sum) + parseInt(value.cantidad) : parseInt(sum)), 0));

    const totalPagos = (pagoscliente.reduce((sum, value) => ( parseInt(value.cantidad) ? parseInt(sum) + parseInt(value.cantidad) : parseInt(sum)),0));

    const totalDeber = totalCargos - totalPagos;
    

    useEffect(() => {
        console.log(totalDeber);
        if(totalDeber < 1){
            mostrarAlerta(false)
        }else {
            mostrarAlerta(true);
        }
        
    }, [pagoscliente, cargoscliente])


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
        if(concepto.trim() === '' || parseInt(cantidad, 10) < 1 || fecha.trim() === ''){
            validarPago();
            return;
        }

        //Ver si es edicion o pago nuevo
        if(pagoseleccionado === null){
            //Agregar pago al state de pagos
            pago.clienteId = clienteActual.id; 
            agregarPago(pago);
        } else{
            //Validar
            if(concepto.trim() === '' || parseInt(cantidad, 10) < 1 || cantidad.trim() === '' || fecha.trim() === ''){
                validarPago();
                return;
            }else{
                //Editar
                actualizarPago(pago);
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
                 {errorpago ? <div class="alert alert-danger" role="alert">Hubo un error, intenta de nuevo.</div> :null}
                <div className="mb-3">
                    <label htmlFor="concepto-pago" className="form-label">Concepto de pago</label>
                    <input type="text" className="form-control" id="concepto-pago" placeholder='Ej. Primer mensualidad' name='concepto' value={concepto} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidad-pago" className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad-pago" placeholder='$1000' name='cantidad' value={cantidad} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha-pago" className="form-label">Cantidad</label>
                    <input type="date" className="form-control" id="fecha-pago" name='fecha' value={fecha} onChange={onChange}/>
                </div>
                <input type='submit' className="btn btn-success mb-2" value={ pagoseleccionado ? 'Editar Pago' : 'Agregar Pago'} />
            </form>
            <h2 className='mb-4'>Resumen</h2>
            {alerta ? <div className="alert alert-info mb-4">El paciente debe un total de ${totalDeber}</div> : <div className="alert alert-info mb-4">El paciente adelantó ${totalDeber}</div>}

            <div className="row">
                <button
                type="button"
                className="btn btn-danger m-auto bottom"
                onClick={() => 
                    Swal.fire({
                        title: '¿Estás seguro?',
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
                          eliminarCliente(clienteActual.id)
                        }
                      })
                    
                    }
                >Eliminar Paciente &times;</button>
            </div>
            
        </div>
     );
}
 
export default FormPago;
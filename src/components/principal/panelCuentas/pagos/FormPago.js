import React, {useState, useContext} from 'react';
import clienteContext from '../../../../context/clientes/clienteContext';
import pagoContext from '../../../../context/pagos/pagoContext';

const FormPago = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente, eliminarCliente } = clientesContext;

    //Obtener los pagos del cliente
    const pagosContext = useContext(pagoContext);
    const { errorpago, agregarPago, validarPago, obtenerPagos } = pagosContext;

    //Array destructuring para extraer los datos del cliente
    const [clienteActual] = cliente;

    //State
    const [pago, guardarPago] = useState({
        concepto: '',
        cantidad: 0,
        fecha: ''
    })

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
        //Validar
        if(concepto.trim() === '' || parseInt(cantidad, 10) < 1 || fecha.trim() === ''){
            validarPago();
            return;
        }

        //Agregar pago al state de pagos
        pago.clienteId = clienteActual.id; 
        agregarPago(pago);
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
                <input type='submit' className="btn btn-success mb-5" value='Agregar pago' />
            </form>
            <div className="row">
                <button
                type="button"
                className="btn btn-danger m-auto mt-3 mb-3"
                onClick={() => eliminarCliente(clienteActual.id)}
                >Eliminar Paciente &times;</button>
            </div>
        </div>
     );
}
 
export default FormPago;
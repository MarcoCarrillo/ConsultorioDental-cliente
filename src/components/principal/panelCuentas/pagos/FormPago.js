import React, {useState} from 'react'

const FormPago = () => {

    //State
    const [pago, guardarPago] = useState({
        concepto: '',
        cantidad: ''
    })

    //Extraer valores
    const {concepto, cantidad} = pago;

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
    }

    return ( 
        <div className="form-container">
            <h2 className='mb-4'>Agregar Pago</h2>
            <form
                className='ml-4'
                onSubmit={onSubmit}
            >
                <div class="mb-3">
                    <label for="concepto-pago" class="form-label">Concepto de pago</label>
                    <input type="text" class="form-control" id="concepto-pago" placeholder='Ej. Primer mensualidad' name='concepto' value={concepto} onChange={onChange}/>
                </div>
                <div class="mb-3">
                    <label for="cantidad-pago" class="form-label">Cantidad</label>
                    <input type="number" class="form-control" id="cantidad-pago" placeholder='$1000' name='cantidad' value={cantidad} onChange={onChange}/>
                </div>
                <input type='submit' className="btn btn-azul mb-4" value='Agregar pago' />
            </form>
        </div>
     );
}
 
export default FormPago;
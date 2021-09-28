import React, {useState} from 'react'

const FormCargo = () => {

    //State del formulario de cargo
    const [cargo, guardarCargo] = useState({
        concepto: '',
        cantidad: ''
    });

    //Destructuring
    const {concepto, cantidad} = cargo;

    //Lee los contenidos del input
    const onChange = e => {
        guardarCargo({
            ...cargo,
            [e.target.name] : e.target.value
        })
    }

    //On submit 
    const onSubmit = e => {
        e.preventDefault()
    }

    return ( 
        <div className="form-container">
            <h2 className="mb-4">Agregar Cargo</h2>
            <form
                className="ml-4"
                onSubmit={onSubmit}
            >
                <div class="mb-3">
                    <label for="concepto-cargo" class="form-label">Concepto de cargo</label>
                    <input type="text" class="form-control" id="concepto-cargo" placeholder="Ej. Diente nuevo" onChange={onChange} value={concepto} name='concepto' />
                </div>
                <div class="mb-3">
                    <label for="cantidad-cargo" class="form-label">Cantidad</label>
                    <input type="number" class="form-control" id="cantidad-cargo" placeholder="$500" onChange={onChange} value={cantidad} name="cantidad"/>
                </div>
                <input type='submit' className="btn btn-azul mb-4" value='Agregar cargo' />
            </form>
        </div>
     );
}
 
export default FormCargo;
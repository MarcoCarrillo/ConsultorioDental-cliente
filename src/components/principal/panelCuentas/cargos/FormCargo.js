import React, {useState, useContext} from 'react';
import clienteContext from '../../../../context/clientes/clienteContext';
import cargoContext from '../../../../context/cargos/cargoContext';

const FormCargo = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Obtener la funcion del context de cargos
    const cargosContext = useContext(cargoContext);
    const { agregarCargo } = cargosContext;    

    //State del formulario de cargo
    const [cargo, guardarCargo] = useState({
        concepto: '',
        cantidad: 0,
        fecha: ''
    });

    //Array destructuring para extraer los datos del cliente
    const [clienteActual] = cliente;

    //Destructuring
    const {concepto, cantidad, fecha} = cargo;

    //Lee los contenidos del input
    const onChange = e => {
        guardarCargo({
            ...cargo,
            [e.target.name] : e.target.value
        })
    }

    //On submit 
    const onSubmit = e => {
        e.preventDefault();

        //Validar

        //Pasar la validacion

        //Agregar el cargo al state de cargos
        cargo.clienteId = clienteActual.id;
        agregarCargo(cargo);
        
        //Reiniciar el form
    }

    return ( 
        <div className="form-container">
            <h2 className="mb-4">Agregar Cargo</h2>
            <form
                className="ml-4"
                onSubmit={onSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="concepto-cargo" className="form-label">Concepto de cargo</label>
                    <input type="text" className="form-control" id="concepto-cargo" placeholder="Ej. Diente nuevo" onChange={onChange} value={concepto} name='concepto' />
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidad-cargo" className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="cantidad-cargo" placeholder="$500" onChange={onChange} value={cantidad} name="cantidad"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha-cargo" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="fecha-cargo" onChange={onChange} value={fecha} name="fecha"/>
                </div>
                <input type='submit' className="btn btn-azul mb-4" value='Agregar cargo' />
            </form>
        </div>
     );
}
 
export default FormCargo;
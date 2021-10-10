import React, {useState, useContext, useEffect} from 'react';
import clienteContext from '../../../../context/clientes/clienteContext';
import cargoContext from '../../../../context/cargos/cargoContext';

const FormCargo = () => {

    //Obtener el state de clientes
    const clientesContext = useContext(clienteContext);
    const { cliente } = clientesContext;

    //Obtener la funcion del context de cargos
    const cargosContext = useContext(cargoContext);
    const { errorcargo, cargoseleccionado, agregarCargo, validarCargo, obtenerCargos } = cargosContext;    

    //Effect que detecta cuando hay un cargo seleccionado
    useEffect(() => {
        if(cargoseleccionado !== null) {
            guardarCargo(cargoseleccionado);
        }else{
            guardarCargo({
                concepto: '',
                cantidad: 0,
                fecha: ''
            });
        }
    },[cargoseleccionado]);

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
        if(concepto.trim() === '' || parseInt(cantidad, 10) < 1 || fecha.trim() === ''){
            validarCargo();
            return;
        }
        //Pasar la validacion

        //Agregar el cargo al state de cargos
        cargo.clienteId = clienteActual.id;
        agregarCargo(cargo);

        //Obtener y filtrar los cargos del cliente actual
        obtenerCargos(clienteActual.id);
        
        //Reiniciar el form
        guardarCargo({
            concepto: '',
            cantidad: 0,
            fecha: ''
        })
    }

    return ( 
        <div className="form-container">
            <h2 className="mb-4">Agregar Cargo</h2>
            
            
            <form
                className="ml-4"
                onSubmit={onSubmit}
            >
                {errorcargo ? <div class="alert alert-danger" role="alert">Hubo un error, intenta de nuevo.</div> :null}
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
                <input type='submit' className="btn btn-azul mb-4" value={cargoseleccionado ? 'Editar Cargo' : 'Agregar Cargo'} />
            </form>
        </div>
     );
}
 
export default FormCargo;
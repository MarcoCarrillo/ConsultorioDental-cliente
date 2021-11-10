import React, {Fragment, useState, useContext} from 'react';
import Swal from 'sweetalert2';

import clienteContext from '../../context/clientes/clienteContext';

const NuevoCliente = () => {

    //Obtener el state del formulario
    const clientesContext = useContext(clienteContext);
    const { formulario, errorformulario, mostrarFormulario, ocultarFormulario, agregarCliente, mostrarError } = clientesContext;


    //State para cliente
    const [cliente, guardarCliente] = useState({
        nombre: '',
        edad: '',
        telefono: '',
        tratamiento: ''
    });


    //Destructuring
    const {nombre, edad, telefono, tratamiento} = cliente;

    //Lee los contenidos del input
    const onChange = e => {
        guardarCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    //Cuando se da clic en guardar cliente
    const onSubmit = e => {
        e.preventDefault();

        //Validar el cliente
        if(nombre.trim() ==='' || telefono.trim()==='' || edad.trim()==='' || tratamiento.trim() === '') {
            // console.log('Campos incompletos');
            mostrarError('Todos los campos son obligatorios.', 'danger');
            return;
        }

        const edadInt = parseInt(edad, 10);
        // console.log(edadInt);
        if(edadInt < 1 || edadInt > 100 ){
            mostrarError('La edad debe estar en el rango de 1 y 100 años.', 'warning');
            return;
        }

        if(telefono.length <10 ){
            // console.log('Edad invalida');
            mostrarError('Debes ingresar un telefono de al menos 10 digitos.', 'warning');
            return;
        }
        
        //en caso de que este correcto agregar al State
        agregarCliente(cliente);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El paciente se agregó correctamente',
            showConfirmButton: false,
            timer: 1500
          })
        //Reiniciar el form
        guardarCliente({
            nombre: '',
            edad: '',
            telefono: '',
            tratamiento: ''
        })

    }

    const onClickForm = () =>{
        if(formulario === false){
            mostrarFormulario();
        }else{
            ocultarFormulario();
        }
    }


    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-azul"
                onClick={onClickForm}
            >Nuevo Paciente</button> 
            {errorformulario ? (<div className={`mt-3 alert alert-${errorformulario.categoria}`}>{errorformulario.msg}</div>)  : null}
            {formulario ?
                    (
                        <form
                            className="form-nuevo-cliente mb-2"
                            onSubmit={onSubmit}
                        >
                            <div className="input-goup mb-3">
                                <input 
                                    type="text" 
                                    id="nombre"
                                    className="form-control" 
                                    placeholder="Nombre del paciente" 
                                    name='nombre'
                                    onChange={onChange}
                                    value={nombre}
                                />
                            </div>
                            <div className="input-goup mb-3">
                                <input 
                                    pattern="(1-99)"
                                    type="number"
                                    id="edad"
                                    className="form-control" 
                                    placeholder="Edad del paciente" 
                                    name='edad'
                                    onChange={onChange}
                                    value={edad}
                                    required
                                />
                            </div>
                            <div className="input-goup mb-3">
                                <input 
                                    type="number" 
                                    id="telefono"
                                    className="form-control" 
                                    placeholder="Telefono del paciente" 
                                    name='telefono'
                                    onChange={onChange}
                                    value={telefono}
                                    required
                                />
                            </div>
                            <div className="input-goup mb-3">
                                <input 
                                    type="text" 
                                    id="tratamiento"
                                    className="form-control" 
                                    placeholder="Tratamiento" 
                                    name='tratamiento'
                                    onChange={onChange}
                                    value={tratamiento}
                                />
                            </div>
                            
                            
                            <input type="submit" className="btn btn-azul" value="Agregar Paciente" />
                        </form>
                    )
                : null
            }
        </Fragment>
        
     );
}
 
export default NuevoCliente;
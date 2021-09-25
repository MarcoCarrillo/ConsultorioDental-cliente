import React, {Fragment, useState} from 'react';

const NuevoCliente = () => {

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

        //en caso de que este correcto agregar al State

        //Reiniciar el form
    }



    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >Nuevo Cliente</button> 

            <form
                className="form-nuevo-cliente mb-2"
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
                        type="number" 
                        id="edad"
                        className="form-control" 
                        placeholder="Edad del paciente" 
                        name='edad'
                        onChange={onChange}
                        value={edad}
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
                
                
                <input type="submit" className="btn btn-primary" value="Agregar cliente" onSubmit={onSubmit}/>
            </form>
        </Fragment>
        
     );
}
 
export default NuevoCliente;
import React, { useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Registro = (props) => {

    //Extraer valores del context 
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    //Cuando el usuario se haya autenticado, registrado
    useEffect(() => {
        if(autenticado){
            props.history.push('/menu-principal');
        }
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje, autenticado, props.history]);

    //State para iniciar sesion
    const [registro, guardarRegistro] = useState({
        nombre: '',
        usuario: '',
        password: '',
        confirmar: ''
    });

    const {nombre, usuario, password, confirmar} = registro; 

    const onChange = e => {
        guardarRegistro({
            ...registro,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if( nombre.trim() === '' || usuario.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
            mostrarAlerta('Todos los campos son obligatorios', 'danger');  
            return;  
        }
        //Que el password sea minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password debe de ser mínimo de 6 caracteres', 'warning'); 
            return;
        }
        //Revisar que los 2 passwords sean iguales
        if( password !== confirmar ){
            mostrarAlerta('Las contraseñas ingresadas no son iguales', 'warning');
            return;
        }

        //Pasarlo al action
        registrarUsuario({
            nombre,
            usuario, 
            password
        })
    }

    return ( 
        <div className="form-usuario back-color">
            <div className="contenedor-form card">
                <img className="card-image" src="logo-consult.png" alt="Logo"/>

                {alerta ? (<div className={`alert alert-${alerta.categoria}`}>{alerta.msg}</div>)  : null}
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre completo"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="usuario">Usuario Administrador</label>
                        <input
                            className="form-control"
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Tu usuario para iniciar sesion"
                            onChange={onChange}
                            value={usuario}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            className="form-control"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu contraseña"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input 
                            className="form-control"
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite la contraseña"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Registrarse" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Volver a inicio de sesion</Link>
            </div>
        </div>
     );
}
 
export default Registro;
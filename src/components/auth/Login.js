import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    //Extraer valores del context 
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion } = authContext;

    //Cuando el usuario no exista
    useEffect(() => {
        if(autenticado){
            props.history.push('/menu-principal');
        }
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje, autenticado,  props.history]);

    //State para iniciar sesion
    const [user, guardarUsuario] = useState({
        usuario: '',
        password: ''
    });

    const {usuario, password} = user; 

    const onChange = e => {
        guardarUsuario({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if(usuario.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'danger');
            return;
        }
        //Pasarlo al action
        iniciarSesion({usuario, password});
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
                        <label htmlFor="usuario">Usuario Administrador</label>
                        <input
                            className="form-control"
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Tu usuario administrador"
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
                        <input type="submit" className="btn btn-primary btn-block" value="Iniciar sesion" />
                    </div>
                </form>
                <Link to={'/registro'} className="enlace-cuenta">Solo usuarios administradores</Link>
            </div>
        </div>
     );
}
 
export default Login;
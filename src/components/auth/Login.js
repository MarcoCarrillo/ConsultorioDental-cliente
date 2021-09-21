import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        admin: '',
        password: ''
    });

    const {admin, password} = usuario; 

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios

        //Pasarlo al action
    }

    return ( 
        <div className="form-usuario back-color">
            <div className="contenedor-form card">
                <img className="card-image" src="logo-consult.png" alt="Logo"/>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="admin">Usuario Administrador</label>
                        <input
                            className="form-control"
                            type="text"
                            id="admin"
                            name="admin"
                            placeholder="Tu usuario administrador"
                            onChange={onChange}
                            value={admin}
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
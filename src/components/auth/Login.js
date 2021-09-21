import React from 'react'

const Login = () => {

    const onChange = () => {

    }

    return ( 
        <div className="form-usuario back-color">
            <div className="contenedor-form card">
                <img className="card-image" src="logo-consult.png" alt="Logo"/>

                <form>
                    <div className="campo-form">
                        <label htmlFor="admin">Administrador</label>
                        <input
                            className="form-control"
                            type="text"
                            id="admin"
                            name="admin"
                            placeholder="Nombre del usuario administrador"
                            onChange={onChange}
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
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Iniciar sesion" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;
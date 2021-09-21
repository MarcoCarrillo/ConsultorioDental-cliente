import React from 'react'

const Registro = () => {

    const onChange = () => {

    }

    return ( 
        <div className="form-usuario back-color">
            <div className="contenedor-form card">
                <img className="card-image" src="logo-consult.png" alt="Logo"/>

                <form>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre completo"
                            onChange={onChange}
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
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input 
                            className="form-control"
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite la contraseña"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Registrarse" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Registro;
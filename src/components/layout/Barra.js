import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

    //Extraer la info de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario, usuarioAutenticado, cerrarSesion} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return ( 
       <header className="app-header">
           {usuario ? <p className="nombre-usuario">Hola Dr. <span>{usuario.nombre}</span></p> :null}
           
           <nav className="nav-principal header">
                <button 
                    className="btn btn-outline-light"
                    onClick={() => cerrarSesion()}
                    >Cerrar sesión</button>
           </nav>
       </header> 
     );
}
 
export default Barra;
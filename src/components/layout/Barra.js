import React from 'react';

const Barra = () => {
    return ( 
       <header className="app-header">
           <p className="nombre-usuario">Hola Dr.<span> Fernando Tinoco</span></p>

           <nav className="nav-principal">
               <a href="#" >Cerrar sesion</a>
           </nav>
       </header> 
     );
}
 
export default Barra;
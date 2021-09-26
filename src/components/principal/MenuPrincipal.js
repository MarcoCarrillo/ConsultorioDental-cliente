import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const MenuPrincipal = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <div>
                        <div className="contenedor-cuentas">

                        </div>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default MenuPrincipal;
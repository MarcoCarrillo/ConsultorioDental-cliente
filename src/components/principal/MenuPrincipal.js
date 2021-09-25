import React from 'react';
import Sidebar from '../layout/Sidebar';

const MenuPrincipal = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
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
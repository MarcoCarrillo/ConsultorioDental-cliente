import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import BarraInfo from '../layout/BarraInfo';
import PagosCargos from './panelCuentas/PagosCargos'

const MenuPrincipal = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <BarraInfo />
                    
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <PagosCargos />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default MenuPrincipal;
import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import BarraInfo from '../layout/BarraInfo';
import PagosCargos from './panelCuentas/PagosCargos';
import Historial from './panelCuentas/Historial';

const MenuPrincipal = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <BarraInfo />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <PagosCargos />
                                </div>
                                <div className="col-sm-6">
                                    <Historial />
                                </div>
                            </div>
                        </div>
                    
                </main>
            </div>
        </div>
     );
}
 
export default MenuPrincipal;
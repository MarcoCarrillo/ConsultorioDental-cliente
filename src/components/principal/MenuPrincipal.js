import React, {useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import BarraInfo from '../layout/BarraInfo';
import PagosCargos from './panelCuentas/PagosCargos';
import Historial from './panelCuentas/Historial';
import AuthContext from '../../context/autenticacion/authContext';

const MenuPrincipal = () => {

    //Extraer la info de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

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
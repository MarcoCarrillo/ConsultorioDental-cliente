import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Registro from '../src/components/auth/Registro';
import MenuPrincipal from './components/principal/MenuPrincipal';

import ClienteState from './context/clientes/clienteState';
import CargoState from './context/cargos/cargoState';
import PagoState from './context/pagos/pagoState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';

//Revisar si hay un token 
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {
  return (
    <ClienteState>
      <CargoState>
        <PagoState>
          <AlertaState>
            <AuthState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/registro" component={Registro} />
                  <RutaPrivada exact path="/menu-principal" component={MenuPrincipal} />
                </Switch>
              </Router>
            </AuthState> 
          </AlertaState>
        </PagoState>  
      </CargoState>
    </ClienteState>
    
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Registro from '../src/components/auth/Registro';
import MenuPrincipal from './components/principal/MenuPrincipal';

import ClienteState from './context/clientes/clienteState';
import CargoState from './context/cargos/cargoState';
import PagoState from './context/pagos/pagoState';
import AlertaState from './context/alertas/alertaState';

function App() {
  return (
    <ClienteState>
      <CargoState>
        <PagoState>
          <AlertaState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/menu-principal" component={MenuPrincipal} />
              </Switch>
            </Router>
          </AlertaState>
        </PagoState>  
      </CargoState>
    </ClienteState>
    
  );
}

export default App;

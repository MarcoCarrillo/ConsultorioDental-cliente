import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Registro from '../src/components/auth/Registro';
import Cuentas from '../src/components/panelCuentas/Cuentas';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/menu-principal" component={Cuentas} />
      </Switch>
    </Router>
  );
}

export default App;

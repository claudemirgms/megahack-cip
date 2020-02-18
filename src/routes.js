import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';
import Contas from './pages/Contas';
import Certificar from './pages/Certificar';
import Confirmacao from './pages/Confirmacao';

export default function Routes(){
    return(
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/historico" component={Historico} />
            <Route path="/contas" component={Contas} />
            <Route path="/certificar" component={Certificar} />
            <Route path="/confirmacao" component={Confirmacao} />
        </Switch>
      </BrowserRouter>  
    );
}

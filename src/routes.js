import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';

export default function Routes(){
    return(
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/historico" component={Historico} />
        </Switch>
      </BrowserRouter>  
    );
}
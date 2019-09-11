import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';
import Painel from './pages/Painel';
import ComponenteProprio from './pages/ComponenteProprio';

import Header from './components/Header';
import { autenticado } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        autenticado() ? (
            <Component {...props} />    
        ) : (
            <Redirect to={{path: '/', state: {from: props.location}}} />
        )
    )} />
);

const Routes = () => {
    return(
        <BrowserRouter> 
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route exact path="/componenteProprio/" component={ComponenteProprio} />

                <PrivateRoute exact path="/painel" component={Painel} />
                <Route path="*" component={Erro} />
            </Switch>        
        </BrowserRouter>
    );
}

export default Routes;
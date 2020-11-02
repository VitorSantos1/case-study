import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoginComponent from '../pages/components/LoginComponent';
import ProductsComponent from '../pages/components/ProductsComponent';
import { AppConsumer } from '../AppContext';

// Change to depend on jwt state value!!!
const AppRoutes = (props) => (
    <AppConsumer>
        {({appState}) =>(
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={LoginComponent} />
                <Route path="/products" component={ProductsComponent} />
            </Switch>
        )}
    </AppConsumer>
);

export default AppRoutes;
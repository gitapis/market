import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} >
        {localStorage.getItem('user')
            ? <Component/>
            : <Redirect to={{pathname: '/market/login'}}/>
        }
    </Route>
);
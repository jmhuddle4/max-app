import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lexie from '../pages/Lexie';
import Sunrise from '../pages/Sunrise';
export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lexie" component={Lexie} />
            <Route path="/sunrise" component={Sunrise} />
            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={Home} />
        </Switch>
    );
}
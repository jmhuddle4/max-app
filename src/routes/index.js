// react
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import Lexie from '../pages/Lexie';
import Project from '../pages/lexie/Project';
import Sunrise from '../pages/Sunrise';

// data
import invisibleCities from '../resources/Lexie/1_Invisible_Cities/invisible-cities.json';
import bookCovers from '../resources/Lexie/2_Bookcovers/bookcovers.json';
import waldNektar from '../resources/Lexie/3_Wald Nektar/waldnektar.json';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lexie" component={Lexie} />
            <Route path="/sunrise" component={Sunrise} />

            {/* dynamically render projects */}
            <Route path="/invisible-cities"
                render={(props) => (
                    <Project {...props} data={invisibleCities} />
                )}
            />
            <Route path="/book-covers"
                   render={(props) => (
                       <Project {...props} data={bookCovers} />
                   )}
            />
            <Route path="/wald-nektar"
                   render={(props) => (
                       <Project {...props} data={waldNektar} />
                   )}
            />

            {/* redirect user to home page if route does not exist and user is not authenticated */}
            <Route component={Home} />
        </Switch>
    );
}
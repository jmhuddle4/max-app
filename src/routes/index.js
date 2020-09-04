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
import laLondon from '../resources/Lexie/4_LA London/lalondon.json';
import spyder from '../resources/Lexie/7_Spyder/spyder.json';
import discovery from '../resources/Lexie/8_Discovery Communications/discovery.json';
import kolohaus from '../resources/Lexie/9_Kolohaus/kolohaus.json';
import venice from '../resources/Lexie/10_Proteggere Venice/venice.json';
import sagely from '../resources/Lexie/11_Sagely/sagely.json';
import peaceBridge from '../resources/Lexie/14_Peace Bridge/peacebridge.json';
import tape from '../resources/Lexie/15_Tape Dispenser/tape.json';
import contactSolution from '../resources/Lexie/16_Contact Solution/contactsolution.json';
import fruityFeels from '../resources/Lexie/17_Fruity Feels/fruityfeels.json';

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
            <Route path="/la-london"
                   render={(props) => (
                       <Project {...props} data={laLondon} />
                   )}
            />
            <Route path="/spyder"
                   render={(props) => (
                       <Project {...props} data={spyder} />
                   )}
            />
            <Route path="/discovery"
                   render={(props) => (
                       <Project {...props} data={discovery} />
                   )}
            />
            <Route path="/kolohaus"
                   render={(props) => (
                       <Project {...props} data={kolohaus} />
                   )}
            />
            <Route path="/venice"
                   render={(props) => (
                       <Project {...props} data={venice} />
                   )}
            />
            <Route path="/sagely"
                   render={(props) => (
                       <Project {...props} data={sagely} />
                   )}
            />
            <Route path="/peace-bridge"
                   render={(props) => (
                       <Project {...props} data={peaceBridge} />
                   )}
            />
            <Route path="/tape"
                   render={(props) => (
                       <Project {...props} data={tape} />
                   )}
            />
            <Route path="/contact-solution"
                   render={(props) => (
                       <Project {...props} data={contactSolution} />
                   )}
            />
            <Route path="/fruity-feels"
                   render={(props) => (
                       <Project {...props} data={fruityFeels} />
                   )}
            />

            {/* redirect user to home page if route does not exist and user is not authenticated */}
            <Route component={Home} />
        </Switch>
    );
}
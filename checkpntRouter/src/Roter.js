import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Showfilms from './Components/Showfilms/Showfilms'


function Roter() {
    return (
        <Switch>
             <Route exact path='/' component={App} />
             <Route  path="/:id" component={Showfilms} />
        </Switch>
    );
};

export default Roter;

import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import AllSeafood from "./AllSeafood";
import SeafoodItem from "./SeafoodItem";





const Seafood = (props) => (
    <Switch>
        <Route exact path='/production' component={AllSeafood}/>
        <Route path='/production/:id' params={props} component={SeafoodItem}/>
    </Switch>
)


export default Seafood;
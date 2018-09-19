
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AllSeafood from "./AllSeafood";
import SeafoodItem from "./SeafoodItem";
import AddFishItem from "./AddFishItem/AddFishItem";





const Seafood = (props) => (
    <Switch>
        <Route exact path='/production' component={AllSeafood}/>
        <Route path='/production/add' params={props} component={AddFishItem}/>
        <Route path='/production/change/:id' params={props} component={AddFishItem}/>
        <Route path='/production/:id' params={props} component={SeafoodItem}/>

    </Switch>
);


export default Seafood;
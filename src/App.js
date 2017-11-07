import React, {Component} from 'react';
import Header from './Header';
import Slider from './Slider';
import Home from './pages/Home';
import About from './pages/About';
import Production from './pages/Production';
import ShoppingCart from './pages/ShoppingCart';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

import './index.css';
import './App.css';

// For this demo, we are using the UMD build of react-router-dom
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'
import Katalog from './Katalog'



const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/production' component={Production}/>
            <Route path='/about' component={About}/>
            <Route path='/shopping_cart' component={ShoppingCart}/>
        </Switch>
    </main>
)

class App extends React.Component {
    render() {
        return (
            <div className={css(AppStyle.container)}>
                <Header />
                <Slider/>
                <Main />
            </div>
        )
    }
    componentDidMount(){
        Katalog.updatePounch();
    }
}


export default App;

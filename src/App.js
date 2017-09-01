import React, {Component} from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Production from './pages/Production';

import './index.css';
import './App.css';

// For this demo, we are using the UMD build of react-router-dom
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'






const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/production' component={Production}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
)


const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs

export default App;

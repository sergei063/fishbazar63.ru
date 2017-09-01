import React from 'react';
import ReactDOM from 'react-dom';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'

import './index.css';
import App from './App';

import AboutPage from './pages/About';
import Page404 from './pages/Page404';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById('root'));


alert(1)
registerServiceWorker();

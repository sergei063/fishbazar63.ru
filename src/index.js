import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter,HashRouter, Switch, Route, Link } from 'react-router-dom'

import './index.css';
import App from './App';

import AboutPage from './pages/About';
import Page404 from './pages/Page404';

import registerServiceWorker from './registerServiceWorker';
import './css/GlobalStyles'; // global styles through Aphrodite

ReactDOM.render(
    <BrowserRouter basename="/fishbazar63.ru">
        <App />
    </BrowserRouter>
, document.getElementById('root'));



registerServiceWorker();


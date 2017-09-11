import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter,Router,HashRouter, Switch, Route, Link } from 'react-router-dom'

import './index.css';
import App from './App';
import $ from 'jquery'

import registerServiceWorker from './registerServiceWorker';
import './css/GlobalStyles'; // global styles through Aphrodite

import createHistory from 'history/createBrowserHistory'
const history = createHistory()
history.listen((location, action) => {
//    console.log(location);
});

ReactDOM.render(
    <Router history={history} basename="/fishbazar63.ru">
        <App />
    </Router>
, document.getElementById('root'));

const listenScrollEvent   = () => {
    let top = $(window).scrollTop(),
        h_hght = 15,
        elem = $('header');

   console.log(top);

    if (top < h_hght) {
        elem.css('top', '');
    } else {
        elem.css('top', 0);
        elem.css('position', 'fixed');
    }

    //>80
}
window.addEventListener('scroll', listenScrollEvent);


registerServiceWorker();


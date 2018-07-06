import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'

import './index.css';
import App from './App';
import $ from 'jquery'

import registerServiceWorker from './registerServiceWorker';
import './css/GlobalStyles'; // global styles through Aphrodite
import {css} from 'aphrodite/no-important';

import AppStyle from './css/AppStyle';


import createHistory from 'history/createBrowserHistory'
const history = createHistory()

history.listen((location, action) => {
    //console.log(location);
});
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

ReactDOM.render(
    <Router history={history} basename="/fishbazar63.ru">
        <App  history={history} isMobile={isMobile} />
    </Router>
    , document.getElementById('root'));

const listenScrollEvent = () => {
    let top = $(window).scrollTop(),
        h_hght = 15,
        elem = $('nav');


    if ((top < h_hght) || ($(window).width()<=750)) {
        //elem.css('top', '');
        elem.addClass(css(AppStyle.menu_inline_ul));
        elem.removeClass(css(AppStyle.menu_inline_ul_scroll));
    } else {
        elem.removeClass(css(AppStyle.menu_inline_ul));
        elem.addClass(css(AppStyle.menu_inline_ul_scroll));
        /* elem.css('top', 0);
         elem.css('position', 'fixed');*/
    }
}
const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
//window.addEventListener('scroll', listenScrollEvent);

//alert($(window).width())

//startSlider();
registerServiceWorker();


//alert(window.isMobile.any())
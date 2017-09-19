import React from 'react';
import ReactDOM from 'react-dom';
import {  Router} from 'react-router-dom'

import './index.css';
import App from './App';
import $ from 'jquery'

import registerServiceWorker from './registerServiceWorker';
import './css/GlobalStyles'; // global styles through Aphrodite
import { css } from 'aphrodite/no-important';

import AppStyle from './css/AppStyle';


import createHistory from 'history/createBrowserHistory'
const history = createHistory()

if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        enumerable: false,
        value: function(obj) {
            var newArr = this.filter(function(el) {
                return el == obj;
            });
            return newArr.length > 0;
        }
    });
}
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
        elem = $('nav');



    if (top < h_hght) {
        //elem.css('top', '');
        elem.addClass(css(AppStyle.menu_inline_ul));
        elem.removeClass(css(AppStyle.menu_inline_ul_scroll));
    } else {
        elem.removeClass(css(AppStyle.menu_inline_ul));
        elem.addClass(css(AppStyle.menu_inline_ul_scroll));

       /* elem.css('top', 0);
        elem.css('position', 'fixed');*/
    }

    //>80
}
const getRandomArbitrary = (min, max)  => {
    return Math.floor(Math.random() * (max - min)) + min;
}
window.addEventListener('scroll', listenScrollEvent);

setInterval(() => {
    $('#slider').removeClass();
   let index = getRandomArbitrary(0,5);
   //console.log(index)
    switch(index) {
        case 0: {
            $('#slider').addClass(css(AppStyle.slider));
            break;
        }
        case 1: {
            $('#slider').addClass(css(AppStyle.slider_1));
            break;
        }
        case 2: {
            $('#slider').addClass(css(AppStyle.slider_2));
            break;
        }case 3: {
            $('#slider').addClass(css(AppStyle.slider_3));
            break;
        }case 4: {
            $('#slider').addClass(css(AppStyle.slider_4));
            break;
        }
        default: {
            $('#slider').addClass(css(AppStyle.slider));
            break;
        }
    }
}, 3000);

registerServiceWorker();


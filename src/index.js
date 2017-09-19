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
//    console.log(location);
});

ReactDOM.render(
    <Router history={history} basename="/fishbazar63.ru">
        <App />
    </Router>
    , document.getElementById('root'));

const listenScrollEvent = () => {
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
const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
window.addEventListener('scroll', listenScrollEvent);

let indexSlider = 0;
const startSlider=()=>{
    if (indexSlider <=3) {
        $('#slider').removeClass();
        switch (indexSlider) {
            case 0: {
                $('#slider').addClass(css(AppStyle.slider));
                $('#slider_text').html($('#slider_text_0').html());
                break;
            }
            case 1: {
                $('#slider').addClass(css(AppStyle.slider_1));
                $('#slider_text').html($('#slider_text_1').html());
                break;
            }
            case 2: {
                $('#slider').addClass(css(AppStyle.slider_2));
                $('#slider_text').html($('#slider_text_2').html());
                break;
            }
            case 3: {
                $('#slider').addClass(css(AppStyle.slider_3));
                $('#slider_text').html($('#slider_text_3').html());
                break;
            }
            default: {
                $('#slider').addClass(css(AppStyle.slider));
                $('#slider_text').html($('#slider_text_0').html());
                break;
            }
        }
        indexSlider++

        setTimeout(() => startSlider(), 7000);
    } else {
        indexSlider = 0;
        startSlider()
    }

};
startSlider();
registerServiceWorker();


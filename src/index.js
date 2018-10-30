/*  eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ConnectedRouter, routerMiddleware,} from 'react-router-redux';
import {Provider} from 'react-redux';
import $ from 'jquery';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore} from 'redux';
import {css} from 'aphrodite/no-important';
import App from './App';
import './css/GlobalStyles'; // global styles through Aphrodite
import allReducers from './reducers';
import AppStyle from './css/AppStyle';
import registerServiceWorker from './registerServiceWorker';


/*  eslint-disable no-unused-vars */


const history = createHistory();
history.listen((location, action) => {
    if (!location.notScrollToTop) {
        window.scrollTo(0, 0);
    }
    // console.log(location);
    // console.log(action);
});

const middleware = routerMiddleware(history);

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(middleware, thunk)),
);

store.subscribe(() => {
    // console.log('subscribe',store.getState())
});
var isMobile = {
    Android() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any() {
        return (
            isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
        );
    },
};

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} basename="/fishbazar63.ru">
            <App history={history} isMobile={isMobile} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);

const listenScrollEvent = () => {
    const top = $(window).scrollTop();

    const h_hght = 15;

    const elem = $('nav');

    if (top < h_hght /* || ($(window).width()<=750) */) {
    // elem.css('top', '');
        elem.addClass(css(AppStyle.menu_inline_ul));
        elem.removeClass(css(AppStyle.menu_inline_ul_scroll));
    } else {
        elem.removeClass(css(AppStyle.menu_inline_ul));
        elem.addClass(css(AppStyle.menu_inline_ul_scroll));
    /* elem.css('top', 0);
         elem.css('position', 'fixed'); */
    }
};
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min)) + min;
window.addEventListener('scroll', listenScrollEvent);

// alert($(window).width())

// startSlider();
registerServiceWorker();

// alert(window.isMobile.any())

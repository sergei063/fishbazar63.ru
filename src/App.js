import React, {Component} from 'react';
import Header from './Header';
import Slider from './Slider';
import Home from './pages/Home';
import About from './pages/About';
import Production from './pages/Production';
import ShoppingCart from './pages/ShoppingCart';
import Location from './pages/Location';
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
            <Route path='/location' component={Location}/>
        </Switch>
    </main>
)
const Footer = () => (
        <div className={css(AppStyle.fon, AppStyle.textAlignCenter)}>
            <a href="https://metrika.yandex.ru/stat/?id=46654176&amp;from=informer"
               target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/46654176/3_1_FFFFFFFF_EFEFEFFF_0_pageviews" style={{width:"88px", height:"31px", border:"0"}} alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="46654176" data-lang="ru" /></a>
        </div>
)

class App extends React.Component {
    render() {
        return (
            <div className={css(AppStyle.container)}>
                <Header />
                <Slider/>
                <Main />
                <Footer />
            </div>
        )
    }
    componentDidMount(){
        Katalog.updatePounch();
    }
}


export default App;

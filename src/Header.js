import React from 'react';


import {  HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

const Header = () => (
    <header>

        <div className={css(AppStyle.siteTitle)}>
            <h1>Интернет магазин морепродуктов <span ><Link className={css(AppStyle.red_text)} to='/'>FishBazar63.ru</Link></span></h1>
            <h2>Доставка морепродуктов по Самаре бесплатно</h2>
        </div>
        <nav>
            <ul >
                <li className={css(AppStyle.menu_inline)}><Link to='/'>Главная</Link></li>
                <li className={css(AppStyle.menu_inline)}><Link to='/production'>Продукция</Link></li>
                <li className={css(AppStyle.menu_inline)}><Link to='/about'>О&nbsp;нас</Link></li>
            </ul>
        </nav>
    </header>
)
export default Header;
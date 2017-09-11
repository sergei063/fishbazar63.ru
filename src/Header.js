import React from 'react';


import {  HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

const Header = (props) => {
    return(<header>


        <nav>
            <ul>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Главная</Link></li>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Новости</Link></li>
                <li id="page_production" className={css(AppStyle.menu_inline)}><Link to='/production'>Продукция</Link></li>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Партнеры</Link></li>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Контакты</Link></li>
                <li id="page_about" className={css(AppStyle.menu_inline)}><Link to='/about'>О&nbsp;нас</Link></li>
            </ul>
        </nav>
    </header>
)}
export default Header;
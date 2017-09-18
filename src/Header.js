import React from 'react';


import {  HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';
import HeaderStyle from './css/HeaderStyle';

const Header = (props) => {
    return(<header>


        <nav>
            <div className={css(AppStyle.floatRight)}>
                <ul className={css(HeaderStyle.headBarUl)}>
                    <li className={css(HeaderStyle.headBarLI)}>
                        <Link id="header_pouch" className={css(HeaderStyle.pouchA)} to='/shopping_cart'><span className={css(HeaderStyle.pouch_a_span)}>0</span></Link>

                    </li>
                </ul>

            </div>
            <div className={css(AppStyle.floatRight)}>
            <ul>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Главная</Link></li>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Новости</Link></li>
                <li id="page_production" className={css(AppStyle.menu_inline)}><Link to='/production'>Продукция</Link></li>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Партнеры</Link></li>
                <li id="page_home" className={css(AppStyle.menu_inline)}><Link to='/'>Контакты</Link></li>
                <li id="page_about" className={css(AppStyle.menu_inline)}><Link to='/about'>О&nbsp;нас</Link></li>
            </ul>
            </div>
        </nav>
    </header>
)}
export default Header;
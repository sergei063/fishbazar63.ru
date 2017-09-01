import React from 'react';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'


const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/production'>Продукция</Link></li>
                <li><Link to='/about'>О нас</Link></li>
            </ul>
        </nav>
    </header>
)
export default Header;
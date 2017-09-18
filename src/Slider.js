import React from 'react';


import {  HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

const Slider = () => (
    <div id="slider" className={css(AppStyle.slider)}>
        <div className={css(AppStyle.siteTitle)}>
            <h1>Интернет магазин рыбы и морепродуктов <span ><Link className={css(AppStyle.red_text)} to='/'>FishBazar63.ru</Link></span></h1>
            <h2>Доставка по Самаре бесплатно</h2>
        </div>

    </div>
)
export default Slider;
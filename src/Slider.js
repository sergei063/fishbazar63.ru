import React from 'react';


import {  HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

const Slider = () => (
    <div id="slider" className={css(AppStyle.slider)}>
        <div className={css(AppStyle.siteTitle)}>
            <h1><Link to='/'>FishBazar63.ru</Link></h1>
            <div className={css(AppStyle.slider_line)}></div>
            <p id="slider_text"></p>

            <p id="slider_text_0" className={css(AppStyle.displayNone)} >...Hаши цены конкурентны...<br/>врят ли где либо еще  Вы найдете высочайшее качество, такую цену да еще бесплатную доставку.</p>
            <p id="slider_text_1" className={css(AppStyle.displayNone)} >...Будьте спокойны....<br/>Наш курьер доставит Вам продукт Высочайшего качества в кратчайшие сроки.</p>
            <p id="slider_text_2" className={css(AppStyle.displayNone)} >...Pамороженная на рыбацком судне рыбка<br/>размораживается только на Вашей кухне!!..и нигде больше!</p>
            <p id="slider_text_3" className={css(AppStyle.displayNone)} >...Не нужно платить за лед.<br/>Наши креветки 100% без глазури.</p>
        </div>

    </div>
)
export default Slider;
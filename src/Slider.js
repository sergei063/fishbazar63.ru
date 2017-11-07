import React from 'react';


import {  HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

import Carousel from './components/Carousel';


const carousel = new Carousel();

const bntClick = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    switch (event.target.id) {
        case "slider_prev_btn": {
            carousel.prev()
            break;
        }
        case "slider_next_btn": {
            carousel.next()
            break;
        }
    }
}

const Slider = () => {

    carousel.startSlider();

    return(
    <div id="slider" className={css(AppStyle.slider)}>
        <a id="slider_prev_btn" onClick={bntClick} className={css(AppStyle.prev)} href="#"></a>
        <a id="slider_next_btn" onClick={bntClick} className={css(AppStyle.next)} href="#"></a>
        <div className={css(AppStyle.siteTitle)}>
            <h1><Link to='/'>FishBazar63</Link></h1>
            <div className={css(AppStyle.slider_line)}></div>
            <p id="slider_text" className={css(AppStyle.sliderText)}>...Hаши цены конкурентны...<br/>вряд ли где либо еще  Вы найдете высочайшее качество, такую цену да еще бесплатную доставку.</p>

            <p id="slider_text_0" className={css(AppStyle.displayNone)} >...Hаши цены конкурентны...<br/>вряд ли где либо еще  Вы найдете высочайшее качество, такую цену да еще бесплатную доставку.</p>
            <p id="slider_text_1" className={css(AppStyle.displayNone)} >...Будьте спокойны....<br/>Наш курьер доставит Вам продукт Высочайшего качества в кратчайшие сроки.</p>
            <p id="slider_text_2" className={css(AppStyle.displayNone)} >...Замороженная на рыбацком судне рыбка<br/>размораживается только на Вашей кухне!!..и нигде больше!</p>
            <p id="slider_text_3" className={css(AppStyle.displayNone)} ><Link to='/production/salmon_of_chile_3_4'>......Замороженная на рыбацком судне рыбка<br/>размораживается только на Вашей кухне!!..и нигде больше!.</Link></p>
            <p id="slider_text_4" className={css(AppStyle.displayNone)} ><Link to='/production/shrimp_angular'>...Не нужно платить за лед.<br/>Наши креветки <u>100%</u> без глазури.</Link></p>
        </div>
        <div id="slider_navigate_this"></div>

    </div>)
}
export default Slider;
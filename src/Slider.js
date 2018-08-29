import React from 'react';


import {  Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

import Carousel from './components/Carousel';
import PouchIcon from "./containers/PouchIcon/PouchIcon";






const Slider = () => {

    //carousel.startSlider();

    return(
    <div id="slider" className={css(AppStyle.slider)}>

        {/*<a id="slider_prev_btn" onClick={bntClick} className={css(AppStyle.prev)} href="#"></a>
        <!--a id="slider_next_btn" onClick={bntClick} className={css(AppStyle.next)} href="#"></a>*/}
        <div className={css(AppStyle.siteTitle)}>
           Морепродукты с океана<br/>Дальнего Востока

            <p id="slider_text" className={css(AppStyle.sliderText)}>а еще Аргентины и Чили</p>

            <p id="slider_text_0" className={css(AppStyle.displayNone)} >...Hаши цены конкурентны...<br/>вряд ли где либо еще  Вы найдете высочайшее качество, за такую цену.</p>
            <p id="slider_text_1" className={css(AppStyle.displayNone)} >...Будьте спокойны....<br/>Наш курьер доставит Вам продукт Высочайшего качества в кратчайшие сроки.</p>
            <p id="slider_text_2" className={css(AppStyle.displayNone)} >Магазин рыбы и морепродуктов</p>
            <p id="slider_text_3" className={css(AppStyle.displayNone)} ><Link to='/production/salmon_of_chile_3_4'>......Замороженная на рыбацком судне рыбка<br/>размораживается только на Вашей кухне!!..и нигде больше!.</Link></p>
            <p id="slider_text_4" className={css(AppStyle.displayNone)} ><Link to='/production/shrimp_angular'>...Не нужно платить за лед.<br/>Наши креветки <u>100%</u> без глазури.</Link></p>
        </div>
        <div className={css(AppStyle.fastDeliveryText)}>Быстрая доставка к вам домой</div>
        <div id="slider_navigate_this"></div>

    </div>)
};
export default Slider;
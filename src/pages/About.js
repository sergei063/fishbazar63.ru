import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import {Link } from 'react-router-dom';
import AboutStyle from '../css/AboutStyle';
import AppStyle from '../css/AppStyle';


const About = () => (
    <div className={css(AboutStyle.text)}>
        Рыба - наш семейный бизнес. Уже более 20&nbsp;лет мы&nbsp;поставляем высококачественные, свежемороженные морепродукты с&nbsp;Дальнего Востока для оптовой торговли.<br/><br/>
        Постоянный контроль условий доставки и&nbsp;хранения морепродуктов исключает потерю качества, пользы и&nbsp;вкуса! Сегодня, с&nbsp;целью развития и&nbsp;расширения бизнеса,
        мы&nbsp;динамично развиваем направление розничной торговли!<br/><br/>
        Наша Цель- доставить Вам продукт высочайшего качества по&nbsp;конкурентным ценам, максимально приближенным к&nbsp;оптовым.
        Человеческие отношения ставим в&nbsp;основу ведения бизнеса. Для нас очень важно, что&nbsp;бы Вы&nbsp;возвращались с&nbsp;удовольствием
        в&nbsp;интернет магазин <span ><Link className={css(AppStyle.red_text)} to='/'>FishBazar63.ru</Link></span>, а&nbsp;мы&nbsp;всегда будем радовать Вас качественными морепродуктами.
    </div>
)
export default About;
import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Link} from 'react-router-dom';
import AboutStyle from '../css/AboutStyle';
import AppStyle from '../css/AppStyle';


const About = () => (
    <div className={css(AboutStyle.cnt)}>
        <div className={css(AppStyle.bottomLine, AboutStyle.line)}></div>
        <br/><br/>
        <div className={css(AboutStyle.text)}>
            <h2 >О нас</h2>
            Рыба - наш семейный бизнес. Уже более 20&nbsp;лет мы&nbsp;поставляем высококачественные, свежемороженные
            морепродукты с&nbsp;Дальнего Востока для оптовой торговли.<br/><br/>
            Постоянный контроль условий доставки и&nbsp;хранения морепродуктов исключает потерю качества, пользы и&nbsp;
            вкуса! Сегодня, с&nbsp;целью развития и&nbsp;расширения бизнеса,
            мы&nbsp; развиваем направление розничной торговли!<br/><br/>
            Наша Цель- доставить Вам продукт высочайшего качества по&nbsp;конкурентным ценам, максимально приближенным
            к&nbsp;оптовым.
            Человеческие отношения ставим в&nbsp;основу ведения бизнеса. Для нас очень важно, что&nbsp;бы Вы&nbsp;
            возвращались с&nbsp;удовольствием
            в&nbsp;интернет магазин <span ><Link className={css(AppStyle.red_link)} to='/'>FishBazar63</Link></span>,
            а&nbsp;мы&nbsp;всегда будем радовать Вас качественной рыбой и  морепродуктами.
            <br/><br/>
            <h2 >Наши преимущества</h2>
            - <u><b>БЕЗУПРЕЧНОЕ КАЧЕСТВО.</b></u> Наш продукт не лежит на витринах, не перемораживается по несколько раз каждый продукт имеет ветеринарное свидетельство; постоянный контроль условий доставки.<br/><br/>
            - <u><b>ЦЕНЫ НИЖЕ РЫНОЧНЫХ.</b></u><br/><br/>
            - <u><b>НЕТ ПОСРЕДНИКОВ.</b></u> Одна из первопричин низкого качества продукта-его долгая(через 33 оптовика) дорога до конечного потребителя…МЫ САМИ ОРГАНИЗУЕМ ДОСТАВКУ С ДАЛЬНЕГО ВОСТОКА!!Сами привезли-сами продали на опт и в розницу. Все просто.<br/><br/>
            -  <u><b>ДОСТАВИМ НЕ ПРОСТО БЫСТРО, А В УДОБНОЕ ДЛЯ ВАС ВРЕМЯ!</b></u> И кстати 2 раза в неделю у нас бесплатная доставка об этом в разделе новости или ВК,instagram.<br/>


        </div>
        <div className={css(AppStyle.bottomLine, AboutStyle.line)}></div>
        <br/><br/><br/><br/><br/>
    </div>
)
export default About;
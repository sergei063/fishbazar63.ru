import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Link} from 'react-router-dom';
import NewsStyle from '../css/NewsStyle';
import AppStyle from '../css/AppStyle';

const News = () => (
    <div className={css(NewsStyle.cnt)}>
        <div className={css(AppStyle.bottomLine, NewsStyle.line)}></div>
        <br/><br/>
        <div className={css(NewsStyle.text)}>
            <h2>Доставка</h2>
            <div className={css(NewsStyle.dateNews)}>02.04.2018</div>
            <img src={require('../img/news/greenland_shrimp.jpg')} alt="" width='90%' height='90%'></img><br/>

            <p><u>Поступление гренландских креветок</u><br/>
                -Размер 90-120 шт/кг.<br/>
                -Глазурь- до 3% от объема(техническая глазурь предотвращающая высыхание продукта) т.е. на каждый килограмм 30 грамм глазури!<br/>
                -Цена 550 руб/кг<br/>
                VK в личку.<br/>
                89171682771.<br/>
                Viber/WhatsApp/Telegram 89171682771<br/>
            </p>
            <hr/>  <h2>Доставка</h2>
            <div className={css(NewsStyle.dateNews)}>23.03.2018</div>
            <img src={require('../img/news/delivery.jpg')} alt="" width='90%' height='90%'></img><br/>

            <p>Друзья! Начиная с&nbsp;26&nbsp;марта, на&nbsp;каждой неделе мы&nbsp;будем выбирать по&nbsp;2&nbsp;ДНЯ БЕСПЛАТНОЙ ДОСТАВКИ, о&nbsp;чем будем сообщать в&nbsp;наших постах заблаговременно! <br/>Так что следите и&nbsp;не&nbsp;упустите возможность заказать превосходнейший продукт на&nbsp;дом с&nbsp;абсолютно бесплатной доставкой!<br/>
                Заказы принимаем:<br/>
                тел 89171682771<br/>
                VK&nbsp;в&nbsp;личку<br/>
                Viber/WhatsApp/Telegram 89171682771<br/>
            </p>
            <hr/>
        <p>
            <h2>Поступление икры</h2>
            <div className={css(NewsStyle.dateNews)}>28.02.2018</div>
            <img src={require('../img/news/caviar.jpg')} alt="" width='90%' height='90%'></img><br/>
            Друзья! Рады сообщить, что до&nbsp;8&nbsp;Марта к&nbsp;нам приходит вкуснейшая красная икра Кеты с&nbsp;Сахалина!!! <br/>
            Успейте сделать предзаказ!!! Количество икры ограничено! Цена 4000руб за&nbsp;кг. При заказе от&nbsp;1кг доставим бесплатно! <br/>Первые 10&nbsp;человек, кто сделает
            предзаказ под этим постом в VK на&nbsp;любой объем(мин 250грамм), так&nbsp;же получат бесплатную доставку.<br/>
            Мы&nbsp;одни из&nbsp;немногих, кто поставляет именно замороженную! икру с&nbsp;Сахалина, что сохраняет ее&nbsp;качество и&nbsp;ИСКЛЮЧАЕТ ДОБАВЛЕНИЕ КОНСЕРВАНТОВ!!! Пишите под этим постом!Звоните! Заказывайте!!!<br/>
<br/>

        </p>

        </div>
        <div className={css(AppStyle.bottomLine, NewsStyle.line)}></div>
        <br/><br/><br/><br/><br/>
    </div>
)
export default News;
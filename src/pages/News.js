import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Link} from 'react-router-dom';
import NewsStyle from '../css/NewsStyle';
import AppStyle from '../css/AppStyle';
import ProductionStyle from "../css/ProductionStyle";

const generateOneNews = (date,inNskText,inSamaraText) => {
    return(
        <p>
        <hr/>  <h2>Бесплатная доставка</h2>
        <div className={css(NewsStyle.dateNews)}>{date}</div>
        <img src={require('../img/news/delivery.jpg')} alt="" width='90%' height='90%'></img><br/>
        Друзья! На этой неделе:<br/>
            <u>{inNskText}</u> до 17.00 доставка будет бесплатной в г. Новокуйбышевск и п. Гранный;<br/>
            <u>{inSamaraText}</u>в г. Самара, Сухая Самара и Волгарь!<br/>
        Заказывайте!ДОСТАВИМ БЕСПЛАТНО!!!

        <br/><br/>
            <a className={css(ProductionStyle.a)}  target="_blank" href='https://www.instagram.com/fishbazar63/'>Instagram</a>,<br/>
            <a className={css(ProductionStyle.a)}  target="_blank" href='https://vk.com/id454817122'>VK личка</a><br/>
            <a className={css(ProductionStyle.a)} href='tel:+79171682771'>+7(917)168-27-71</a>.<br/>
            <span className={css(ProductionStyle.a)}>Viber/WhatsApp/Telegram +79171682771</span><br/>
            <a className={css(ProductionStyle.a)}  target="_blank" href='http://fishbazar63.ru/'>fishbazar63</a><br/>
    </p>
    )
}

const News = () => (
    <div className={css(NewsStyle.cnt)}>
        <div className={css(AppStyle.bottomLine, NewsStyle.line)}></div>
        <br/><br/>
        <div className={css(NewsStyle.text)}>

            {generateOneNews("04.06.2018","4  и 8 июня","6 и 10 июня")}
            {generateOneNews("28.05.2018","29 и 31 мая","30 мая и 2 июня")}
            {generateOneNews("21.05.2018","24 и 26 мая","23 и 25 мая")}
            {generateOneNews("14.05.2018","16 и 17 мая","15 и 19 мая")}
            {generateOneNews("07.05.2018","8 и 11 мая","7 и 10 мая")}
            {generateOneNews("30.04.2018","2 и 4 мая","30 апреля  и 1 мая")}
            {generateOneNews("16.04.2018","17 и 20 апреля","19 и 22 апреля")}
            {generateOneNews("10.04.2018","12 и 13 апреля","11 и 15 апреля")}

            <p>
                <h2>Поступление икры</h2>
                <div className={css(NewsStyle.dateNews)}>05.04.2018</div>
                <img src={require('../img/news/caviar.jpg')} alt="" width='90%' height='90%'></img><br/>
                Друзья! К майским праздникам ожидаем поступление икры кеты с Дальнего Востока!
                Открыт предзаказ!!Цена 4000руб/кг.
                Минимальный заказ 250 грамм
                Как и в прошлый раз, для первых 10 покупателей сделаем бесплатную доставку!
                Количество икры ограничено!
                <br/>
                VK в личку.<br/>
                89171682771.<br/>
                Viber/WhatsApp/Telegram 89171682771<br/>
                www.fishbazar63.ru<br/>

            </p>

            <p>
            <h2>Поступление гренландских креветок</h2>
            <div className={css(NewsStyle.dateNews)}>02.04.2018</div>
            <img src={require('../img/news/greenland_shrimp.jpg')} alt="" width='90%' height='90%'></img><br/>

            <p><u>Поступление гренландских креветок</u><br/>
                -Размер 90-120 шт/кг.<br/>
                -Глазурь- до 3% от объема(техническая глазурь предотвращающая высыхание продукта) т.е. на каждый килограмм 30 грамм глазури!<br/>
                -Цена 550 руб/кг<br/>
                VK в личку.<br/>
                89171682771.<br/>
                Viber/WhatsApp/Telegram 89171682771<br/>
                www.fishbazar63.ru<br/>
            </p>
            </p>

            <hr/>  <h2>Бесплатная доставка</h2>
            <div className={css(NewsStyle.dateNews)}>02.04.2018</div>
            <img src={require('../img/news/delivery.jpg')} alt="" width='90%' height='90%'></img><br/>
            Друзья! На этой неделе:<br/>
            3 и 5 апреля доставка будет бесплатной в г. Новокуйбышевск и п. Гранный;<br/>
            2 и 7 апреля в г. Самара, Сухая Самара и Волгарь!<br/>
            Заказывайте!ДОСТАВИМ БЕСПЛАТНО!!!

            <br/>VK личка.<br/>
            89171682771.<br/>
            Viber/WhatsApp/Telegram 89171682771<br/>
            www.fishbazar63.ru<br/>

            <hr/>  <h2>Бесплатная доставка</h2>
            <div className={css(NewsStyle.dateNews)}>23.03.2018</div>
            <img src={require('../img/news/delivery.jpg')} alt="" width='90%' height='90%'></img><br/>
            Друзья<br/>
            На следующей неделе 27 и 30 марта доставка будет бесплатной в г. Новокуйбышевск; 26 и 29 марта в г. Самара
            Заказывайте ДОСТАВИМ БЕСПЛАТНО<br/>
            VK личка.<br/>
            89171682771.<br/>
            Viber/WhatsApp/Telegram 89171682771<br/>
            www.fishbazar63.ru<br/>

            <hr/>  <h2>Бесплатная доставка</h2>
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
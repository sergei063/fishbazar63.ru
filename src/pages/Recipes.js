import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {Link} from 'react-router-dom';
import AboutStyle from '../css/AboutStyle';
import AppStyle from '../css/AppStyle';


const Recipes = () => (
    <div className={css(AboutStyle.cnt)}>
        <div className={css(AppStyle.bottomLine, AboutStyle.line)}></div>
        <br/><br/>
        <div className={css(AboutStyle.text)}>
            <p>
                Друзья,рады представить Вам наш собственный блог,посвященный рыбе и морепродуктам,а точнее о блюдах,которые можно из всего этого приготовить.
                У некоторых наших клиентов,не редко возникают сложности с приготовлением тех или иных  блюд. Поэтому здесь,мы постараемся предоставить максимально содержательный и качественный контент! Что бы каждый,у кого возникает вопрос,смог посмотреть,понять и приготовить!
                <br/>И так,добро пожаловать!<br/><br/><br/>Мы начинаем!
            </p>

            <br/><br/>
            <br/><br/>

        </div>
        <div className={css(AppStyle.bottomLine, AboutStyle.line)}></div>
        <br/><br/><br/><br/><br/>
    </div>
)
export default Recipes;
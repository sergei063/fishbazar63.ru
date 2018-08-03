import React from 'react';
import {css} from 'aphrodite/no-important';
import AboutStyle from '../css/AboutStyle';
import AppStyle from '../css/AppStyle';
import RecipesStyle from '../css/RecipesStyle';

const Recipes = () => (
    <div className={css(AboutStyle.cnt)}>
        <div className={css(AppStyle.bottomLine, AboutStyle.line)}></div>
        <br/><br/>
        <div className={css(AboutStyle.text)}>
            <p>
                Друзья,рады представить Вам наш собственный блог,посвященный рыбе и морепродуктам,а точнее о
                блюдах,которые можно из всего этого приготовить.
                У некоторых наших клиентов,не редко возникают сложности с приготовлением тех или иных блюд. Поэтому
                здесь,мы постараемся предоставить максимально содержательный и качественный контент! Что бы каждый,у
                кого возникает вопрос,смог посмотреть,понять и приготовить!
                <br/>И так,добро пожаловать!<br/><br/><br/>Мы начинаем!
            </p>

            <br/><br/>


            <div className={css(AppStyle.textAlignCenter)}>
                <h2><b>Готовим лангустины!</b></h2>
            </div>
            Сегодня мы&nbsp;Вам покажем как быстро, просто,а главное вкустно приготовить этот продукт!<br/><br/>
            <b>1. Варим лангустины</b><br/>
            <div className={css(RecipesStyle.video)}>
                <video controls  width="100%" height="100%">
                    <source src={require('../video/video_langoustine.mp4')} type="video/mp4"/>
                </video>
            </div>
            <br/><br/>
            <b>2. Жарим лангустины</b><br/>
            <div className={css(RecipesStyle.video)}>
                <video controls width="100%" height="100%">
                    <source src={require('../video/video_roast_langoustine.mp4')} type="video/mp4"/>
                </video>
            </div>
            <br/><br/>
            <div className={css(AppStyle.textAlignCenter)}>
                <h2><b>Приятного аппетита!</b></h2>
            </div>

        </div>
        <div className={css(AppStyle.bottomLine, AboutStyle.line)}></div>
        <br/><br/><br/><br/><br/>
    </div>
);
export default Recipes;
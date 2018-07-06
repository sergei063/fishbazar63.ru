import React from 'react';

import {css} from "aphrodite/no-important";
import RecipesBlogStyle from "./RecipesBlogStyle";
import QualityAssuranceStyle from "../../QualityAssurance/QualityAssuranceStyle";
import AppStyle from "../../../css/AppStyle";


const RecipesBlog = (props) => {
    let {items} = props;
    return (
        <div className={css(RecipesBlogStyle.cnt)}>
            <div className={css(RecipesBlogStyle.h116)}></div>
            <div className={css(RecipesBlogStyle.h1)}>Как готовить</div>
            <div className={css(RecipesBlogStyle.h2)}>рецепты морепродуктов в нашем блоге</div>

            <div className={css(RecipesBlogStyle.h72)}></div>
            <div className={css(RecipesBlogStyle.flexContainer)}>
                <div className={css(RecipesBlogStyle.recipeDiv)}>
                    <div className={css(RecipesBlogStyle.h59)}></div>
                    <div className={css(RecipesBlogStyle.h3)}>
                        <img src={require('../../../img/logo_fish.png')}
                             width='60px' height='60px'></img>&nbsp;&nbsp;
                        Треска в зеленом соусе</div>
                    <div className={css(RecipesBlogStyle.table)}>
                        <ul className={css(RecipesBlogStyle.UL)}>
                        <li className={css(RecipesBlogStyle.LI)}>125 мл оливкового масла</li>
                        <li className={css(RecipesBlogStyle.LI)}>1 ст.л. мелко нарезанного чеснока</li>
                        <li className={css(RecipesBlogStyle.LI)}>700 г филе трески</li>
                        <li className={css(RecipesBlogStyle.LI)}>горсть листьев петрушки и укропа</li>
                    </ul></div>
                </div>
                <div className={css(RecipesBlogStyle.fish)}>
                    <img src={require('../../../img/Recipes/Cod_in_green_sauce/fish.jpg')}
                         width='704px' height='440px'></img>
                </div>


            </div>


        </div>
    );
}

export default RecipesBlog;
import React from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import RecipesBlogStyle from "./RecipesBlogStyle";
import AppStyle from "../../../css/AppStyle";
import {Link} from "react-router-dom";
import {FuturaBoldFont} from "../../../css/Fonts";


const RecipeNameStyle = StyleSheet.create({
    cnt:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "flex-start",
        margin: '0 auto',
        width: '80%',
        minWidth:'328px'
    },

    h3: {
        display: 'table',

        minWidth:'306px',
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign:'center',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.56',
        letterSpacing: '0.5px',
        color: '#000000',
        maxWidth:'243px',

    }
});
const RecipeName = (props) => {
    let {tittle} = props;
    return (
        <div className={css(RecipeNameStyle.cnt)}>
            <div><img src={require('../../../img/logo_fish.png')} width='60px' height='60px'></img>&nbsp;&nbsp;</div>
            <div className={css(RecipeNameStyle.h3)}>{tittle}</div>
        </div>
    )
}


const RecipesBlog = (props) => {

    return (
        <div className={css(RecipesBlogStyle.cnt)}>
            <div className={css(RecipesBlogStyle.h116)}></div>
            <div className={css(RecipesBlogStyle.h1)}>Как готовить</div>
            <div className={css(RecipesBlogStyle.h2)}>рецепты морепродуктов в нашем блоге</div>

            <div className={css(RecipesBlogStyle.h72)}></div>
            <div className={css(RecipesBlogStyle.flexContainer)}>

                <div className={css(RecipesBlogStyle.recipeDiv)}>
                    <div className={css(RecipesBlogStyle.recipeDivAbsolute)}>
                        <div className={css(RecipesBlogStyle.h59)}></div>

                        <RecipeName tittle={'Треска в зеленом соусе'}/>

                        <div className={css(RecipesBlogStyle.table)}>
                            <ul className={css(RecipesBlogStyle.UL)}>
                                <li className={css(RecipesBlogStyle.LI)}>125 мл оливкового масла</li>
                                <li className={css(RecipesBlogStyle.LI)}>1 ст.л. мелко нарезанного чеснока</li>
                                <li className={css(RecipesBlogStyle.LI)}>700 г филе трески</li>
                                <li className={css(RecipesBlogStyle.LI)}>горсть листьев петрушки и укропа</li>
                            </ul>
                        </div>
                        <div style={{height:'64px'}}></div>
                        <div className={css(RecipesBlogStyle.button_bock)}>
                            <button style={{width: '174px'}}  className={css(AppStyle.buttonRed)} onClick={(event) => {
                                event.preventDefault();
                                console.log(props)
                                props.history.push({pathname: '/blog/cod_in_green_sauce'});

                            }} >Весь рецепт</button>
                            <span><Link className={css(AppStyle.link_red, RecipesBlogStyle.overRecipes)} to='/blog'>Другие&nbsp;рецепты</Link></span>
                        </div>
                    </div>
                </div>

                <div className={css(RecipesBlogStyle.fish)}>
                    <img src={require('../../../img/Recipes/cod_in_green_sauce.jpg')}
                         width='100%' height='100%'></img>
                </div>


            </div>


        </div>
    );
};

export default RecipesBlog;
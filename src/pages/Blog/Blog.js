import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {css} from "aphrodite";
import AppStyle from "../../css/AppStyle";
import AllBlogStyle from "./AllBlogStyle";
import MenuBlog from "../../components/Blog/Menu/MenuBlog";
import {_try} from "../../components/lib";
import SeafoodItemStyle from "../Seafood/SeafoodItemStyle";


const RecipesDB = {
    "fish": {
        "catalog_tittle": "Рыба",
        "items": [{
            "name": "cod_in_green_sauce",
            "tittle": "Треска в зеленом соусе",
            "img": require('../../img/Recipes/Cod_in_green_sauce/fish.jpg'),
            "date": "2018-05-23",
            "ingredients": [
                "250 г крупных креветок",
                "100 г рисовой лапши",
                "2 небольшие морковки",
                "1 средний огурец",
                "6 веточек кинзы",
                "3 пера зеленого лука",
                "половина красной луковицы",
                "по 1 ч. л. светлых и черных семян кунжута",
                "соль"
            ],
            "to_refill": [
                "3 см корня имбиря",
                "1 ст. л. меда",
                "1/4 стакана лаймового сока",
                "1/4 стакана воды",
                "1/4 стакана растительного масла",
                "1 ст. л. рисового винного уксуса",
                "соль, свежемолотый черный перец"
            ],
            "fish_for_recipe": ["treska_15", "shrimp_tiger"],
            "html_text": "<p>Вскипятите воду в&nbsp;кастрюле. Положите рисовую лапшу и&nbsp;варите 5&nbsp;мин., до&nbsp;готовности. Откиньте на&nbsp;дуршлаг, затем промойте холодной водой. Остудите.</p>\n" +
            "<p>Очистите креветки от&nbsp;панциря, удалите голову и&nbsp;хвостик. Надрежьте вдоль спинки острым ножом и&nbsp;удалите темную вену. Вскипятите воду в&nbsp;сотейнике, посолите и&nbsp;отварите креветки до&nbsp;готовности, 2&nbsp;мин. Остудите.</p>\n" +
            "<p>Для заправки очистите имбирь и&nbsp;натрите на&nbsp;мелкой терке. Смешайте все компоненты заправки в&nbsp;банке с&nbsp;завинчивающейся крышкой и&nbsp;хорошо потрясите. Очистите морковь и&nbsp;нарежьте тонкой соломкой или натрите на&nbsp;терке для корейской моркови. Зеленый лук нарежьте наискосок. Огурец разрежьте вдоль пополам и&nbsp;нарежьте ломтиками. Крупно порубите листья кинзы. Красный лук нарежьте тонкими четвертинками колец. Выложите овощи и&nbsp;зелень в&nbsp;миску.</p>\n" +
            "<p>Добавьте в&nbsp;салат рисовую лапшу и&nbsp;креветки и&nbsp;полейте заправкой. Разложите салат по&nbsp;тарелкам и&nbsp;посыпьте белым и&nbsp;черным кунжутом.</p>"

        }]
    },
    "Shrimp": {
        "catalog_tittle": "Креветки",
        "items": []
    },
    "Langoustines": {
        "catalog_tittle": "Лангустины",
        "items": [{
            "name": "fried_scallops",
            "tittle": "Жаренные лангустины",
            "img": require('../../img/Recipes/fried_scallops/fried_scallops.jpg'),
            "date": "2018-02-23",
            "fish_for_recipe": ["salmon_of_chile_m"],
            "ingredients": [
                "250 г крупных креветок",
                "100 г рисовой лапши",
                "2 небольшие морковки",
                "1 средний огурец",
                "6 веточек кинзы",
                "3 пера зеленого лука",
                "половина красной луковицы",
                "по 1 ч. л. светлых и черных семян кунжута",
                "соль"
            ],
            "to_refill": [
                "3 см корня имбиря",
                "1 ст. л. меда",
                "1/4 стакана лаймового сока",
                "1/4 стакана воды",
                "1/4 стакана растительного масла",
                "1 ст. л. рисового винного уксуса",
                "соль, свежемолотый черный перец"
            ],
            "html_text": "<p>Вскипятите воду в&nbsp;кастрюле. Положите рисовую лапшу и&nbsp;варите 5&nbsp;мин., до&nbsp;готовности. Откиньте на&nbsp;дуршлаг, затем промойте холодной водой. Остудите.</p>\n" +
            "<p>Очистите креветки от&nbsp;панциря, удалите голову и&nbsp;хвостик. Надрежьте вдоль спинки острым ножом и&nbsp;удалите темную вену. Вскипятите воду в&nbsp;сотейнике, посолите и&nbsp;отварите креветки до&nbsp;готовности, 2&nbsp;мин. Остудите.</p>\n" +
            "<p>Для заправки очистите имбирь и&nbsp;натрите на&nbsp;мелкой терке. Смешайте все компоненты заправки в&nbsp;банке с&nbsp;завинчивающейся крышкой и&nbsp;хорошо потрясите. Очистите морковь и&nbsp;нарежьте тонкой соломкой или натрите на&nbsp;терке для корейской моркови. Зеленый лук нарежьте наискосок. Огурец разрежьте вдоль пополам и&nbsp;нарежьте ломтиками. Крупно порубите листья кинзы. Красный лук нарежьте тонкими четвертинками колец. Выложите овощи и&nbsp;зелень в&nbsp;миску.</p>\n" +
            "<p>Добавьте в&nbsp;салат рисовую лапшу и&nbsp;креветки и&nbsp;полейте заправкой. Разложите салат по&nbsp;тарелкам и&nbsp;посыпьте белым и&nbsp;черным кунжутом.</p>"

        }]
    },
    "Shellfish": {
        "catalog_tittle": "Моллюски",
        "items": [{
            "name": "fried_scallops",
            "tittle": "Жаренные гребешки",
            "img": require('../../img/Recipes/fried_scallops/fried_scallops.jpg'),
            "date": "2018-02-23",
            "ingredients": [
                "250 г крупных креветок",
                "100 г рисовой лапши",
                "2 небольшие морковки",
                "1 средний огурец",
                "6 веточек кинзы",
                "3 пера зеленого лука",
                "половина красной луковицы",
                "по 1 ч. л. светлых и черных семян кунжута",
                "соль"
            ],
            "to_refill": [
                "3 см корня имбиря",
                "1 ст. л. меда",
                "1/4 стакана лаймового сока",
                "1/4 стакана воды",
                "1/4 стакана растительного масла",
                "1 ст. л. рисового винного уксуса",
                "соль, свежемолотый черный перец"
            ],
            "html_text": "<p>Вскипятите воду в&nbsp;кастрюле. Положите рисовую лапшу и&nbsp;варите 5&nbsp;мин., до&nbsp;готовности. Откиньте на&nbsp;дуршлаг, затем промойте холодной водой. Остудите.</p>\n" +
            "<p>Очистите креветки от&nbsp;панциря, удалите голову и&nbsp;хвостик. Надрежьте вдоль спинки острым ножом и&nbsp;удалите темную вену. Вскипятите воду в&nbsp;сотейнике, посолите и&nbsp;отварите креветки до&nbsp;готовности, 2&nbsp;мин. Остудите.</p>\n" +
            "<p>Для заправки очистите имбирь и&nbsp;натрите на&nbsp;мелкой терке. Смешайте все компоненты заправки в&nbsp;банке с&nbsp;завинчивающейся крышкой и&nbsp;хорошо потрясите. Очистите морковь и&nbsp;нарежьте тонкой соломкой или натрите на&nbsp;терке для корейской моркови. Зеленый лук нарежьте наискосок. Огурец разрежьте вдоль пополам и&nbsp;нарежьте ломтиками. Крупно порубите листья кинзы. Красный лук нарежьте тонкими четвертинками колец. Выложите овощи и&nbsp;зелень в&nbsp;миску.</p>\n" +
            "<p>Добавьте в&nbsp;салат рисовую лапшу и&nbsp;креветки и&nbsp;полейте заправкой. Разложите салат по&nbsp;тарелкам и&nbsp;посыпьте белым и&nbsp;черным кунжутом.</p>"

        }]
    }


};


export const Recipes = {
    ...RecipesDB,
    getAllItems: () => {
        let res = [];
        for (let el in Recipes) {


            let group = Recipes[el];
            if (group.catalog_tittle) {
                let r = group.items.map((recipe, index) => {
                    recipe.parent = {};
                    recipe.parent.id = el;
                    recipe.parent.catalog_tittle = group.catalog_tittle;
                    recipe.dateObj = new Date(recipe.date);
                    return recipe;
                });

                if (r) {
                    res = res.concat(...r);
                }

            }
        }
        return res;
    },
    getAllFilteredGroupItems: (groupName) => {
        let res = [];
        for (let el in Recipes) {


            let group = Recipes[el];

            if ((group.catalog_tittle) && (group.catalog_tittle===groupName)) {
                let r = group.items.map((recipe, index) => {
                    recipe.parent = {};
                    recipe.parent.id = el;
                    recipe.parent.catalog_tittle = group.catalog_tittle;
                    recipe.dateObj = new Date(recipe.date);
                    return recipe;
                });

                if (r) {
                    res = res.concat(...r);
                }

            }
        }
        return res;
    },
    getAllSordItems: (groupNameFilter) => {
        //getAllFilteredGroupItems()
        let items = (groupNameFilter)? Recipes.getAllFilteredGroupItems(groupNameFilter): Recipes.getAllItems();
        return items.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        });
    },
    getGroup: function () {
        let r = [];
        for (let el in Recipes) {
            let group = Recipes[el];
            if (group.catalog_tittle) {
                r.push({name: el, catalog_tittle: group.catalog_tittle})

            }
        }

        return r;
    },
    get: function (name) {
        const isProduct = p => p.name === name;

        for (let recipe in Recipes) {
            let group = Recipes[recipe];
            if (group.catalog_tittle) {
                let el = group.items.find(isProduct);
                if (el) {
                    el.parent = {};
                    el.parent.id = recipe;
                    el.parent.catalog_tittle = group.catalog_tittle;
                    el.dateObj = new Date(el.date);

                    return el;
                }
            }
        }
    },
};

const dateOptions = {
    //weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric"
};


const AllBlog = (props) => {

    let recipes = Recipes.getAllSordItems(_try(() => props.history.location.state.blogFilter, null));

    return (
        <div className={css(AllBlogStyle.cnt)}>

            <div className={css(AllBlogStyle.cntFlex)}>
                <div style={{width: '65%'}}>

                    <div className={css((recipes.length>0)?AppStyle.displayNone:AppStyle.displayBlock)}>В категории <span style={{textTransform:'lowercase'}}>{_try(() => props.history.location.state.blogFilter, '')}</span> пока нет рецептов.</div>


                    {recipes.map((recipe, index) => (
                            <div key={index.toString()}>
                                <h1 className={css(AllBlogStyle.h1)}>{recipe.tittle}</h1>
                                <h2 className={css(AllBlogStyle.h2)}>{recipe.parent.catalog_tittle}&nbsp;&nbsp;|&nbsp;&nbsp;{recipe.dateObj.toLocaleString('ru', dateOptions)}  </h2>
                                <div><img src={recipe.img} width='543px' height='339px'></img></div>
                                <div style={{marginTop: '36px', marginBottom: '64px'}}>
                                    <button style={{width: '134px'}} className={css(AppStyle.buttonRed)} onClick={() => {

                                        props.history.push({
                                            state: {...props.history.location.state, selectedRecipe: recipe},
                                            pathname: `${props.history.location.pathname}/${recipe.name}`
                                        });
                                    }}>Рецепт
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <MenuBlog history={props.history}/>
            </div>

            <div style={{height: '164px'}}></div>
        </div>
    );
};


const BreadCrumbs = (props)  => {
    return (
        <div>
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/blog', state: {...props.history.location.state,blogFilter: null}});
                /*this.scrollToProductuionContainer(); */
            }} className={css(SeafoodItemStyle.link)} to='/blog'>Рецепты</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/blog', state: {...props.history.location.state,blogFilter: props.item.parent.catalog_tittle}});

            }} className={css(SeafoodItemStyle.link)} to='/blog'>{props.item.parent.catalog_tittle}</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
            }} className={css(SeafoodItemStyle.link)} to='/blog'>{props.item.tittle}</Link>
        </div>
    )
};

const OneBlog = (props) => {
    let selectedRecipe = {};
    try {
        selectedRecipe = props.history.location.state.selectedRecipe;
    } catch (e) {
        selectedRecipe = Recipes.get(props.match.params.recipe);

    }

    return (
        <div className={css(AllBlogStyle.cnt)}>
            <BreadCrumbs item={selectedRecipe} history={props.history}/>
            <div className={css(AllBlogStyle.cntFlex)}>
                <div style={{width: '65%'}}>
                    <h1 className={css(AllBlogStyle.h1)}>{selectedRecipe.tittle}</h1>
                    <h2 className={css(AllBlogStyle.h2)}>{selectedRecipe.parent.catalog_tittle}&nbsp;&nbsp;|&nbsp;&nbsp;{selectedRecipe.dateObj.toLocaleString('ru', dateOptions)}  </h2>
                    <div><img src={selectedRecipe.img} width='543px' height='339px'></img></div>
                    <div  style={{  marginTop: '52px', marginBottom: '40px',}}>
                        <img src={require('../../img/logo_fish.png')}
                             width='38px' height='38px'></img>
                        <span className={css(AllBlogStyle.ingredientsSpan)}>Ингредиенты</span>
                        <ul  className={css(AllBlogStyle.ingredientsUL)}>
                            {selectedRecipe.ingredients.map((ingredient, index) => (
                                    <li key={index.toString()} className={css(AllBlogStyle.ingredientsLI)}>
                                        {ingredient}
                                    </li>
                                )
                            )}
                        </ul>

                    </div>
                    <div  style={{  marginTop: '0px', marginBottom: '0px',}}>
                        <span className={css(AllBlogStyle.ingredientsSpan)}>Для заправки</span>
                        <ul  className={css(AllBlogStyle.ingredientsUL)}>
                            {selectedRecipe.to_refill.map((refill, index) => (
                                    <li key={index.toString()} className={css(AllBlogStyle.ingredientsLI)}>
                                        {refill}
                                    </li>
                                )
                            )}
                        </ul>

                    </div>
                    <div className={css(AllBlogStyle.recipeHtmlText)}
                         dangerouslySetInnerHTML={{__html: selectedRecipe.html_text || ""}}>{}</div>
                </div>

                <MenuBlog history={props.history} fish_for_recipe={selectedRecipe.fish_for_recipe}/>
            </div>

            <div style={{height: '164px'}}></div>
        </div>
    );
};


const Blog = (props) => {
    return (
        <Switch>
            <Route exact path='/blog' params={props} component={connect(mapStateToProps)(AllBlog)}/>
            <Route path='/blog/:recipe' params={props} component={connect(mapStateToProps)(OneBlog)}/>
        </Switch>
    )
};

const mapStateToProps = (state) => ({
    seafoodShoppingCart: state.seafoodShoppingCart,
    placeOfDelivery: state.placeOfDelivery
});

export default connect(mapStateToProps)(Blog);
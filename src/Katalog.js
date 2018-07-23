import React from 'react';
import {Link} from 'react-router-dom'
import ProductionStyle from './css/ProductionStyle';
import {StyleSheet, css} from 'aphrodite/no-important';
import $ from 'jquery'
import HomeStyle from './css/HomeStyle';
import AppStyle from "./css/AppStyle";
import AllCards from "./components/Cards/AllCards";
import CatalogGroups from "./components/CatalogGroups/CatalogGroups";



const Price = {
    "fish":{
        "catalog_tittle": "Рыба",
        "items": [
            {
                "id": "pink_salmon",
                "showCaseName": "Горбуша",
                "name": "Горбуша",
                "info": "Неразделанная",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 1-2 кг",
                "nutritionalValue":"Калории 140ккал<br/>                Белки. 20,5г<br/>            Жиры 6г<br/>            Углеводы. 0г<br/>            Омега3(г). 1,6г<br/>",
                "hit": true,
                "img": require('./img/seafood/pink salmon.png'),
                "price": 245
            },
            {
                "id": "chum",
                "showCaseName": "Кета",
                "name": "Кета",
                "info": "Потрошеная  без головы",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 1-2 кг",
                "nutritionalValue": "Калории 127ккал<br/>Белки. 19г<br/>Жиры 5,6г<br/>Углеводы. 0г<br/>Омега3(г). 1г",
                "hit": false,
                "img": require('./img/seafood/chum.png'),
                "price": 340
            }/*,
             {
             "id": "red_salmon",
             "showCaseName": "Нерка",
             "name": "Нерка",
             "info": "потрошеная безголовая",
             "packaging": "шт",
             "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
             "hit": false,
             "img": require('./img/katalog/red_salmon.jpg'),
             "price": 1
             }*/,
            {
                "id": "coho",
                "showCaseName": "Кижуч",
                "name": "Кижуч",
                "info": "Потрошеный с головой",
                "packaging": "шт",
                "nutritionalValue":"Калории 140ккал<br/>                Белки. 21,6г<br/>            Жиры 6г<br/>            Углеводы. 0г<br/> Омега3(г). 0г",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
                "hit": false,
                "img": require('./img/seafood/coho.png'),
                "price": 480
            },
            {
                "id": "salmon_of_chile_s",
                "showCaseName": "Семга Premium<br/>",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": true,
                "img": require('./img/seafood/salmon.png'),
                "weightFish":{
                    "size":"s",
                    "help":"2-3кг"
                },
                "price":680

            },
            {
                "id": "salmon_of_chile_m",
                "showCaseName": "Семга Premium<br/>",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": false,
                "img": require('./img/seafood/salmon.png'),
                "weightFish":{
                    "size":"m",
                    "help":"3-4кг"
                },
                "price":700

            },{
                "id": "salmon_of_chile_l",
                "showCaseName": "Семга Premium<br/>",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": false,
                "img": require('./img/seafood/salmon.png'),
                "weightFish":{
                    "size":"l",
                    "help":"5-6кг"
                },
                "price":710


            },{
                "id": "salmon_of_chile_xl",
                "showCaseName": "Семга Premium<br/>",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": false,
                "img": require('./img/seafood/salmon.png'),
                "weightFish":{
                    "size":"xl",
                    "help":"6-7кг"
                },
                "price":730
            },


            {
                "id": "Trout_of_chile",
                "showCaseName": "Форель Чили Premium",
                "name": "Форель Premium Чили",
                "info": "Потрошеная без головы, (2-3)кг Prem Чили",
                "packaging": "шт",
                "nutritionalValue": "Калории 141ккал<br>Белки. 19,9г<br>Жиры 6,2г<br>Углеводы. 0г<br>Омега3(г). 0,9г",
                "packagingInfo": "Реализуется штучно.  Ориентировочный вес 2-3 кг",
                "hit": true,
                "img": require('./img/seafood/trout.png'),
                "price": 750
            },
            {
                "id": "treska_15",
                "showCaseName": "Треска (0,5-1,5)кг",
                "name": "Треска",
                "info": "Тихоокеанская потрошеная без головы (0,5-1,5)кг",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 69ккал<br/>                Белки. 15,3г<br/>            Жиры 0,4г<br/>            Углеводы. 3,3г<br/>            Омега3(г). 0,1г",
                "hit": true,
                "img": require('./img/seafood/cod.png'),
                "price": 220

            }, {
                "id": "treska_03",
                "showCaseName": "Треска (0,3-0,5)кг",
                "name": "треска",
                "info": "Тихоокеанская потрошеная без головы  (0,3-0,5)кг",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/cod.png'),
                "price": 205


            },
            {
                "id": "mintay",
                "showCaseName": "Минтай (0,3-0,6)кг",
                "name": "Минтай",
                "info": "Потрошеный без головы (0,3-0,6)кг<br/>",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 56ккал<br/>Белки. 12,2г<br/>Жиры 0,4г<br/>Углеводы. 0г<br/>Омега3(г). 0,2г",
                "hit": true,
                "img": require('./img/seafood/pollock.png'),
                "price": 117

            },
            {
                "id": "Flounder_s",
                "showCaseName": "Камбала S",
                "name": "Камбала S [290-310]",
                "info": "Без головы,белобрюхая,  частично икряная",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 90ккал<br/>                Белки. 15,7г<br/>           Жиры 3г<br/>            Углеводы. 0г<br/>            Омега3(г). 0г",
                "hit": false,
                "img": require('./img/seafood/flounder.png'),
                "price": 165
            },
            {
                "id": "Flounder_m",
                "showCaseName": "Камбала M",
                "name": "Камбала, М[250-350]",
                "info": "Без головы,Белобрюхая",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": true,
                "img": require('./img/seafood/flounder.png'),
                "price": 175
            },
            {
                "id": "Flounder_l",
                "showCaseName": "Камбала L",
                "name": "Камбала,  L",
                "info": "Без головы,белобрюхая, икряная",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/flounder.png'),
                "price": 279
            },
            {
                "id": "osmeridae",
                "showCaseName": "Корюшка",
                "name": "Корюшка",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/smelt.png'),
                "price": 265
            },
            {
                "id": "herring",
                "showCaseName": "Сельдь Атлантика",
                "name": "Сельдь",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 248ккал<br/>Белки. 17,7г<br/>Жиры 19,5г<br/>Углеводы. 0г<br/>Омега3(г). 0г",
                "hit": false,
                "img": require('./img/seafood/herring.png'),
                "price": 105
            },
            {
                "id": "mackerel",
                "showCaseName": "Скумбрия Атлантика",
                "name": "Скумбрия",
                "info": "",
                "nutritionalValue":"Калории 205ккал<br/>Белки. 18,6г<br/>Жиры 13,9г<br/>Углеводы. 0г<br/>Омега3(г). 2,7г",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/mackerel.png'),
                "price": 180
            },
        ]
    },
    "Shellfish": {
        "catalog_tittle": "Моллюски",
        "items": [
            {
                "id": "mussels",
                "showCaseName": "Мидии",
                "name": "Мидии New Zealand",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "nutritionalValue":"Калории 77ккал<br>Белки. 11,5г<br>Жиры 2г<br>Углеводы. 3,3г<br>Омега3(г). 0г",
                "img": require('./img/seafood/mussels.png'),
                "price": 590
            }, {
                "id": "scallop",
                "showCaseName": "Гребешок Сахалин",
                "name": "Гребешок Сахалин",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/scallop.png'),
                "price": 2500
            },{
                "id": "squid",
                "showCaseName": "Кальмар",
                "name": "Кальмар",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 100ккал<br/>                Белки. 18г<br/>            Жиры 2,2г<br/>            Углеводы. 2г<br/>            Омега3(г). 1,4г",
                "hit": false,
                "img": require('./img/seafood/squid.png'),
                "price": 235
            },

        ]
    },
    "Shrimp": {
        "catalog_tittle": "Креветки",
        "items": [
            {
                "id": "shrimp_angular",
                "showCaseName": "Креветки углохвостые",
                "name": "Креветка углохвостая",
                "info": "Креветка углохвостая 90-110. БЕЗ ГЛАЗУРИ в коробке по 1 кг",
                "packaging": "кг",
                "packagingInfo" : "Размер 90 -120",
                "nutritionalValue" : "Калории 87ккал<br/>Белки. 18,3г<br/>Жиры 1,2г<br/>Углеводы. 0,8г<br/>Омега3(г). 0,5г",
                "hit": true,
                "img": require('./img/seafood/shrimp.png'),
                "price": "-- "
            },
            {
                "id": "shrimp_tiger",
                "showCaseName": "Тигровая креветка",
                "name": "Тигровая креветка",
                "info": "Индия",
                "packaging": "кг",
                "nutritionalValue" : "Калории 98ккал<br/>Белки. 20,5г<br/>Жиры 1,6г<br/>Углеводы. 0,3г<br/>Омега3(г). 0,3г",
                "packagingInfo" : "",
                "hit": true,
                "img": require('./img/seafood/Tiger shrimp.png'),
                "price": 790
            },
            {
                "id": "greenland_shrimp",
                "showCaseName": "Гренландская креветка",
                "name": "Гренландская креветка",
                "info": "Гренландия",
                "packaging": "кг",
                "nutritionalValue" : "Калории 98ккал<br/>Белки. 20,5г<br/>Жиры 1,6г<br/>Углеводы. 0,3г<br/>Омега3(г). 0,3г",
                "packagingInfo" : "Размер 90 -120",
                "hit": true,
                "img": require('./img/katalog/greenland_shrimp.jpg'),
                "price": 550
            }

        ]
    },
    "Langoustines": {
        "catalog_tittle": "Лангустины",
        "items": [
            {
                "id": "langoustine",
                "showCaseName": "Лангустины L1",
                "name": "Лангустины  аргентинские L1",
                "info": "Дикий улов. Упаковка 2кг",
                "packaging": "кг",
                "nutritionalValue" : "Калории 143ккал<br>Белки. 26,4г<br>Жиры 1,9г<br>Углеводы. 3,1г<br>Омега3(г). 0,5г",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/langoustines.png'),
                "price": 650
            },

        ]
    }


};

const Katalog = {
    ...Price,

    FILTER_COUNT : 9,
    creatLinkProductMenu: (name, arr) => {
        return (<div className={css(ProductionStyle.cnt)}>
            {name}
            <ul className={css(ProductionStyle.ul)}>
                {
                    arr.map(p => (
                        <li key={p.id} className={css(ProductionStyle.li)}>
                            <Link to={`/production/${p.id}`}>{p.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>)
    },

    creatMenu: () => {
        let res = [];
        let i = 0;
        for (let el in Katalog) {
            let group = Katalog[el];
            if (group.catalog_tittle) {

                res.push(<div key={i}>{Katalog.creatLinkProductMenu(group.catalog_tittle, group.items)}</div>);
                i++;
            }
        }

        return res;
    },
    get: function (id) {
        const isProduct = p => p.id === id;


        for (let fish in Katalog) {
            let group = Katalog[fish];
            if (group.catalog_tittle) {
                let el = group.items.find(isProduct);
                if (el) {
                    el.parent = {};
                    el.parent.id = fish;
                    el.parent.catalog_tittle = group.catalog_tittle
                    return el;
                }
            }
        }
    },

    getGroup: function () {
        let r = [];
        for (let el in Katalog) {
            let group = Katalog[el];
            if (group.catalog_tittle) {
                r.push({name: el, catalog_tittle: group.catalog_tittle})
            }
        }

        return r;
    },

    getRenderedShowcase: (items) => {
        return (
            <ul className={css(HomeStyle.ul)}>
                {
                    items.map(p => (
                        <li className={css(HomeStyle.li)} key={p.id}>
                            <Link className={css(HomeStyle.card)} to={`/production/${p.id}`}>
                                <div className={css(HomeStyle.productPhoto)}>
                                    <img className={css(HomeStyle.productPhotoImg)}
                                         src={p.img} alt={p.info}></img>
                                </div>
                                <div className={css(HomeStyle.productNameDiv)}>

                                    <div className={css(HomeStyle.productName)} dangerouslySetInnerHTML={{__html: p.showCaseName||""}}></div>
                                    <div className={css(HomeStyle.productPrice)}>
                                        <b>{p.price}</b>
                                        <small><nobr>руб/кг</nobr></small>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )

    },
    getRenderedShowcaseStyle: (items) => {
        return (
            <AllCards items={items}/>
        )
    },

    /**
     * Получает элементы для витрины
     * @returns {Array}
     */
    getHitItems: function () {
        const isProduct = p => p.hit == true;
//getHitItems
        let res = [];
        for (let el in Katalog) {
            let group = Katalog[el];
            if (group.catalog_tittle) {
                let el = group.items.filter(isProduct);

                if (el) {
                    res = res.concat(...el);
                }
            }
        }

        return res;
    }, /**
     * Получает элементы для группы
     * @returns {Array}
     */
    getGroupItems: function (groupName,filterCount) {
        if (groupName) {
            if (groupName==='hit'){
                return this.getHitItems();
            }
            else {
                return Katalog[groupName].items;
            }
        }
        if (!filterCount)
            filterCount = this.FILTER_COUNT;

        return this.getAllItems().slice(0,filterCount);


    },

    /**
     * Djзвращает все элементы
     * @returns {Array}
     */
    getAllItems: () => {
        let res = [];
        for (let el in Katalog) {
            let group = Katalog[el];
            if (group.catalog_tittle) {
                let el = group.items;
                if (el) {
                    res = res.concat(...el);
                }
            }
        }
        return res;
    },
    /**
     * Получает элементы из корзины
     * @returns {Array}
     */
    getShoppingCart: function () {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        let res = [];
        if (shoppingCart != null) {
            for (let el in shoppingCart) {
                res.push(shoppingCart[el]);
            }
        }


        return res;
    },
    clearShoppingCart: function () {
        localStorage.removeItem('shoppingCart');
        $('#header_pouch span').html(0);
    },
    addShoppingCart: (fish, countFish) => {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if (shoppingCart == null) {
            shoppingCart = {}
        }
        shoppingCart[fish.id] = {...fish, count: countFish,}
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        $('#header_pouch span').html(Object.keys(shoppingCart).length || 0);


    },deleteShoppingCart: (fishId) => {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if (shoppingCart == null) {
            shoppingCart = {}
        }
        delete shoppingCart[fishId]
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        $('#header_pouch span').html(Object.keys(shoppingCart).length || 0);


    },
    updatePounch: () => {

        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

        if (shoppingCart == null) {
            shoppingCart = {}
        }
        $('#header_pouch span').html(Object.keys(shoppingCart).length || 0);

    },

    /**
     * @deprecated
     * */
    getProductGroup(props,filter) {

        let key=0, r = [];
        r.push(<span id="filter_btn_all"  key={key} onClick={() => { props.history.push({pathname: `/production/`,state: { filter: null }});/*this.scrollToProductuionContainer(); */  }  } className={css(ProductionStyle.marginRight15,ProductionStyle.gpoupItem, AppStyle.center_text)}><span key={key} className={css((!filter)? AppStyle.link_active:AppStyle.link)}>Все</span></span>);
        ++key;

        Katalog.getGroup().map(p => {
            r.push(<span  key={key}  id={p.name} onClick={() => {props.history.push({pathname: `/production/`,state: { filter: p.name }}); /*this.scrollToProductuionContainer();*/   }  } className={css(ProductionStyle.marginRight15,ProductionStyle.gpoupItem, AppStyle.center_text)}><span  key={key} className={css((filter===p.name)? AppStyle.link_active:AppStyle.link)}> {p.catalog_tittle}</span> </span>);
            ++key;
        })
        return r;
    }
}


export default Katalog;
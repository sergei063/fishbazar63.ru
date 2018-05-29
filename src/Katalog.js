import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import ProductionStyle from './css/ProductionStyle';
import {StyleSheet, css} from 'aphrodite/no-important';
import $ from 'jquery'
import HomeStyle from './css/HomeStyle';
import uniqid  from 'uniqid';


const Price = {
    "Losos": {
        "catalog_tittle": "Лососевые",
        "items": [
            {
                "id": "pink_salmon",
                "showCaseName": "Горбуша",
                "name": "Горбуша",
                "info": "Неразделанная",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 1-2 кг",
                "nutritionalValue":"Калории 140ккал<br/>                Белки. 20,5г<br/>            Жиры 6г<br/>            Углеводы. 0г<br/>            Омега3(г). 1,6г<br/>",
                "isShowCase": true,
                "img": require('./img/katalog/pink salmon.jpg'),
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
                "isShowCase": true,
                "img": require('./img/katalog/keta_1.jpg'),
                "price": 340
            }/*,
             {
             "id": "red_salmon",
             "showCaseName": "Нерка",
             "name": "Нерка",
             "info": "потрошеная безголовая",
             "packaging": "шт",
             "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
             "isShowCase": true,
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
                "isShowCase": true,
                "img": require('./img/katalog/coho_2.jpg'),
                "price": 480
            },
            /*{
             "id": "sea_run_char",
             "showCaseName": "Голец",
             "name": "Голец",
             "info": "неразделанный",
             "packaging": "шт",
             "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
             "isShowCase": true,
             "img": require('./img/katalog/none.jpg'),
             "price": 265
             },*/
            /*{
             "id": "chinook_salmon",
             "showCaseName": "Чавыча",
             "name": "Чавыча",
             "info": "ПСГ потрошеная с головой / ПБГ потрошеная безголовая",
             "packaging": "шт",
             "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
             "isShowCase": true,
             "img": require('./img/katalog/none.jpg'),
             "price": 1
             },*/
            {
                "id": "salmon_of_chile_2_3",
                "showCaseName": "Семга Premium<br/>(2-3)кг",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "isShowCase": true,
                "img": require('./img/katalog/salmon.jpg'),
                "price": 680
            },{
                "id": "salmon_of_chile_3_4",
                "showCaseName": "Семга Premium<br/>(3-4)кг",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 3-4 кг",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "isShowCase": true,
                "img": require('./img/katalog/salmon.jpg'),
                "price": 700
            },
            {
                "id": "salmon_of_chile_5_6",
                "showCaseName": "Семга Premium<br/>(5-6)кг",
                "name": "Семга Чили(5-6 кг)",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 5-6 кг",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "isShowCase": false,
                "img": require('./img/katalog/salmon.jpg'),
                "price": 710
            },
            {
                "id": "salmon_of_chile_6_7",
                "showCaseName": "Семга Premium<br/>(6-7)кг",
                "name": "Семга Чили(6-7 кг)",
                "info": "Потрошеная с головой",
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 6-7 кг",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "isShowCase": false,
                "img": require('./img/katalog/salmon.jpg'),
                "price": 730
            },
            /*{
             "id": "Trout_of_iceberg",
             "showCaseName": "Форель",
             "name": "Форель «Айсберг»",
             "info": "(1,8-2,7) «Айсберг»",
             "packaging": "шт",
             "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
             "isShowCase": true,
             "img": require('./img/katalog/trout.jpg'),
             "price": 570
             },*/
            {
                "id": "Trout_of_chile",
                "showCaseName": "Форель Чили Premium",
                "name": "Форель Premium Чили",
                "info": "Потрошеная без головы, (2-3)кг Prem Чили",
                "packaging": "шт",
                "nutritionalValue": "Калории 141ккал<br>Белки. 19,9г<br>Жиры 6,2г<br>Углеводы. 0г<br>Омега3(г). 0,9г",
                "packagingInfo": "Реализуется штучно.  Ориентировочный вес 2-3 кг",
                "isShowCase": true,
                "img": require('./img/katalog/trout.jpg'),
                "price": 750
            }
        ]
    },
    "Treska": {
        "catalog_tittle": "Тресковые",
        "items": [
            {
                "id": "treska_15",
                "showCaseName": "Треска (0,5-1,5)кг",
                "name": "Треска",
                "info": "Тихоокеанская потрошеная без головы (0,5-1,5)кг",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 69ккал<br/>                Белки. 15,3г<br/>            Жиры 0,4г<br/>            Углеводы. 3,3г<br/>            Омега3(г). 0,1г",
                "isShowCase": true,
                "img": require('./img/katalog/codfish.jpg'),
                "price": 220

            }, {
                "id": "treska_03",
                "showCaseName": "Треска (0,3-0,5)кг",
                "name": "треска",
                "info": "Тихоокеанская потрошеная без головы  (0,3-0,5)кг",
                "packaging": "кг",
                "packagingInfo" : "",
                "isShowCase": true,
                "img": require('./img/katalog/codfish.jpg'),
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
                "isShowCase": true,
                "img": require('./img/katalog/mintay.jpg'),
                "price": 117

            },
            /*{
             "id": "navaga",
             "showCaseName": "Навага",
             "name": "Навага",
             "info": "потрошеная безголовая S",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": true,
             "img": require('./img/katalog/none.jpg'),
             "price": 130
             },/*
             {
             "id": "haddock",
             "showCaseName": "Пикша",
             "name": "Пикша",
             "info": "Описание отсутствует",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": false,
             "img": require('./img/katalog/none.jpg'),
             "price": 185
             },
             {
             "id": "blue_whiting",
             "showCaseName": "Путассу",
             "name": "Путассу",
             "info": "Описание отсутствует",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": false,
             "img": require('./img/katalog/none.jpg'),
             "price": 73
             },
             {
             "id": "hake",
             "showCaseName": "Хек",
             "name": "Хек",
             "info": "Аргентина(400-600)",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": false,
             "img": require('./img/katalog/none.jpg'),
             "price": 207
             },
             {
             "id": "hake",
             "showCaseName": "Хек",
             "name": "Хек",
             "info": "Перу(200-400)",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": false,
             "img": require('./img/katalog/none.jpg'),
             "price": 175
             }/*,
             {
             "id": "lemonema",
             "showCaseName": "Лемонема",
             "name": "Лемонема",
             "info": "Описание отсутствует",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": false,
             "img": require('./img/katalog/none.jpg'),
             "price": 160
             }*/

        ]
    },
    "Flounder": {
        "catalog_tittle": "Камбаловые",
        "items": [
            {
                "id": "Flounder_s",
                "showCaseName": "Камбала S",
                "name": "Камбала S [290-310]",
                "info": "Без головы,белобрюхая,  частично икряная",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 90ккал<br/>                Белки. 15,7г<br/>           Жиры 3г<br/>            Углеводы. 0г<br/>            Омега3(г). 0г",
                "isShowCase": true,
                "img": require('./img/katalog/flatfish_2.jpg'),
                "price": 165
            },
            /*{
             "id": "Flounder_s_tu",
             "showCaseName": "Камбала",
             "name": "Камбала S",
             "info": "Без головы,белобрюхая",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": false,
             "img": require('./img/katalog/flatfish_1.jpg'),
             "price": 150
             },*/
            {
                "id": "Flounder_m",
                "showCaseName": "Камбала M",
                "name": "Камбала, М[250-350]",
                "info": "Без головы,Белобрюхая",
                "packaging": "кг",
                "packagingInfo" : "",
                "isShowCase": true,
                "img": require('./img/katalog/flatfish_2.jpg'),
                "price": 175
            },
            {
                "id": "Flounder_l",
                "showCaseName": "Камбала L",
                "name": "Камбала,  L",
                "info": "Без головы,белобрюхая, икряная",
                "packaging": "кг",
                "packagingInfo" : "",
                "isShowCase": true,
                "img": require('./img/katalog/flatfish_2.jpg'),
                "price": 279
            }/*,
             {
             "id": "Halibut",
             "showCaseName": "Палтус",
             "name": "Палтус",
             "info": "Белокорый потрошеный безголовый 0,5-1кг",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": true,
             "img": require('./img/katalog/flatfish.jpg'),
             "price": 1
             }*/
        ]
    },
    "Osmeridae": {
        "catalog_tittle": "Корюшковые",
        "items": [
            {
                "id": "osmeridae",
                "showCaseName": "Корюшка",
                "name": "Корюшка",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "isShowCase": true,
                "img": require('./img/katalog/none.jpg'),
                "price": 265
            }/*,
             {
             "id": "capelin",
             "showCaseName": "Мойва",
             "name": "Мойва",
             "info": "",
             "packaging": "кг",
             "packagingInfo" : "",
             "isShowCase": true,
             "img": require('./img/katalog/none.jpg'),
             "price": 145
             }*/
        ]
    },
    "Shrimp": {
        "catalog_tittle": "Креветки",
        "items": [
            {
                "id": "shrimp_angular",
                "showCaseName": "Креветка углохвостая",
                "name": "Креветка углохвостая",
                "info": "Креветка углохвостая 90-110. БЕЗ ГЛАЗУРИ в коробке по 1 кг",
                "packaging": "кг",
                "packagingInfo" : "Размер 90 -120",
                "nutritionalValue" : "Калории 87ккал<br/>Белки. 18,3г<br/>Жиры 1,2г<br/>Углеводы. 0,8г<br/>Омега3(г). 0,5г",
                "isShowCase": true,
                "img": require('./img/katalog/krivetki.jpg'),
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
                "isShowCase": true,
                "img": require('./img/katalog/none.jpg'),
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
                "isShowCase": true,
                "img": require('./img/katalog/greenland_shrimp.jpg'),
                "price": 550
            }

        ]
    },
    "Herring": {
        "catalog_tittle": "Cельдевые",
        "items": [
            {
                "id": "herring",
                "showCaseName": "Сельдь Атлантика",
                "name": "Сельдь",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 248ккал<br/>Белки. 17,7г<br/>Жиры 19,5г<br/>Углеводы. 0г<br/>Омега3(г). 0г",
                "isShowCase": true,
                "img": require('./img/katalog/herring_1.jpg'),
                "price": 105
            }

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
                "isShowCase": true,
                "nutritionalValue":"Калории 77ккал<br>Белки. 11,5г<br>Жиры 2г<br>Углеводы. 3,3г<br>Омега3(г). 0г",
                "img": require('./img/katalog/mussels_1.jpg'),
                "price": 590
            }, {
                "id": "scallop",
                "showCaseName": "Гребешок Сахалин",
                "name": "Гребешок Сахалин",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "isShowCase": true,
                "img": require('./img/katalog/none.jpg'),
                "price": 2500
            },{
                "id": "squid",
                "showCaseName": "Кальмар",
                "name": "Кальмар",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 100ккал<br/>                Белки. 18г<br/>            Жиры 2,2г<br/>            Углеводы. 2г<br/>            Омега3(г). 1,4г",
                "isShowCase": true,
                "img": require('./img/katalog/squid_2.jpg'),
                "price": 235
            },

        ]
    },
    "Mackerel": {
        "catalog_tittle": "Скумбриевые",
        "items": [
            {
                "id": "mackerel",
                "showCaseName": "Скумбрия Атлантика",
                "name": "Скумбрия",
                "info": "",
                "nutritionalValue":"Калории 205ккал<br/>Белки. 18,6г<br/>Жиры 13,9г<br/>Углеводы. 0г<br/>Омега3(г). 2,7г",
                "packaging": "кг",
                "packagingInfo" : "",
                "isShowCase": true,
                "img": require('./img/katalog/mackerel_1.jpg'),
                "price": 180
            },

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
                "isShowCase": true,
                "img": require('./img/katalog/langoustines.jpg'),
                "price": 650
            },

        ]
    }/*,
     "Saury": {
     "catalog_tittle": "Сайра",
     "items": [
     {
     "id": "saury",
     "showCaseName": "Сайра",
     "name": "Сайра",
     "info": "",
     "packaging": "кг",
     "packagingInfo" : "",
     "isShowCase": true,
     "img": require('./img/katalog/none.jpg'),
     "price": 1
     },

     ]
     }*/


};

const Katalog = {
    ...Price,

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

    /**
     * Получает элементы для витрины
     * @returns {Array}
     */
    getShowcaseItems: function () {
        const isProduct = p => p.isShowCase == true;

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
    getGroupItems: function (groupName) {
        if (groupName) {
            return Katalog[groupName].items;
        }
        return this.getAllItems();


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
        shoppingCart[fish.id] = {...fish, count: countFish[0].getValueAsNumber(),}
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


    }
}


export default Katalog;
import React from 'react';
import {Link} from 'react-router-dom'
import ProductionStyle from './css/ProductionStyle';
import {css} from 'aphrodite/no-important';
import AppStyle from "./css/AppStyle";
import {_try} from "./components/lib";


const Price = {
    "fish":{
        "catalog_tittle": "Рыба",
        "items": [
            {
                "id": "pink_salmon",
                "showCaseName": "Горбуша",
                "name": "Горбуша",
                "info": "Неразделанная",
                "isRedFish":true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 1-2 кг",
                "nutritionalValue":"Калории 140ккал<br/>                Белки. 20,5г<br/>            Жиры 6г<br/>            Углеводы. 0г<br/>            Омега3(г). 1,6г<br/>",
                "hit": true,
                "img": require('./img/seafood/pink salmon.png'),
                "weightOfOneFish":1.5,
                "weightFish":{
                    "help":"1-2кг"
                },
                "producer":"Рыболовецкая Артель \"Нижнее Пронге\" Россия Хабаровский край",
                "catchDate":"26.06.2018",
                "price": 255
            },
            {
                "id": "chum",
                "showCaseName": "Кета",
                "name": "Кета",
                "info": "Потрошеная  без головы",
                "isRedFish":true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 1-2 кг",
                "nutritionalValue": "Калории 127ккал<br/>Белки. 19г<br/>Жиры 5,6г<br/>Углеводы. 0г<br/>Омега3(г). 1г",
                "hit": true,
                "weightOfOneFish":1.9,
                "weightFish":{
                    "help":"1-2кг"
                },
                "img": require('./img/seafood/chum.png'),
                "producer":"АО \"Хайрюзовский рыбоконсервный завод\" Россия Камчатский край Тигильский район с. Усть-Хайрюзово",
                "catchDate":"01.07.2018",
                "price": 365

            },
            {
                "id": "coho",
                "showCaseName": "Кижуч",
                "name": "Кижуч",
                "info": "Потрошеный с головой",
                "isRedFish":true,
                "packaging": "шт",
                "nutritionalValue":"Калории 140ккал<br/>                Белки. 21,6г<br/>            Жиры 6г<br/>            Углеводы. 0г<br/> Омега3(г). 0г",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
                "hit": false,
                "weightOfOneFish":2,
                "img": require('./img/seafood/coho.png'),
                "price": 495

            },
            {
                "id": "salmon_of_chile_s",
                "showCaseName": "Семга Premium",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "isRedFish":true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": true,
                "img": require('./img/seafood/salmon.png'),
                "producer":"Chile Ventisqueros S.A.",
                "weightOfOneFish":2.5,
                "weightFish":{
                    "size":"s",
                    "help":"2-3кг"
                },
                "price":720

            },
            {
                "id": "salmon_of_chile_m",
                "showCaseName": "Семга Premium",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "isRedFish":true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": false,
                "img": require('./img/seafood/salmon.png'),
                "producer":"Chile Ventisqueros S.A.",
                "weightOfOneFish":3.5,
                "weightFish":{
                    "size":"m",
                    "help":"3-4кг"
                },
                "price":730

            },{
                "id": "salmon_of_chile_l",
                "showCaseName": "Семга Premium",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "isRedFish":true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": false,
                "img": require('./img/seafood/salmon.png'),
                "producer":"Chile Ventisqueros S.A.",
                "weightOfOneFish":5.5,
                "weightFish":{
                    "size":"l",
                    "help":"5-6кг"
                },
                "price":740


            },

            {
                "id": "Trout_of_chile",
                "showCaseName": "Форель Чили Premium",
                "name": "Форель Premium Чили",
                "isRedFish":true,
                "info": "Потрошеная без головы, (2-3)кг Prem Чили",
                "packaging": "шт",
                "weightOfOneFish":2.7,
                "nutritionalValue": "Калории 141ккал<br>Белки. 19,9г<br>Жиры 6,2г<br>Углеводы. 0г<br>Омега3(г). 0,9г",
                "packagingInfo": "Реализуется штучно.  Ориентировочный вес 2-3 кг",
                "hit": false,
                "img": require('./img/seafood/trout.png'),
                "price": 780
            },
            {
                "id": "treska_15",
                "showCaseName": "Треска",
                "name": "Треска",
                "info": "Тихоокеанская потрошеная без головы (0,5-1,5)кг",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 69ккал<br/>                Белки. 15,3г<br/>            Жиры 0,4г<br/>            Углеводы. 3,3г<br/>            Омега3(г). 0,1г",
                "hit": true,
                "img": require('./img/seafood/cod.png'),
                "producer":"ООО «Морские ресурсы»",
                "catchDate":"05.08.2018",
                "weightOfOneFish":0.75,
                "weightFish":{
                    "size":"s",
                    "help":"0,5-1кг"
                },
                "price": 246

            }, {
                "id": "treska_03",
                "showCaseName": "Треска",
                "name": "треска",
                "info": "Тихоокеанская потрошеная без головы  (0,3-0,5)кг",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/cod.png'),
                "producer":"ООО «Морские ресурсы»",
                "catchDate":"05.08.2018",
                "weightOfOneFish":1.5,
                "weightFish":{
                    "size":"l",
                    "help":"2-3кг"
                },
                "price": 264


            },
            {
                "id": "mintay",
                "showCaseName": "Минтай",
                "name": "Минтай",
                "info": "Потрошеный без головы (0,3-0,6)кг<br/>",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 56ккал<br/>Белки. 12,2г<br/>Жиры 0,4г<br/>Углеводы. 0г<br/>Омега3(г). 0,2г",
                "hit": true,
                "img": require('./img/seafood/pollock.png'),
                "producer":"ООО ПКФ\"Южно-Курильский рыбокомбинат\" Россия Сазалинская обл. п.г.т. Южно-Курильск",
                "catchDate":"25.04.2018",
                "weightOfOneFish":0.45,
                "weightFish":{
                    "size":"l",
                    "help":"0,3-0,6кг"
                },
                "price": 117

            },
            {
                "id": "Flounder_s",
                "showCaseName": "Камбала",
                "name": "Камбала S",
                "info": "Без головы,белобрюхая,  частично икряная",
                "packaging": "кг",
                "packagingInfo" : "",
                "nutritionalValue":"Калории 90ккал<br/>                Белки. 15,7г<br/>           Жиры 3г<br/>            Углеводы. 0г<br/>            Омега3(г). 0г",
                "hit": false,
                "img": require('./img/seafood/flounder.png'),
                "producer":"ООО \"Морские ресурсы\" Россия САХАЛИНСКСАЯ ОБЛ., Г СЕВЕРО-КУРИЛЬСК",
                "catchDate":"03.04.2018",
                "weightOfOneFish":0.2,
                "weightFish":{
                    "size":"s",
                    "help":"150-250г"
                },
                "price": 185
            },
            {
                "id": "Flounder_m",
                "showCaseName": "Камбала M",
                "name": "Камбала",
                "info": "Без головы,Белобрюхая",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": true,
                "img": require('./img/seafood/flounder.png'),
                "producer":"ООО \"Морские ресурсы\" Россия САХАЛИНСКСАЯ ОБЛ., Г СЕВЕРО-КУРИЛЬСК",
                "catchDate":"03.04.2018",
                "weightOfOneFish":0.3,
                "weightFish":{
                    "size":"m",
                    "help":"250-350г"
                },
                "price": 195
            },
            {
                "id": "Flounder_l",
                "showCaseName": "Камбала",
                "name": "Камбала",
                "info": "Без головы,белобрюхая, икряная",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/flounder.png'),
                "producer":"ООО \"Морские ресурсы\" Россия САХАЛИНСКСАЯ ОБЛ., Г СЕВЕРО-КУРИЛЬСК",
                "catchDate":"03.04.2018",
                "price": 210,
                "weightOfOneFish":0.4,
                "weightFish":{
                    "size":"l",
                    "help":"от 350г"
                },
            },
            /*{
                "id": "osmeridae",
                "showCaseName": "Корюшка",
                "name": "Корюшка",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": require('./img/seafood/smelt.png'),
                "price": 265
            },*/
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
                "weightOfOneFish":0.275,
                "weightFish":{
                    "size":"m",
                    "help":"0,25-0,3кг"
                },
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
                "weightOfOneFish":0.275,
                "weightFish":{
                    "size":"m",
                    "help":"0,25-0,3кг"
                },
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
                "hit": true,
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
                "hit": true,
                "img": require('./img/seafood/squid.png'),
                "producer":"АО \"Северо-Курильская база Северного флота\" Россия Сахалинская обл г Северо-Курильск",
                "catchDate":"13.06.2018",
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
                "hit": false,
                "img": require('./img/seafood/shrimp.png'),
                "producer":"ООО\" ДЕФА фишинг\"(судно\"Арктик Лайон\")",
                "catchDate":"07.03.2018",
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
                "hit": false,
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
                "img": require('./img/seafood/shrimp.png'),
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
                "hit": true,
                "producer":"Аргентина",
                "catchDate":"01.12.2018",
                "img": require('./img/seafood/langoustines.png'),
                "price": 690
            },

        ]
    }


};

const Katalog = {
    ...Price,

    FILTER_COUNT : 12,
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
                    el.parent.catalog_tittle = group.catalog_tittle;
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




    /**
     * Получает элементы для витрины
     * @returns {Array}
     */
    getHitItems: function () {
        const isProduct = p => p.hit == true;

        let res = [];
        for (let fish in Katalog) {
            let group = Katalog[fish];
            if (group.catalog_tittle) {

                let filtredData = group.items.filter(isProduct);
                let el = filtredData.map(f=>{
                    f.parent = {};
                    f.parent.id = fish;
                    f.parent.catalog_tittle = group.catalog_tittle;
                    return f;
                });
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
                return Katalog[groupName].items.slice(0,filterCount);
            }
        }
        if (!filterCount)
            filterCount = this.FILTER_COUNT;

        return this.getAllItems().slice(0,filterCount);


    },

    /**
     * На всю красную рыбу (горбуша,кета,семга,кижуч,форель)- ставим (минтай,кальмар, креветка гренл,камбала,лангустины)
     * На остальную( минтай,треска,камбала, сельдь,скумбрия) ставим( кета, семга,крев гренл,лангустины,кальмар)
     * На морепродукты(кальмар,все креветки,лангустины,гребешек,мидии) ставим кета,горбуша,семга,минтай,камбала)
     * @param fishItem
     * @param countFishFoGroups
     * @returns {*}
     */
    getWithThisProductBuy: function(fishItem,countFishFoGroups){
        const returnArr = [];
        let hitItems = Katalog.getHitItems();


        const redFish = hitItems.filter(fish => fish.parent.id==='fish' && fish.isRedFish && fish.id!==fishItem.id).sort((a,b) =>Math.random() - 0.5).slice(0,1)[0];
        const whiteFish = hitItems.filter(fish => fish.parent.id==='fish' && !fish.isRedFish).sort((a,b) =>Math.random() - 0.5).slice(0,1)[0];
        const shrimpsAndLangoustines = hitItems.filter(fish => fish.parent.id==='Shrimp' ||fish.parent.id==='Langoustines' && fish.id!==fishItem.id).sort((a,b) =>Math.random() - 0.5).slice(0,1)[0];
        const shellfish =  hitItems.filter(fish => fish.parent.id==='Shellfish' && fish.id!==fishItem.id).sort((a,b) =>Math.random() - 0.5).slice(0,1)[0];

        if(fishItem.isRedFish) {
            returnArr[0]  = whiteFish;
            returnArr[1]  = shellfish
            returnArr[2]  = shrimpsAndLangoustines

        } else if (fishItem.parent.id==='fish'){
            returnArr[0]  = redFish;
            returnArr[1]  = shellfish
            returnArr[2]  = shrimpsAndLangoustines
        } else if (fishItem.parent.id!=='Shrimp' || fishItem.parent.id!=='Langoustines'){
            returnArr[0]  = redFish;
            returnArr[1]  = whiteFish
            returnArr[2]  = shellfish
        }else if (fishItem.parent.id!=='Shellfish'){
            returnArr[0]  = redFish;
            returnArr[1]  = whiteFish
            returnArr[2]  = shrimpsAndLangoustines
        }

        return returnArr;
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
        //$('#header_pouch span').html(0);
    },
    addShoppingCart: (fish, countFish) => {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if (shoppingCart == null) {
            shoppingCart = {}
        }
        shoppingCart[fish.id] = {...fish, count: countFish,};
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        //$('#header_pouch span').html(Object.keys(shoppingCart).length || 0);


    },deleteShoppingCart: (fishId) => {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if (shoppingCart == null) {
            shoppingCart = {}
        }
        delete shoppingCart[fishId];
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        //$('#header_pouch span').html(Object.keys(shoppingCart).length || 0);


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
        });
        return r;
    }
};


export default Katalog;
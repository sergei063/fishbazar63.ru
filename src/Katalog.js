import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import ProductionStyle from './css/ProductionStyle';
import {StyleSheet, css} from 'aphrodite/no-important';
import $ from 'jquery'
import HomeStyle from './css/HomeStyle';
import uniqid  from 'uniqid';


const Price = {
    Losos: {
        catalog_tittle: 'Лососевые',
        items: [
            {
                id: "pink_salmon",
                showCaseName: 'Горбуша',
                name: "Горбуша",
                info: "Неразделанная",
                isShowCase: true,
                img: require('./img/katalog/pink salmon.jpg'),
                price: 230
            },
            {
                id: "chum",
                showCaseName: 'Кета',
                name: "Кета",
                info: "Потрошеная с головой",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 325
            },
            {
                id: "red_salmon",
                showCaseName: 'Нерка',
                name: "Нерка",
                info: "потрошеная безголовая",
                isShowCase: true,
                img: require('./img/katalog/red_salmon.jpg'),
                price: 1
            },
            {
                id: "coho",
                showCaseName: 'Кижуч',
                name: "Кижуч",
                info: "потрошеный с головой",
                isShowCase: true,
                img: require('./img/katalog/coho.jpg'),
                price: 480
            },
            {
                id: "sea_run_char",
                showCaseName: 'Голец',
                name: "Голец",
                info: "неразделанный",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'),
                price: 1
            },
            {
                id: "chinook_salmon",
                showCaseName: 'Чавыча',
                name: "Чавыча",
                info: "ПСГ потрошеная с головой / ПБГ потрошеная безголовая",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'),
                price: 1
            },
            {
                id: "salmon_of_chile_3_4",
                showCaseName: 'Семга',
                name: "Семга",
                info: "Чили(3-4)",
                isShowCase: true,
                img: require('./img/katalog/salmon.jpg'),
                price: 590
            },
            {
                id: "salmon_of_chile_5_6",
                showCaseName: 'Семга',
                name: "Семга Чили(5-6)",
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/salmon.jpg'),
                price: 625
            },
            {
                id: "salmon_of_chile_6_7",
                showCaseName: 'Семга',
                name: "Семга Чили(6-7)",
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/salmon.jpg'),
                price: 675
            },
            {
                id: "Trout_of_iceberg",
                showCaseName: 'Форель',
                name: "Форель «Айсберг»",
                info: "(1,8-2,7) «Айсберг»",
                isShowCase: true,
                img: require('./img/katalog/trout.jpg'),
                price: 570
            },
            {
                id: "Trout_of_chile",
                showCaseName: 'Форель',
                name: "Форель Prem Чили",
                info: "(1,8-2,7) Prem Чили",
                isShowCase: true,
                img: require('./img/katalog/trout.jpg'),
                price: 570
            }
        ]
    },
    Treska: {
        catalog_tittle: 'Тресковые',
        items: [
            {
                id: "treska_15",
                showCaseName: 'Треска', name: "Треска",
                info: "Тихоокеанская потрошеная безголовая навеской (0,5-1,5)кг",
                isShowCase: true, img: require('./img/katalog/codfish.jpg'), price: 195

            }, {
                id: "treska_03",
                showCaseName: 'Треска', name: "треска",
                info: "Тихоокеанская потрошеная безголовая навеской (0,3-0,5)кг",
                isShowCase: true,
                img: require('./img/katalog/codfish.jpg'), price: 185


            },
            {
                id: "mintay",
                showCaseName: 'Минтай', name: "Минтай",
                info: "потрошеный безголовый<br 25+см/>",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'), price: 95

            },
            {
                id: "navaga",
                showCaseName: 'Навага',
                name: "Навага",
                info: "потрошеная безголовая S",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'),
                price: 130
            },
            {
                id: "haddock",
                showCaseName: 'Пикша',
                name: 'Пикша',
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/none.jpg'),
                price: 185
            },
            {
                id: "blue whiting",
                showCaseName: 'Путассу',
                name: 'Путассу',
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/none.jpg'),
                price: 73
            },
            {
                id: "hake",
                showCaseName: 'Хек',
                name: 'Хек',
                info: "Аргентина(400-600)",
                isShowCase: false,
                img: require('./img/katalog/none.jpg'),
                price: 207
            },
            {
                id: "hake",
                showCaseName: 'Хек',
                name: 'Хек',
                info: "Перу(200-400)",
                isShowCase: false,
                img: require('./img/katalog/none.jpg'),
                price: 175
            },
            {
                id: "lemonema",
                showCaseName: 'Лемонема',
                name: 'Лемонема',
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/none.jpg'),
                price: 160
            }

        ]
    },
    Flounder: {
        catalog_tittle: 'Камбаловые',
        items: [
            {
                id: "Flounder_s",
                showCaseName: 'Камбала S',
                name: "Камбала S [290-310]",
                info: "Без головы,белобрюхая,  частично икряная",
                isShowCase: true,
                img: require('./img/katalog/flounder.jpg'),
                price: 155
            },
            {
                id: "Flounder_s_tu",
                showCaseName: 'Камбала',
                name: "Камбала S",
                info: "Без головы,белобрюхая",
                isShowCase: false,
                img: require('./img/katalog/flounder.jpg'),
                price: 150
            },
            {
                id: "Flounder_m",
                showCaseName: 'Камбала M',
                name: "Камбала, М[250-350]",
                info: "Без головы,Белобрюхая",
                isShowCase: true,
                img: require('./img/katalog/flounder.jpg'),
                price: 165
            },
            {
                id: "Flounder_l",
                showCaseName: 'Камбала L',
                name: "Камбала,  L",
                info: "Без головы,белобрюхая,частично икряная",
                isShowCase: true,
                img: require('./img/katalog/flounder.jpg'),
                price: 180
            },
            {
                id: "Halibut",
                showCaseName: 'Палтус',
                name: "Палтус",
                info: "Белокорый потрошеный безголовый 0,5-1кг",
                isShowCase: true,
                img: require('./img/katalog/flounder.jpg'),
                price: 1
            }
        ]
    },
    Mollusc: {
        catalog_tittle: 'Кальмар',
        items: [
            {
                id: 'squid',
                showCaseName: 'Кальмар',
                name: "Кальмар",
                info: "",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'),
                price: 1
            },
            {
                id: "scallop",
                showCaseName: 'Филе морского гребешка',
                name: "Филе морского гребешка",
                info: "",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'),
                price: 1
            }
        ]
    },

    Osmeridae: {
        catalog_tittle: 'Корюшка',
        items: [
            {
                id: 'osmeridae',
                showCaseName: 'Корюшка',
                name: "Корюшка",
                info: "",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'),
                price: 1
            },
            {
                id: "capelin",
                showCaseName: 'Мойва',
                name: "Мойва",
                info: "",
                isShowCase: true,
                img: require('./img/katalog/none.jpg'),
                price: 1
            }
        ]
    },


    Shrimp: {
        catalog_tittle: 'Креветки',
        items: [
            {
                id: 'shrimp_angular',
                showCaseName: 'Креветка углохвостая', name: "Креветка углохвостая",
                info: "Креветка углохвостая 90-110 без глазури в коробке по 1 кг",
                isShowCase: true, img: require('./img/katalog/none.jpg'), price: 400
            },

        ]
    },
    Herring: {
        catalog_tittle: 'Cельдь',
        items: [
            {
                id: 'herring',
                showCaseName: 'Сельдь', name: "Сельдь",
                info: "",
                isShowCase: true, img: require('./img/katalog/none.jpg'), price: 90
            },

        ]
    },
    Mackerel: {
        catalog_tittle: 'Скумбрия',
        items: [
            {
                id: 'mackerel',
                showCaseName: 'Скумбрия', name: "Скумбрия",
                info: "",
                isShowCase: true, img: require('./img/katalog/none.jpg'), price: 175
            },

        ]
    },
    Saury: {
        catalog_tittle: 'Сайра',
        items: [
            {
                id: 'saury',
                showCaseName: 'Сайра', name: "Сайра",
                info: "",
                isShowCase: true, img: require('./img/katalog/none.jpg'), price: 1
            },

        ]
    }


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
                                    <div className={css(HomeStyle.productName)}>{p.showCaseName}</div>
                                    <div className={css(HomeStyle.productPrice)}>
                                        <b>{p.price}</b>
                                        <small>руб/кг</small>
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
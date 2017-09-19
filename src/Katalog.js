import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import ProductionStyle from './css/ProductionStyle';
import {StyleSheet, css} from 'aphrodite/no-important';
import $ from 'jquery'
import HomeStyle from './css/HomeStyle';


const Price = {
    Losos: {
        catalog_tittle: 'Лососевые',
        items: [
            {
                id: "pink_salmon",
                showCaseName: 'Горбуша',
                name: "Горбуша",
                info: "Неразделанная [1 сорт]   серебро, морская",
                isShowCase: true,
                img: require('./img/katalog/pink salmon.jpg'),
                price: 230
            },
            {
                id: "chum",
                showCaseName: 'Кета',
                name: "Кета",
                info: "Потрошеная с головой [1 сорт] штучной заморозки, серебро, морская красное мясо",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 325
            },
            {
                id: "red_salmon",
                showCaseName: 'Нерка',
                name: "Нерка",
                info: "ПБГ потрошеная безголовая",
                isShowCase: true,
                img: require('./img/katalog/red_salmon.jpg'),
                price: 500
            },
            {
                id: "coho",
                showCaseName: 'Кижуч',
                name: "Кижуч",
                info: "ПБГ потрошеный безголовый",
                isShowCase: true,
                img: require('./img/katalog/coho.jpg'),
                price: 600
            },
            {
                id: "sea_run_char",
                showCaseName: 'Голец',
                name: "Голец",
                info: "НР неразделанный",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 700
            },
            {
                id: "chinook_salmon",
                showCaseName: 'Чавыча',
                name: "Чавыча",
                info: "ПСГ потрошеная с головой / ПБГ потрошеная безголовая",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 800
            },
            {
                id: "salmon_of_chile_3_4",
                showCaseName: 'Семга',
                name: "Семга",
                info: "Чили(3-4)",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 590
            },
            {
                id: "salmon_of_chile_5_6",
                showCaseName: 'Семга',
                name: "Семга Чили(5-6)",
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/keta.jpg'),
                price: 625
            },
            {
                id: "salmon_of_chile_6_7",
                showCaseName: 'Семга',
                name: "Семга Чили(6-7)",
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/keta.jpg'),
                price: 675
            },
            {
                id: "Trout_of_iceberg",
                showCaseName: 'Форель',
                name: "Форель «Айсберг»",
                info: "(1,8-2,7) «Айсберг»",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 570
            },
            {
                id: "Trout_of_chile",
                showCaseName: 'Форель',
                name: "Форель Prem Чили",
                info: "(1,8-2,7) Prem Чили",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 570
            }
        ]
    },
    Treska: {
        catalog_tittle: 'Тресковые',
        items: [
            {
                id: "treska",
                showCaseName: 'Треска', name: "Треска",
                info: "Тихоокеанская ПБГ потрошеная безголовая навеской 0,3-0,5 /0,5-1/1-1,5/1,5-2/2-3<br />ГОСТ, 2S и S",
                isShowCase: true, img: require('./img/katalog/keta.jpg'), price: 195
            },
            {
                id: "mintay",
                showCaseName: 'Минтай', name: "Минтай",
                info: "ПБГ потрошеный безголовый 21+/25+/30+/35+<br />ГОСТ, М 30см+ «Алаид»",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'), price: 90
            },
            {
                id: "navaga",
                showCaseName: 'Навага',
                name: "Навага",
                info: "ПБГ потрошеная безголовая 21+/25+/30+",
                isShowCase: true,
                img: require('./img/katalog/keta.jpg'),
                price: 130
            },
            {
                id: "haddock",
                showCaseName: 'Пикша',
                name: 'Пикша',
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/keta.jpg'),
                price: 130
            },
            {
                id: "blue whiting",
                showCaseName: 'Путассу',
                name: 'Путассу',
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/keta.jpg'),
                price: 130
            },
            {
                id: "hake",
                showCaseName: 'Хек',
                name: 'Хек',
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/keta.jpg'),
                price: 130
            },
            {
                id: "lemonema",
                showCaseName: 'Лемонема',
                name: 'Лемонема',
                info: "Описание отсутствует",
                isShowCase: false,
                img: require('./img/katalog/keta.jpg'),
                price: 130
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
                info: "Без головы [1 сорт] ГОСТ, белобрюхая, S [290-310] крупная,  частично икряная",
                isShowCase: true,
                img: require('./img/katalog/flounder_l.jpg'),
                price: 155
            },
            {
                id: "Flounder_s_tu",
                showCaseName: 'Камбала',
                name: "Камбала Белобрюхая S",
                info: "Без головы [1 сорт] ГОСТ / ТУ, белобрюхая,   S",
                isShowCase: false,
                img: require('./img/katalog/flounder_l.jpg'),
                price: 150
            },
            {
                id: "Flounder_m",
                showCaseName: 'Камбала M',
                name: "Камбала Белобрюхая, M",
                info: "Без головы [1 сорт] Белобрюхая, M  [250-350]",
                isShowCase: true,
                img: require('./img/katalog/Flounder.jpg'),
                price: 165
            },
            {
                id: "Flounder_l",
                showCaseName: 'Камбала L',
                name: "Камбала Белобрюхая,  L",
                info: "Без головы [1 сорт] ГОСТ / ТУ, белобрюхая,  L   частично икряная",
                isShowCase: true,
                img: require('./img/katalog/Flounder.jpg'),
                price: 180
            },
            {
                id: "Halibut",
                showCaseName: 'Палтус',
                name: "Палтус",
                info: "Белокорый ПБГ потрошеная безголовая 0,5-1кг",
                isShowCase: true,
                img: require('./img/katalog/Flounder.jpg'),
                price: 9999
            }
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


    }
}


export default Katalog;
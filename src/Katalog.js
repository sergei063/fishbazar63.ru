import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'

const Price = { Losos: {
    catalog_tittle: 'Лососевые',
    items: [
        {
            id: "pink_salmon",
            name: "Горбуша",
            info: "НР неразделанная / ПСГ потрошеная с головой / ПБГ потрошеная безголовая",
            isShowCase:true, price: 300
        },
        {id: "chum", name: "Кета", info: "ПСГ потрошеная с головой / ПБГ потрошеная безголовая", isShowCase:true, price: 400},
        {id: "red_salmon", name: "Нерка", info: "ПБГ потрошеная безголовая", isShowCase:true, price: 500},
        {id: "coho", name: "Кижуч", info: "ПБГ потрошеный безголовый", isShowCase:true, price: 600},
        {id: "sea_run_char", name: "Голец", info: "НР неразделанный", isShowCase:true, price: 700},
        {
            id: "chinook_salmon",
            name: "Чавыча",
            info: "ПСГ потрошеная с головой / ПБГ потрошеная безголовая",
            isShowCase:true, price: 800
        }
    ]
},
    Treska: {
        catalog_tittle: 'Тресковые',
        items: [
            {
                id: "treska",
                name: "Треска",
                info: "тихоокеанская ПБГ потрошеная безголовая навеской 0,3-0,5 /0,5-1/1-1,5/1,5-2/2-3",
                isShowCase:true, price: 1000
            },
            {id: "mintay", name: "Минтай", info: "ПБГ потрошеный безголовый 21+/25+/30+/35+", isShowCase:true, price: 1000},
            {id: "navaga", name: "Равага", info: "ПБГ потрошеная безголовая 21+/25+/30+", isShowCase:true, price: 1000}
        ]
    }};

const Katalog = {
    ...Price,

    creatLinkProductMenu: (name, arr) => {
        return (<div>
            {name}
            <ul>
                {
                    arr.map(p => (
                        <li key={p.id}>
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


        for (let el in Katalog) {
            let group = Katalog[el];
            if (group.catalog_tittle) {

                let el = group.items.find(isProduct);
                console.log(el)
                if (el)
                    return el;
            }
        }
    },
    getShowcaseItems: function () {
        const isProduct = p => p.isShowCase == true;

        let res=[];
        for (let el in Katalog) {
            let group = Katalog[el];
            if (group.catalog_tittle) {
                let el = group.items.filter(isProduct);

                if (el){
                    res = res.concat(...el);
                }
            }
        }

        return res;
    }
}


export default Katalog;
import React from 'react';
import {Link} from 'react-router-dom'
import {css} from "aphrodite/no-important";
import AppStyle from "../../css/AppStyle";
import ProductionStyle from "../../css/ProductionStyle";
import Katalog from "../../Katalog";


const CatalogGroups = (props) => {


    let {history, productItems} = props;
    let keyMe = 2;
    let filter;
    try {
        filter = history.location.state.filter;
    } catch (e) {
        filter = null
    }

    return (
        <ul>
            <OneGroup history={history} pathname={props.history.location.pathname} filter={filter} urlFilter={null} text={`Все`}/>
            <OneGroup history={history} pathname={props.history.location.pathname} filter={filter} urlFilter={`hit`} text={`Хит`}/>
            {
                productItems.map(p => {
                    ++keyMe;
                    return (
                        <OneGroup key={keyMe} history={history} pathname={props.history.location.pathname} filter={filter} urlFilter={p.name} text={p.catalog_tittle}/>
                    )

                })
            }
        </ul>

    );
}


const OneGroup = (props) => {
    let {history, pathname, filter, urlFilter, text} = props;
    return (
        <li onClick={() => {
            history.push({pathname: pathname, state: {filter: urlFilter}});
            /*this.scrollToProductuionContainer(); */
        }}
            className={css(ProductionStyle.marginRight15, ProductionStyle.gpoupItem, AppStyle.right_text)}>
            <span className={css((filter === urlFilter) ? AppStyle.link_active : AppStyle.link)}>{text}</span>
        </li>
    );
}


export default CatalogGroups;
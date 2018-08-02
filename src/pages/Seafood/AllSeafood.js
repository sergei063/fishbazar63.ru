import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import {css} from "aphrodite/no-important";
import AppStyle from "../../css/AppStyle";
import SeafoodStyle from "./SeafoodStyle";
import Seafood from "./Seafood";
import Katalog from "../../Katalog";
import CatalogGroups from "../../components/CatalogGroups/CatalogGroups";
import AllCards from "../../components/Cards/AllCards";

const AllSeafood = (props) => {
    let filter, filterCount;

    try {
        filterCount = props.history.location.state.filterCount;
        if (!filterCount){filterCount = Katalog.FILTER_COUNT;}
    } catch (e) {
        filterCount = Katalog.FILTER_COUNT;
    }
    try {
        filter = props.history.location.state.filter;
    } catch (e) {
        filter = null;
        filterCount = Katalog.FILTER_COUNT;
    }
    let groupItems = Katalog.getGroupItems(filter, filterCount);

    return (
        <div className={css(SeafoodStyle.cnt)}>
            <div className={css(AppStyle.textAlignCenter)}>
                <AllCards items={groupItems}/>
                <br/>
                <button hidden={(filter != null)} onClick={() => {
                    if (filterCount > groupItems.length) {
                        return;
                    }

                    props.history.push({pathname: props.history.location.pathname, state: {filterCount: filterCount + Katalog.FILTER_COUNT}});
                }} style={{width: '174px'}} className={css(AppStyle.buttonRed)}>Еще
                </button>

                <br/>&nbsp;
            </div>
            <div className={css(AppStyle.textAlignRigh)}>
                <CatalogGroups history={props.history} productItems={Katalog.getGroup()}/>
                <br/>
                <img src={require('../../img/design/seafood_layer/seafood_layer.png')}
                     srcSet={`${require('../../img/design/seafood_layer/seafood_layer2x.png')} 2x, ${require('../../img/design/seafood_layer/seafood_layer3x.png')} 3x`}
                     width='214px' height='175px'></img>
            </div>

        </div>
    );
}

export default AllSeafood;
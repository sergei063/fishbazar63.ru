import React from 'react';
import {css} from "aphrodite/no-important";
import AppStyle from "../../css/AppStyle";
import SeafoodStyle from "./SeafoodStyle";
import Katalog from "../../Katalog";
import CatalogGroups from "../../components/CatalogGroups/CatalogGroups";
import AllCards from "../../components/Cards/AllCards";
import {MobileAgent} from "../../components/MobileAgent/MobileAgent";
import PouchIcon from "../../containers/PouchIcon/PouchIcon";
import DeliveryStyle from "../Delivery/DeliveryStyle";


const AllSeafood = (props) => {
    let filter, filterCount;
    let {isMinimize} = props;
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
                <AllCards isShowAddFish={true} items={groupItems}/>
                <br/>
                <button hidden={/*(filter != null) || */(filterCount > groupItems.length)} onClick={(event) => {
                    if (filterCount > groupItems.length) {
                        event.currentTarget.hidden='hidden';
                        return;
                    }

                    props.history.push({pathname: props.history.location.pathname, state: {filter:filter, filterCount: filterCount + Katalog.FILTER_COUNT}, notScrollToTop: true});
                }} style={{width: '174px'}} className={css(AppStyle.buttonRed)}>Еще
                </button>

                <div className={css(DeliveryStyle.allSeafoodArea)}></div>
            </div>
            <div className={css(SeafoodStyle.catalogGroupsDiv)}>
                <CatalogGroups history={props.history} productItems={Katalog.getGroup()}/>
                <br/>
                <img className={css(SeafoodStyle.seafood_img_Layer)} src={require('../../img/design/seafood_layer/seafood_layer.png')}
                     srcSet={`${require('../../img/design/seafood_layer/seafood_layer2x.png')} 2x, ${require('../../img/design/seafood_layer/seafood_layer3x.png')} 3x`}
                     width='214px' height='175px'></img>
            </div>

        </div>
    );
};

export default AllSeafood;
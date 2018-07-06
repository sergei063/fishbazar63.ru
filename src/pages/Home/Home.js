import React from 'react';
import Katalog from '../../Katalog';
import {Switch, Route} from 'react-router-dom'
import {css} from 'aphrodite/no-important';


import AppStyle from "../../css/AppStyle";
import CatalogGroups from "../../components/CatalogGroups/CatalogGroups";
import HomeStyle from "../../css/HomeStyle";
import Delivery from "../Delivery/Delivery";
import SocialNetworkBlock from "../Delivery/SocialNetworkBlock/SocialNetworkBlock";
import QualityAssurance from "../QualityAssurance/QualityAssurance";
import Recipes from "./RecipesBlog/RecipesBlog";
import DeliveryStyle from "../Delivery/DeliveryStyle";
import Seafood from "../Seafood/Seafood";



//<img className={css(HomeStyle.productPhotoImg)} src={require(`${p.img}`)} alt=""></img>
const AllShowcase = (props) => {

    return (
        <div>
            <Seafood {...props}/>
            <Delivery/>
            <SocialNetworkBlock/>
            <QualityAssurance/>
            <Recipes/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

const Home = () => (
    <Switch>
        <Route exact path='/' component={AllShowcase}/>
    </Switch>
)
export default Home;
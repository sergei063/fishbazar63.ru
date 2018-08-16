import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {css} from 'aphrodite/no-important';
import {StyleSheet} from 'aphrodite/no-important';

import Delivery from "../Delivery/Delivery";
import SocialNetworkBlock from "../Delivery/SocialNetworkBlock/SocialNetworkBlock";
import QualityAssurance from "../QualityAssurance/QualityAssurance";
import Recipes from "./RecipesBlog/RecipesBlog";
import DeliveryStyle from "../Delivery/DeliveryStyle";
import AllSeafood from "../Seafood/AllSeafood";
import {MetaSerifProBookFont} from "../../css/Fonts";


//<img className={css(HomeStyle.productPhotoImg)} src={require(`${p.img}`)} alt=""></img>
class AllShowcase extends React.Component {
    componentDidMount(){

    }

    render()
    {
        return (
            <div>
                <AllSeafood isMinimize={true}  {...this.props}/>
                <div className={css(DeliveryStyle.allSeafoodArea)}></div>
                <Delivery isMinimize={true} />
                <SocialNetworkBlock/>

                <div className={css(HStyle.mobileHidden)}>
                    <QualityAssurance isMinimize={true}/>
                    <Recipes/>
                    <div style={{backgroundColor: '#f9f9f9', height: '120px'}}></div>
                </div>
            </div>
        )
    }
}
const HStyle = StyleSheet.create({
    mobileHidden:{
        display:'block',
        '@media (max-width: 500px)': {
            display:'none',
        }
    },





});
const Home = () => (
    <Switch>
        <Route exact path='/' component={AllShowcase}/>
    </Switch>
);
export default Home;
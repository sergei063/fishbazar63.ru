import React from 'react';
import {css} from "aphrodite";
import {Recipes} from "../../../pages/Blog/Blog";
import SocialNetworkBlockStyle from "../../../pages/Delivery/SocialNetworkBlock/SocialNetworkBlockStyle";
import AllBlogStyle from "../../../pages/Blog/AllBlogStyle";
import {FuturaBoldFont, FuturaMediumFont, MetaSerifProBookFont} from "../../../css/Fonts";
import {StyleSheet} from 'aphrodite/no-important';
import Instagram from "../../SocialNetwork/Instagram";
import VK from "../../SocialNetwork/Vk";
import Katalog from "../../../Katalog";
import AllCards from "../../Cards/AllCards";
import CardStyle from "../../Cards/css/CardStyle";
import {_try} from "../../lib";



export const MenuBlogFilter = (props) => {

    let blogFilter =_try(() => props.history.location.state.blogFilter, '');
    return (
        <div className={css(MenuBlogFilterStyle.cnt_filter)}>
            {Recipes.getGroup().map((group, index) => (
                    <div className={css(MenuBlogStyle.el_filter, (blogFilter===group.catalog_tittle)?MenuBlogStyle.el_filter_selected:null)} key={index.toString()}
                         onClick={() => {
                             props.history.push({pathname: '/blog', state: {blogFilter: group.catalog_tittle}});
                         }}>
                        {group.catalog_tittle}
                    </div>
                )
            )}
        </div>
    );
};

const findFishForRecipe = (fish) => {
    if (!fish) return [];

    return fish.map((fishId) => (Katalog.get(fishId)));

};





const MenuBlog = (props) => {
    let fishForRecipe = findFishForRecipe(props.fish_for_recipe);

    return (
        <div className={css(MenuBlogStyle.menu)}>
            <h1 className={css(AllBlogStyle.h1)}>&nbsp;</h1>
            <h2 className={css(AllBlogStyle.h2)}>&nbsp;</h2>
            <div className={css(MenuBlogStyle.menu_about)}>
                <div style={{width: '207px'}}>Блог о том, как готовить морепродукты</div>
                <div style={{height: '123px'}}><img src={require('../../../img/design/blog/layer/l.png')}
                                                    srcSet={`${require('../../../img/design/blog/layer/l2x.png')} 2x, ${require('../../../img/design/blog/layer/l3x.png')} 3x`}
                                                    width='165px' height='123px'></img>
                </div>
            </div>
            <div style={{height: '35px'}}></div>
            <MenuBlogFilter history={props.history}/>
            <div style={{height: '59px'}}></div>
            <div className={css(MenuBlogStyle.socialNetworkWatchDiv)}>
                <div>Следите за новыми рецептами в соцсетях</div>
                <div><Instagram/>
                    <span className={css(SocialNetworkBlockStyle.PL20)}>
                            <VK/></span></div>

            </div>
            <div style={{height: '56px'}}></div>
            <AllCards items={fishForRecipe} inStyle={FishForRecipeCardStyle}/>
        </div>
    );
};

const FishForRecipeCardStyle = StyleSheet.create({

    ul: {
        ...CardStyle.ul._definition,
        padding:'0'
    },
    li: {
        ...CardStyle.li._definition,
        margin:'0'
    },
    card: {
        ...CardStyle.card._definition,
        margin:'0'
    }

});


const MenuBlogFilterStyle = StyleSheet.create({
    cnt_filter: {
        /*width:'90%',
        height:'50px',*/
        display: 'grid',
        justifyItems:'flex-start',
        rowGap: '23px',
        gridTemplateColumns: '1fr 1fr',
        '@media (max-width: 1000px)':{

        },
        ':nth-child(1n) > :nth-child(2)':{
            marginLeft:'-65px'
        }
    },
});
const MenuBlogStyle = StyleSheet.create({
    cnt_filter: {
        width:'90%',
        height:'50px',
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "baseline",
        alignContent: "space-between"
    },
    el_filter: {
        fontFamily: [FuturaMediumFont, "sans-serif"],
        //marginRight: '48px',
        paddingRight: '15px',
        paddingLeft: '15px',
        borderRadius: "100px",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 10px 0 rgba(53, 66, 92, 0.08)",
        fontSize: "14px",
        fontWeight: "bold",
        cursor:'pointer',
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "0.5px",
        textAlign: "left",
        color: "#1e232c",
        textTransform:'uppercase',
        ':hover':{
            backgroundColor: '#fe545b',
            boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)',
            color: '#ffffff'
        }
    },
    el_filter_selected: {
        color: "#fe545b"
    },
    menu: {
        width: '304px'

    },
    menu_about: {
        height: '214px',
        paddingLeft: '24px',
        paddingTop: '32px',
        backgroundColor: "#fff",
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.5px',
        color: '#1e232c',

        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-end'
    },
    socialNetworkWatchDiv: {
        width: '100%',
        height: '236px',
        backgroundColor: '#3454b0',
        backgroundImage: "url(" + require('../../../img/design/delivery_small/small.png') + ")",
        backgroundSize: '180px 180px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right -70px bottom -65px',
        ':nth-child(1n) > :first-child': {
            fontFamily: [FuturaBoldFont, "sans-serif"],
            width: "267px",
            paddingLeft: '19px',
            paddingTop: '33px',
            fontSize: "16px",
            fontWeight: "bold",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: "1.56",
            letterSpacing: "0.5px",
            textAlign: "center",
            color: "#ffffff"
        },
        ':nth-child(1n) > :last-child': {
            textAlign: "center",
            marginTop: '31px'
        }
    }


});

export default MenuBlog;
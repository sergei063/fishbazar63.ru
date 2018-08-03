import React from 'react';
import {Link} from 'react-router-dom';
import {css, StyleSheet} from "aphrodite/no-important";
import {connect} from "react-redux";


const PouchIcon = (props) => {
    let lenght = Object.keys(props.seafoodShoppingCart.allFish).length;

    return (
        <Link id="header_pouch" className={css((lenght===0)?Style.displayNone:Style.pouchA)} to='/shopping_cart'><span
            className={css(Style.pouch_a_span)}>{lenght}</span></Link>
    );
};

const Style = StyleSheet.create({

    displayNone: {display:'none'},
    pouchA: {
        background: "#ffffff url(" + require('../../img/bucket/normal.png') + ") no-repeat 50% 19px",
        height: '68px', width: '68px',
        borderRadius: '44px',
        position: 'absolute',
        top:'19px',
        right:'27px',
        ':hover': {
            backgroundImage: "url(" + require('../../img/bucket/hover.png') + ")",
        },
        ':hover span': {
            background: '#fe545b',
            boxShadow: 'none'
            /*border: '1px solid #fe545b'*/
        }
    },
    pouch_a_span: {

        position: 'absolute',
        bottom: '13px',
        right: '17px',
        display: 'block',
        background: '#fe545b',
        fontSize: '12px',
        lineHeight: '19px',
        height: '20px',
        width: '20px',
        textAlign: 'center',
        borderRadius: '20px',
        /*border: '1px solid #b0893e',
        boxShadow: 'inset 0 20px 20px -10px #eec77c',*/
        color: '#fff',
        textShadow: '0 1px #634d23',
        webkitFontSmoothing: 'auto'
    }




});
const mapStateToProps = (state) => ({seafoodShoppingCart: state.seafoodShoppingCart});

export default connect(mapStateToProps) (PouchIcon);


import React from 'react';
import {Link} from 'react-router-dom';
import {css, StyleSheet} from "aphrodite/no-important";
import {connect} from "react-redux";
import $ from 'jquery'

class PouchIcon extends React.Component {

    componentDidMount() {

    }


    componentWillUpdate() {
        let span = $('#header_pouch span');
        if ($('#header_pouch').hasClass(css(Style.pouchA))) {
            span.addClass(css(Style.pouch_a_span_animation));
        }


        setTimeout(() => span.removeClass(css(Style.pouch_a_span_animation)), 1000);
    }

    render() {

        let lenght = Object.keys(this.props.seafoodShoppingCart.allFish).length;

        return (
            <Link id="header_pouch" className={css((lenght === 0) ? Style.displayNone : Style.pouchA)}
                  to='/shopping_cart'>
                <span className={css(Style.pouch_a_span)}>{lenght}</span></Link>
        );
    }

}

const translateKeyframes = {
    '0%': {
        transform: 'translateX(0)',
        right: '-100px'
    },

    '100%': {
        transform: 'translateX(0px)',
    },
};
const PouchASpanKeyframe = {
    '0%': {
        transform: 'scale(1,1)',
    },
    '50%': {
        transform: 'scale(1.5,1.5)',
    },

    '100%': {
        transform: 'scale(1,1)',
    },
};

const Style = StyleSheet.create({

    displayNone: {display: 'none'},
    positionStyle: {


        '@media (max-width: 900px)': {
            top: '148px', right: '15px'
        },
    },
    pouchA: {
        animationName: [translateKeyframes],
        animationDuration: '500ms, 1000ms',
        animationIterationCount: '1',


        position: "fixed",
        zIndex: '9999',
        background: "#ffffff  image-set(url(" + require('../../img/bucket/normal.png') + ") 1x, url(" + require('../../img/bucket/normal@2x.png') + ") 2x, url(" + require('../../img/bucket/normal@3x.png') + ") 3x) no-repeat 50% 19px",
        height: '68px', width: '68px',
        borderRadius: '44px',
        //position: 'absolute',
        top: '235px',
        right: '27px',
        boxShadow: '0 1px 22px 0 rgba(0, 0, 0, 0.08)',
        transition: 'right 2s ease 0s',
        ':hover': {
            backgroundImage: "image-set(url(" + require('../../img/bucket/hover.png') + ") 1x, url(" + require('../../img/bucket/hover@2x.png') + ") 2x, url(" + require('../../img/bucket/hover@3x.png') + ") 3x)",


        },
        ':hover span': {
            background: '#fe545b',
            boxShadow: 'none'
            /*border: '1px solid #fe545b'*/
        },
        '@media (max-width: 900px)': {
            top: '148px', right: '15px'
        },
        '@media (max-width: 500px)': {
            top: '148px',
            right: '16px',
        }
    },
    pouch_a_span_animation: {
        animationName: [PouchASpanKeyframe],
        animationDuration: '0.5s',
        animationIterationCount: '1',
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

export default connect(mapStateToProps)(PouchIcon);


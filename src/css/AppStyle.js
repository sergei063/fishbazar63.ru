import {StyleSheet, css} from 'aphrodite/no-important';

const menu_inline_ul = {
    listStyleType: 'disc',
    webkitMarginBefore: '1em',
    webkitMarginAfter: '1em',
    webkitMarginStart: '0px',
    webkitMarginEnd: '0px',
    webkitPaddingStart: '40px'
}
const sliderBase = {
    minWidth: '100%',
    //height: '45vh',
    minHeight: '530px',
    backgroundSize: '100% 100%',
    backgroundPositionX: '0px',
    backgroundPositionY: '0px',
    display: 'table',
    textShadow: 'black 0.1em 0.1em 0.2em',
    transition: 'background 2s ease 0s',
    width: '100%'
}

 const coolFont = {
     fontFamily: 'MYRIADPRO-REGULAR',
     src: ' url("'+require('../fonts/MYRIADPRO-REGULAR.eot')+'"), url("'+require('../fonts/MYRIADPRO-REGULAR.eot?#iefix')+'") format("embedded-opentype"), url("'+require('../fonts/MYRIADPRO-REGULAR.woff')+'") format("woff")',
     fontWeight: 'normal',
     fontStyle: 'normal'
};

const AppStyle = StyleSheet.create({

    displayNone:{display: 'none'},
    displayBlock:{display: 'block'},

    siteTitle: {
        fontFamily: 'PT Sans Caption, sans-serif',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
        fontSize: '2em',
        color: 'white',
        '@media (max-width: 1020px)': {
            fontSize: '1em',
        },
        '@media (max-width: 1500px)': {
            fontSize: '1.5em',
        }

    },

    marginAuto: {
        margin: '0 auto'
    },

    red_text: {
        color: 'red'
    },
    center_text: {
        textAlign: 'center'
    },
    floatRight: {
        float: 'right'
    },

    blue_text: {
        color: '#3F51B5'
    },

    slider: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/fishmarket.jpg') + "),url(" + require('../img/fons/boy.jpg') + "),url(" + require('../img/fons/mintai.jpg') + "), url(" + require('../img/fons/krevetki.jpg') + "), url(" + require('../img/fons/abstract.jpg') + ")"
    },
    slider_line: {
        width: '675px',margin: 'auto',borderTop: '2px solid #fff'
    },
    slider_1: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/boy.jpg') + ")",
    },
    slider_2: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/mintai.jpg') + ")",

    },
    slider_3: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/krevetki.jpg') + ")",
    },
    menu_inline: {
        fontFamily: [coolFont, "sans-serif"],
        color: '#212121',
        display: 'inline',
        marginRight: '2em',
        fontSize: '1.1em',
        backgroundColor: 'white',
        ':hover': {
            borderBottom: '2px solid #cda659'
        },
        '@media (max-width: 750px)': {
            marginRight: '0.5em',
            fontSize: '1.5em',
        },
        '@media (max-width: 500px)': {
            marginRight: '0.5em',
            fontSize: '1em',
        }
    },
    menu_inline_ul: {
        ...menu_inline_ul
        , transition: 'transform 0.4s ease 0s, background 0.4s ease 0s'
    },
    menu_inline_ul_scroll: {
        ...menu_inline_ul,
        width: '100%',
        textAlign: 'center',
        top: '0px',
        position: 'fixed',
        //transition: 'top 2s',
        zIndex: 999999,
        transition: 'transform 0.4s ease 0s, background 0.4s ease 0s',
        boxShadow: '0 2px 10px rgba(0, 0, 1, 0.06)'

    },

    //example
    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },
    button: {
        color: '#fff',
        fontFamily: [coolFont, "sans-serif"],
        textDecoration: 'none',
        userSelect: 'none',
        background: 'rgb(212,75,56)',
        padding: '.7em 1.5em',
        outline: 'none',
        cursor: 'pointer',
        ':hover':{
            background: 'rgb(232,95,76)',
        },
        ':active':{
            background: 'rgb(152,15,0);',
        }
    },
    buttonBlue: {
        fontFamily: [coolFont, "sans-serif"],
        color: '#fff',
        textDecoration: 'none',
        userSelect: 'none',
        background: '#03A9F4',
        padding: '.7em 1.5em',
        outline: 'none',
        cursor: 'pointer',
        ':hover':{
            background: '#0277BD',
        },
        ':active':{
            background: '#01579B',
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});
export default AppStyle;
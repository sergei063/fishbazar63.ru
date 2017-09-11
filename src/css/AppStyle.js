import {StyleSheet, css} from 'aphrodite/no-important';


const AppStyle = StyleSheet.create({

    siteTitle: {
        fontFamily: 'Merriweather, serif',
        textAlign: 'center',
        display:'table-cell',
        verticalAlign:'middle',
        fontSize:'2em',
        color:'white'

    },

    red_text: {
        color: 'red'
    },

    blue_text: {
        color: '#3F51B5'
    },

    slider: {
        minWidth:'530px',
        height: '65vh',
        backgroundImage: "url(" + require('../img/fons/fish-fillet.jpg') + ")",
        backgroundSize: 'cover',
        backgroundPositionX: '0px',
        backgroundPositionY: '0px',
        display: 'table',
        textShadow: 'black 0.1em 0.1em 0.2em',
        width: '100%'
    },
    menu_inline: {
        fontFamily: 'Open Sans Condensed',
        fontWeight: 'bold',
        color: '#212121',
        display: 'inline',
        marginRight: '2em',
        marginRight: '2em',
        fontSize: '2em',
        backgroundColor: 'white',
        ':hover': {
            borderBottom:'2px solid #cda659',
            fontWeight:'bold'
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
    menu_inline_active: {
        borderBottom:'2px solid #cda659',
        fontWeight:'bold'


    },

    //example
    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});
export default AppStyle;
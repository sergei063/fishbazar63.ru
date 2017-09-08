import {StyleSheet, css} from 'aphrodite/no-important';


const AppStyle = StyleSheet.create({

    siteTitle: {
        fontFamily: 'Merriweather, serif',
        textAlign: 'center'

    },

    red_text: {
        color: 'red'
    },

    blue_text: {
        color: '#3F51B5'
    },

    slider: {
        backgroundColor: '#3F51B5',
        height: '75vh',
        backgroundImage: "url(" + require('../img/fons/fish-fillet.jpg') + ")",
        backgroundSize: 'cover',
        backgroundPositionX: '0px',
        backgroundPositionY: '0px'
    },
    menu_inline: {
        fontFamily: 'Open Sans Condensed',
        fontWeight: 'bold',
        color: '#3F51B5',
        display: 'inline',
        marginRight: '2em',
        marginRight: '2em',
        fontSize: '2em',
        backgroundColor: 'white',
        ':hover': {
            backgroundColor: 'red',
            color: 'white'
        },
        '@media (max-width: 750px)': {
            marginRight: '1em',
            fontSize: '1.5em',
        }


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
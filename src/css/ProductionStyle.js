import {StyleSheet, css} from 'aphrodite/no-important';
import AppStyle from './AppStyle';
const coolFont = {
    fontFamily: 'MYRIADPRO-REGULAR',
    src: ' url("' + require('../fonts/MYRIADPRO-REGULAR.eot') + '"), url("' + require('../fonts/MYRIADPRO-REGULAR.eot?#iefix') + '") format("embedded-opentype"), url("' + require('../fonts/MYRIADPRO-REGULAR.woff') + '") format("woff")',
    fontWeight: 'normal',
    fontStyle: 'normal'
};

const ProductionStyle = StyleSheet.create({
    cnt: {
        fontFamily: 'PT Sans Narrow',
        color: '#303F9F',
        fontSize: '1.5em',
        width: document.body.clientWidth * 0.5,
        margin: '0 auto'
    },
    productCnt: {
        width: '80%',
        margin: '0 auto'
    },
    groupProduct: {
        //backgroundColor:'white',
        width: '80%',
        padding: '2em'
    },
    ul: {}, li: {
        listStyleType: 'none',
        ':hover': {
            backgroundColor: 'red',
            color: 'white',
            transition: 'transform 0.4s ease 0s, background 0.4s ease 0s',
            cursor: 'pointer',
            fontSize: '1.6em'
        },
    },
    photoDiv: {
        position: 'relative',
        float: 'left',

    }, count: {
        width: '1em',
        padding: '.7em 0em',
        width:'3em',
        textAlign:'center'

    },
    link: {
        fontFamily: [coolFont, "sans-serif"],
        cursor:'pointer',
        color: '#212121',
        fontSize:'1.5em',
        marginRight:'1.5em',
        ':hover': {
            borderBottom: '2px solid #cda659'
        },
        '@media (max-width: 1430px)': {
            marginRight:'0.5em'
        },
        '@media (max-width: 1165px)': {
            fontSize:'1.2em',
            marginRight:'0.5em'
        },
        '@media (max-width: 950px)': {
            fontSize:'1.2em',
            marginRight:'0.5em',
            display:'block'
        }

    },link_active: {
        borderBottom: '2px solid #cda659',
        fontFamily: [coolFont, "sans-serif"],
        cursor:'pointer',
        color: '#212121',
        fontSize:'1.5em',
        marginRight:'1.5em',
        '@media (max-width: 1430px)': {
            marginRight:'0.5em'
        },'@media (max-width: 1165px)': {
            fontSize:'1.2em',
            marginRight:'0.5em'
        },
        '@media (max-width: 950px)': {
            fontSize:'1.2em',
            marginRight:'0.5em',
            display:'block'
        }
    },

    details: {
        position: 'relative',
        float: 'left',
        margin: '15px 0 0 40px',
        wordWrap: 'break-word',
        width: '70%',
        //fontSize: '1.7em',
        //maxWidth:'50em',
        //backgroundColor: 'green',
        fontFamily: 'Merriweather',
        '@media (max-width: 1160px)': {
            fontSize: '1em'
        },
    },
    clear: {
        clear: 'both'
    },
    back: {
        fontFamily: 'Open Sans Condensed',
        color: '#3F51B5',
        fontSize: '1.5em'
    },
    text: {
        fontFamily:'Noto Serif, serif',
        color:'#3F51B5',
        paddingTop:'2em',
        width:'70%',
        margin: '0 auto',
        fontSize:'2em',
        '@media (max-width: 750px)': {

            fontSize:'1em',
            padding: '0.2em',
        }


    }

});
export default ProductionStyle;
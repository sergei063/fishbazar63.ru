import {StyleSheet, css} from 'aphrodite/no-important';
import SourceSansProRegularFonts from './AppStyle'

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
        position: 'relative',
        '@media (max-width: 1400px)': {
            margin: '0'
        }
    },
    productTable: {
        width: '100%',
        margin: '0 auto',
        '@media (max-width: 1400px)': {
            margin: '0'
        }
    },
    groupProduct: {
        //backgroundColor:'white',
        margin: '0 auto',
        width: '80%',
        paddingLeft: '30%',
        //padding: '2em',
        '@media (max-width: 1550px)': {
            paddingLeft: '10%',
        },'@media (max-width: 1330px)': {
            paddingLeft: '0',
            margin:'0'
        },'@media (max-width: 1200px)': {
            paddingLeft: '0',
            margin:'0 auto',
            fontSize:'0.7em'
        }

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
    details: {
        position: 'relative',
        float: 'left',
        margin: '15px 0 0 40px',
        wordWrap: 'break-word',
        width: '60%',
        //fontSize: '1.7em',
        //maxWidth:'50em',
        //backgroundColor: 'green',
        fontFamily: 'Merriweather',
        '@media (max-width: 1160px)': {
            fontSize: '1em',
            width: '50%',
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
        fontFamily: [SourceSansProRegularFonts, "sans-serif"],
        color:'#333333',
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
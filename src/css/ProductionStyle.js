import {StyleSheet, css} from 'aphrodite/no-important';
import SourceSansProRegularFonts from './AppStyle'

const coolFont = {
    fontFamily: 'MYRIADPRO-REGULAR',
    src: ' url("' + require('../fonts/MYRIADPRO-REGULAR.eot') + '"), url("' + require('../fonts/MYRIADPRO-REGULAR.eot?#iefix') + '") format("embedded-opentype"), url("' + require('../fonts/MYRIADPRO-REGULAR.woff') + '") format("woff")',
    fontWeight: 'normal',
    fontStyle: 'normal'
};

const ProductionStyle = StyleSheet.create({
    a:{fontFamily: 'PT Sans Narrow',
        color: '#303F9F',
        fontWeight:'bold'


    },
    cnt: {
        fontFamily: 'PT Sans Narrow',
        color: '#303F9F',
        fontSize: '1.5em',
        width: document.body.clientWidth * 0.5,
        margin: '0 auto'
    },
    productCnt: {
        width: '100%',
        margin: '0 auto',

        position: 'relative',
        overflow:"hidden",
        '@media (max-width: 500px)': {
            margin: '0',
            width:"100%"
        }
    },

    groupProduct: {
        height:"3em",
        textAlign:"center",
        width: '100%',
        overflow:"hidden",
        //padding: '2em',
        '@media (max-width: 1200px)': {
            fontSize:'0.7em'
        },
        '@media (max-width: 840px)': {
            fontSize:'0.8em',
            lineHeight:"2em",
            textAlign:"center",
            height:"100%",
        }

    },
    marginRight15: {
        marginRight: '1.5em',
        '@media (max-width: 840px)': {
           display:"table"
        }
    },
    gpoupItem: {
        '@media (max-width: 840px)': {
           width:"100%",
            fontSize:"1.8em",
            marginBottom:"0.5em"
        }
    },
    ul: {},
    li: {
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
    nutritionalValue:{
        fontFamily: 'Merriweather',
        textIndent: "0em",
        marginLeft: "2em"
    },
    shopInfo:{
        fontFamily: 'Merriweather',
        textIndent: "0em",
        marginLeft: "2em"
    },
    details: {
        position: 'relative',
        float: 'left',
        margin: '15px 0 0 40px',
        wordWrap: 'break-word',
        width: '60%',
        minWidth: '300px',
        //fontSize: '1.7em',
        //maxWidth:'50em',
        //backgroundColor: 'green',
        fontFamily: 'Merriweather',
        '@media (max-width: 1160px)': {
            fontSize: '1em',
            width: '50%',
        },
        '@media (max-width: 750px)': {
            margin: '15px 0 0 20px',
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
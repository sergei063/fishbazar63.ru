import {StyleSheet, css} from 'aphrodite/no-important';


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
        width: '50%',
        paddingTop: '2em'
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
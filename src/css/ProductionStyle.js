
import {StyleSheet, css} from 'aphrodite/no-important';


const ProductionStyle = StyleSheet.create({
    cnt:{
        fontFamily: 'PT Sans Narrow',
        color: '#303F9F',
        fontSize: '1.5em'
    },
    ul:{

    },li:{
        listStyleType: 'none',
        ':hover': {
            backgroundColor: 'red',
            color: 'white',
            transition: 'transform 0.4s ease 0s, background 0.4s ease 0s',
            cursor:'pointer',
            fontSize: '1.6em'
        },
    },
    photoDiv:{
        position: 'relative',
        float: 'left',
    },
    details:{
        position: 'relative',
        float: 'left',
        margin:'15px 0 0 40px',
        fontFamily: 'Merriweather'
    },
    clear:{
        clear:'both'
    },
    back:{
        fontFamily: 'Open Sans Condensed',
        color: '#3F51B5',
       fontSize:'1.5em'
    }

});
export default ProductionStyle;
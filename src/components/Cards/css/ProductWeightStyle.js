import {StyleSheet} from 'aphrodite/no-important';

import {FuturaFont} from "../../../css/AppStyle";



const ProductWeightStyle = StyleSheet.create({
    productWeightFishBlock:{
        position:'absolute',
        top:'0',
        left:'0',
        zIndex:'1'
    },
    productWeightFishSpanChecked: {
        fontFamily: [FuturaFont, "sans-serif"],
        display:'inline',
        fontSize: '20px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.5px',
        textAlign: 'left',
        cursor:'pointer',
        color: '#ff565c',
        border: 'solid 1px #ff565c;'
    },
    productWeightFishSpan: {
        fontFamily: [FuturaFont, "sans-serif"],
        fontSize: '20px',
        height:'25px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#c3c8d1',
        cursor:'pointer',
        border: 'solid 1px #c3c8d1'

    },
});
export default ProductWeightStyle;
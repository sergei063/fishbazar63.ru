
import React from 'react';

import {css, StyleSheet} from "aphrodite/no-important";
import {FuturaFont} from "../../css/Fonts";


const ProductWeight = (props) =>  {
    let {price} = props;
    return (
        <div style={{display: (price.weightFish)?'block' : 'none'}} className={css(Style.productWeightFishBlock)}>
            <span className={css((price.weightFish && price.weightFish.size==="s")?Style.productWeightFishSpanChecked :Style.productWeightFishSpan)}>S</span>
            <span className={css((price.weightFish && price.weightFish.size==="m")?Style.productWeightFishSpanChecked :Style.productWeightFishSpan)}>M</span>
            <span className={css((price.weightFish && price.weightFish.size==="l")?Style.productWeightFishSpanChecked :Style.productWeightFishSpan)}>L</span>
        </div>
    );
};
const productWeightFishSpan ={
    fontFamily: [FuturaFont, "sans-serif"],
    fontSize: '16px',
    width:'14px',
    height:'21px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textAlign: 'left',
    cursor:'pointer'
};
const Style = StyleSheet.create({
    productWeightFishBlock:{
        position:'absolute',
        top:'0',
        left:'0',
        zIndex:'1'
    },
    productWeightFishSpanChecked: {
        ...productWeightFishSpan,
        display:'inline',
        color: '#ff565c',
        border: 'solid 1px #ff565c;'
    },
    productWeightFishSpan: {
        ...productWeightFishSpan,
        color: '#c3c8d1',
        border: 'solid 1px #c3c8d1'

    },
   
});

export default ProductWeight;
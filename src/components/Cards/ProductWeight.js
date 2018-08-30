
import React from 'react';

import {css, StyleSheet} from "aphrodite/no-important";
import {FuturaFont} from "../../css/Fonts";


const ProductWeight = (props) =>  {
    let {price} = props;
    return (
        <div style={{display: (price.weightFish)?'table' : 'none'}} className={css(Style.productWeightFishBlock)}>
            <div className={css((price.weightFish && price.weightFish.size==="s")?Style.productWeightFishSpanChecked :Style.productWeightFishSpan)}>S</div>
            <div className={css((price.weightFish && price.weightFish.size==="m")?[Style.productWeightFishSpanChecked] :Style.productWeightFishSpan)}>M</div>
            <div className={css((price.weightFish && price.weightFish.size==="l")?Style.productWeightFishSpanChecked :Style.productWeightFishSpan)}>L</div>
        </div>
    );
};
const productWeightFishSpan ={
    fontFamily: [FuturaFont, "sans-serif"],
    display:'table-cell',
    fontSize: '16px',
    width:'14px',
    fontWeight: '500',
    padding:'0',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    verticalAlign: "middle",
    textAlign: "center",
    cursor:'pointer'
};
const Style = StyleSheet.create({
    productWeightFishBlock:{
        position:'absolute',
        height:'21px',
        top:'0',
        left:'0',
        zIndex:'1',
        borderCollapse:'collapse'

    },
    productWeightFishSpanChecked: {
        ...productWeightFishSpan,
        //display:'inline',
        color: '#ff565c',
        border: 'double 1px #ff565c;'
    },
    productWeightFishSpan: {
        ...productWeightFishSpan,
        color: '#c3c8d1',
        border: 'solid 1px #c3c8d1'

    },
   
});

export default ProductWeight;
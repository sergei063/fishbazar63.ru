
import React from 'react';

import {css} from "aphrodite/no-important";
import ProductWeightStyle from "./css/ProductWeightStyle";


const ProductWeight = (props) =>  {
    let {price} = props;
    return (
        <div style={{display: (price.weightFish)?'block' : 'none'}} className={css(ProductWeightStyle.productWeightFishBlock)}>
            <span className={css((price.weightFish && price.weightFish.size==="s")?ProductWeightStyle.productWeightFishSpanChecked :ProductWeightStyle.productWeightFishSpan)}>S</span>
            <span className={css((price.weightFish && price.weightFish.size==="m")?ProductWeightStyle.productWeightFishSpanChecked :ProductWeightStyle.productWeightFishSpan)}>M</span>
            <span className={css((price.weightFish && price.weightFish.size==="l")?ProductWeightStyle.productWeightFishSpanChecked :ProductWeightStyle.productWeightFishSpan)}>L</span>
        </div>
    );
}

export default ProductWeight;
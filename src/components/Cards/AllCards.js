import React from 'react';

import {css} from "aphrodite/no-important";
import Card from "./Card";
import CardStyle from "./css/CardStyle";
import AddFishCard from "./AddFishCard";

const AllCards = (props) => {
    let {items,isShowAddFish} = props;

    let Style = Object.assign({}, CardStyle,props.inStyle);

    if (!items || items.length===0) {
        return (<div></div>)
    }

    return (
        <ul className={css(Style.ul)}>
            {
                items.map((p, index) => (
                    (p) && <Card key={index} p={p} isShowAddFish={isShowAddFish} inStyle={Style}/>
                    )
                )
            }
            {isShowAddFish && <AddFishCard/>}
        </ul>
    );
};

export default AllCards;
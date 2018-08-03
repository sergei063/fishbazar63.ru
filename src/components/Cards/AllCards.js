import React from 'react';

import {css} from "aphrodite/no-important";
import Card from "./Card";
import CardStyle from "./css/CardStyle";

const AllCards = (props) => {
    let {items} = props;

    let Style = Object.assign({}, CardStyle,props.inStyle);
    return (
        <ul className={css(Style.ul)}>
            {
                items.map((p, index) => (
                        <Card key={index} p={p} inStyle={Style}/>
                    )
                )
            }
        </ul>
    );
};

export default AllCards;
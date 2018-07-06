import React from 'react';

import {css} from "aphrodite/no-important";
import Card from "./Card";
import CardStyle from "./css/CardStyle";

const AllCards = (props) => {
    let {items} = props;
    return (
        <ul className={css(CardStyle.ul)}>
            {
                items.map((p, index) => (
                        <Card key={index} p={p}/>
                    )
                )
            }
        </ul>
    );
}

export default AllCards;
import React from 'react';
import {Link} from 'react-router-dom'
import {css} from "aphrodite/no-important";
import ProductWeight from "./ProductWeight";
import CardStyle from "./css/CardStyle";


const AddFishCard = (props) =>  {
    let {key} = props;

    let Style = CardStyle;
    return (
        <li className={css(Style.li)} key={key}>

            <Link className={css(Style.card)} to={`/production/add`}>
                <div className={css(Style.productPhoto)}>
                    <span className={css(Style.productPhotoImg)}>+</span>
                </div>

                <div className={css(Style.productNameDiv)}>

                    <div className={css(Style.productName)}>Добавить продукцию</div>
                    <div className={css(Style.productPrice)}>
                        <b></b>
                        &nbsp;<small><nobr></nobr></small>
                    </div>
                    <div className={css(Style.productWeightFish)}>
                        
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default AddFishCard;
import React from 'react';
import {Link} from 'react-router-dom'
import {css} from "aphrodite/no-important";
import ProductWeight from "./ProductWeight";
import SeafoodItemStyle from "../../pages/Seafood/SeafoodItemStyle";
import config from "../../config";
import {_try} from "../lib";


const Card = (props) =>  {
    let {p,isShowAddFish} = props;
    let imgFile = null
    try {
        imgFile = config.imgRequire(p.img)
    } catch (e) {
    }

    let Style = Object.assign({}, props.inStyle);
    return (
        <li className={css(Style.li)} key={p.id}>
            <ProductWeight price={p}/>
            <div className={(p.hit)?css(Style.pouchHit):css(Style.displayNone)}><div>хит</div></div>

            <Link className={css(Style.card)} to={`/production/${p.id}`}>
                <div className={css(Style.productPhoto)}>
                    <img className={css(Style.productPhotoImg)}
                         src={imgFile} alt={p.info}></img>
                </div>


                <div className={css(Style.productNameDiv)}>

                    <div className={css(Style.productName)} dangerouslySetInnerHTML={{__html: p.showCaseName||""}}></div>
                    <div className={css(Style.productPrice)}>
                        <b>{p.price}</b>
                        &nbsp;<small><nobr>руб/кг</nobr></small>
                    </div>
                    <div className={css(Style.productWeightFish)}>
                        {(p.weightFish && p.weightFish.help)? `Вес одной рыбы - ${p.weightFish.help}` :''}
                    </div>
                </div>
            </Link>
            {isShowAddFish && <Link className={css(SeafoodItemStyle.link)} to={`/production/change/${p.id}`}>Изменить</Link>}

        </li>
    );
};

export default Card;
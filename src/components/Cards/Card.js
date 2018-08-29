import React from 'react';
import {Link} from 'react-router-dom'
import {css} from "aphrodite/no-important";
import ProductWeight from "./ProductWeight";


const Card = (props) =>  {
    let {p} = props;

    let Style = Object.assign({}, props.inStyle);
    return (
        <li className={css(Style.li)} key={p.id}>
            <ProductWeight price={p}/>
            <div className={(p.hit)?css(Style.pouchHit):css(Style.displayNone)}><div>хит</div></div>

            <Link className={css(Style.card)} to={`/production/${p.id}`}>
                <div className={css(Style.productPhoto)}>
                    <img className={css(Style.productPhotoImg)}
                         src={p.img} alt={p.info}></img>
                </div>

                <div className={css(Style.productNameDiv)}>

                    <div className={css(Style.productName)} dangerouslySetInnerHTML={{__html: p.showCaseName||""}}></div>
                    <div className={css(Style.productPrice)}>
                        <b>{p.price}</b>
                        <small><nobr>руб/кг</nobr></small>
                    </div>
                    <div className={css(Style.productWeightFish)}>
                        {(p.weightFish)? "Вес одной рыбы - "+p.weightFish.help:""}
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default Card;
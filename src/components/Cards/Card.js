import React from 'react';
import {Link} from 'react-router-dom'
import {css} from "aphrodite/no-important";
import ProductWeight from "./ProductWeight";
import CardStyle from "./css/CardStyle";



const Card = (props) =>  {
    let {p} = props;
    return (
        <li className={css(CardStyle.li)} key={p.id}>
            <ProductWeight price={p}/>
            <div className={(p.hit)?css(CardStyle.pouchHit):css(CardStyle.displayNone)}><div>хит</div></div>

            <Link className={css(CardStyle.card)} to={`/production/${p.id}`}>
                <div className={css(CardStyle.productPhoto)}>
                    <img className={css(CardStyle.productPhotoImg)}
                         src={p.img} alt={p.info}></img>
                </div>

                <div className={css(CardStyle.productNameDiv)}>

                    <div className={css(CardStyle.productName)} dangerouslySetInnerHTML={{__html: p.showCaseName||""}}></div>
                    <div className={css(CardStyle.productPrice)}>
                        <b>{p.price}</b>
                        <small><nobr>руб/кг</nobr></small>
                    </div>
                    <div className={css(CardStyle.productWeightFish)}>
                        {(p.weightFish)? "Вес одной рыбы - "+p.weightFish.help:""}
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default Card;
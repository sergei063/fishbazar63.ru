import React from 'react';
import {Link} from 'react-router-dom'
import {css} from "aphrodite/no-important";
import ProductWeight from "./ProductWeight";
import SeafoodItemStyle from "../../pages/Seafood/SeafoodItemStyle";


const Card = (props) =>  {
    let {p,isShowAddFish} = props;

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
                        &nbsp;<small><nobr>руб/кг</nobr></small>
                    </div>
                    <div className={css(Style.productWeightFish)}>
                        {(p.weightFish)? `Вес одной рыбы - ${p.weightFish.help}` : (p.weightOfOneFish) && `Вес одной рыбы - ${p.weightOfOneFish} кг`}
                    </div>
                </div>
            </Link>
            {isShowAddFish && <Link className={css(SeafoodItemStyle.link)} to={`/production/change/${p.id}`}>Изменить</Link>}

        </li>
    );
};

export default Card;
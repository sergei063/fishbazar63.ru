/*  eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';
/*  eslint-enable no-unused-vars  */
import {css} from 'aphrodite/no-important';
import _ from 'lodash/core';
import CardStyle from './css/CardStyle';

const AddFishCard = () => {
  const Style = CardStyle;
  return (
    <li className={css(Style.li)} key={_.uniqueId('add_fishcard_')}>
      <Link className={css(Style.card)} to={'/production/add'}>
        <div className={css(Style.productPhoto)}>
          <span className={css(Style.productPhotoImg)}>+</span>
        </div>

        <div className={css(Style.productNameDiv)}>
          <div className={css(Style.productName)}>Добавить продукцию</div>
          <div className={css(Style.productPrice)}>
            <b />
            &nbsp;
            <small>
              <nobr />
            </small>
          </div>
          <div className={css(Style.productWeightFish)} />
        </div>
      </Link>
    </li>
  );
};

export default AddFishCard;

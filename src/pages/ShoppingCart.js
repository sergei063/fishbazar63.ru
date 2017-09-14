import React from 'react';


import {  HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import HomeStyle from '../css/HomeStyle';

import Katalog from '../Katalog';

const ShoppingCart = (props) => {
    return( <div>
            {Katalog.getShoppingCart().map(p => (
            <li className={css(HomeStyle.li)} key={p.id}>
                <Link className = {css(HomeStyle.card)} to={`/production/${p.id}`}>
                    <div className = {css(HomeStyle.productPhoto)} >
                        <img className={css(HomeStyle.productPhotoImg)} src={require('../img/katalog/keta.jpg')} alt=""></img>
                    </div>
                    <div  className = {css(HomeStyle.productNameDiv)}>
                        <span  className = {css(HomeStyle.productName)}>{p.showCaseName}({p.count} кг)</span>
                        <br/>
                        <span className = {css(HomeStyle.productPrice)} >
									<b>{p.price}</b>
									<small>руб/кг</small>
                                    <b> Итого {p.price*p.count}</b>
									<small>руб</small>
								</span>
                    </div>
                </Link>
            </li>
            ))}
        </div>
    )}
export default ShoppingCart;
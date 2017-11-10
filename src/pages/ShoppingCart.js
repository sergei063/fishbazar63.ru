import React from 'react';
import {HashRouter, Switch, Route,Redirect, Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';
import createHistory from 'history/createBrowserHistory'
import ProductionStyle from '../css/ProductionStyle';
import AppStyle from '../css/AppStyle';
import Katalog from '../Katalog';
import ShoppingCartStyle from '../css/ShoppingCartStyle';

const history = createHistory();

const ShoppingCart = (props) => {
    let catalog = Katalog.getShoppingCart();
    if ((catalog == null) || (catalog.length == 0)) {
        return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
    }
    let totalSum=0;
    let i = 0;
    return ( <div className={css(ProductionStyle.productCnt,ProductionStyle.text)}>

            <table className={css(ShoppingCartStyle.table)} >
                <tbody>
                <tr>
                    <td width="50%"></td>
                    <td width="50%"></td>
                </tr>

            {catalog.map(p => {
                totalSum += (p.packaging!="шт")?(p.price * p.count):0;
                i++;
                return(
                <tr id={p.id} key={p.id}  className={css((i&1)?ShoppingCartStyle.row:ShoppingCartStyle.rowOdd)}>
                    <td><img src={p.img}  className={css(ShoppingCartStyle.img)}/></td>


                    <td  className={css(AppStyle.textAlignLeft)}><Link to={`/production/${p.id}`}>
                        <div>{p.showCaseName}</div>
                        <div  className={css(AppStyle.textAlignLeft)}>{p.count} {p.packaging}</div>
                        <div  className={css(AppStyle.textAlignLeft)}>{p.price} руб/кг</div></Link>
                    </td>
                </tr>

            )

            })}
                </tbody>
            </table>
            <br/>
            <br/>
            <span onClick={() => {Katalog.clearShoppingCart(); props.history.push({pathname: '/shopping_cart'}) }} className={css(AppStyle.button)}>Очистить корзину</span>
            <br/><br/><br/>
        </div>
    )
}
export default ShoppingCart;
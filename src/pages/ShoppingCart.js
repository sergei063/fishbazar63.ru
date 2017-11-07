import React from 'react';
import {HashRouter, Switch, Route,Redirect, Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';
import createHistory from 'history/createBrowserHistory'
import ProductionStyle from '../css/ProductionStyle';
import AppStyle from '../css/AppStyle';
import Katalog from '../Katalog';

const history = createHistory();

const ShoppingCart = (props) => {
    let catalog = Katalog.getShoppingCart();
    if ((catalog == null) || (catalog.length == 0)) {
        return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
    }
    let totalSum=0;
    return ( <div className={css(ProductionStyle.productCnt,ProductionStyle.text)}>

            <table>
                <tbody>
                <tr>
                    <td>Наименование</td>
                    <td>Количество</td>
                    <td>Цена</td>
                    <td>Стоимость</td>
                    <td>&nbsp;</td>
                </tr>

            {catalog.map(p => {
                totalSum +=(p.price * p.count);
                return(
                <tr id={p.id} key={p.id}>
                    <td><Link to={`/production/${p.id}`}>{p.showCaseName}</Link></td>
                    <td>{p.count} кг</td>
                    <td>{p.price} руб/кг </td>
                    <td>{p.price * p.count} руб</td>
                    <td>&nbsp;</td>
                </tr>
            )})}
                <tr >
                    <td colSpan={2}>Итого</td>
                    <td colSpan={2} className={css(AppStyle.right_text)}>{totalSum} руб</td>
                </tr>
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
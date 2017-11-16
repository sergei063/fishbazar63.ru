import React from 'react';
import {HashRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';
import createHistory from 'history/createBrowserHistory'
import ProductionStyle from '../css/ProductionStyle';
import AppStyle from '../css/AppStyle';
import Katalog from '../Katalog';
import ShoppingCartStyle from '../css/ShoppingCartStyle';
import $ from 'jquery'

const history = createHistory();

const deleteClick = (props, id) => {
    Katalog.deleteShoppingCart(id);
    props.history.push({pathname: `/shopping_cart/`})
    //shopping_cart
}

const jsonpCallback = () => {
    alert("Спасибо, Ваш заказ отправлен в службу доставки! С Вами свяжутся в ближайшее время")
};

const buyClick = () => {
    var name = prompt('Введите Ваше имя и номер телефона для связи');

    if (!name) {
        return;
    }
    const catalog = Katalog.getShoppingCart();
    let msg = name + " сделал заказ:\n";
    catalog.map(p => {
        // totalSum += (p.packaging!="шт")?(p.price * p.count):0;
        msg += " " + p.name + " (" + p.count + " " + p.packaging + ") по " + p.price + " руб/кг\n";



    })
    $.getJSON( "https://api.telegram.org/bot274564744:AAEGwFztcyAHcXcuNNR6ZzwiXoY4eY-nXCM/sendMessage?text=<code>" + encodeURI(msg) + "</code>&parse_mode=HTML&chat_id=102407893");
    $.getJSON( "https://api.telegram.org/bot274564744:AAEGwFztcyAHcXcuNNR6ZzwiXoY4eY-nXCM/sendMessage?text=<code>" + encodeURI(msg) + "</code>&parse_mode=HTML&chat_id=92139864", jsonpCallback);

}

const ShoppingCart = (props) => {
    let catalog = Katalog.getShoppingCart();
    if ((catalog == null) || (catalog.length == 0)) {
        return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
    }
    let totalSum = 0;
    let i = 0;
    return ( <div className={css(ProductionStyle.productCnt, ProductionStyle.text)}>

            <table className={css(ShoppingCartStyle.table)}>
                <tbody>
                <tr>
                    <td className={css(ShoppingCartStyle.tdPhoto)}></td>
                    <td></td>
                    <td></td>
                </tr>

                {catalog.map(p => {
                    totalSum += (p.packaging != "шт") ? (p.price * p.count) : 0;
                    i++;
                    return (
                        <tr id={p.id} key={p.id}
                            className={css((i & 1) ? ShoppingCartStyle.row : ShoppingCartStyle.rowOdd)}>
                            <td><Link to={`/production/${p.id}`}><img src={p.img}
                                                                      className={css(ShoppingCartStyle.img)}/></Link>
                            </td>


                            <td className={css(AppStyle.textAlignLeft)}><Link to={`/production/${p.id}`}>
                                <div>{p.showCaseName}</div>
                                <div className={css(AppStyle.textAlignLeft)}>{p.count} {p.packaging}</div>
                                <div className={css(AppStyle.textAlignLeft)}>{p.price} руб/кг</div>
                            </Link>
                            </td>
                            <td className={css(AppStyle.textAlignRigh, AppStyle.paddingRight15, ShoppingCartStyle.tdDeleteButton)}>
                                <button onClick={() => {
                                    deleteClick(props, p.id)
                                }} className={css(ShoppingCartStyle.delete_button, AppStyle.delete_button)}></button>

                            </td>
                        </tr>

                    )

                })}
                </tbody>
            </table>
            <br/>
            <br/>
            <span onClick={() => {
                Katalog.clearShoppingCart();
                props.history.push({pathname: '/shopping_cart'})
            }} className={css(AppStyle.button)}>Очистить&nbsp;корзину</span>
            &nbsp;
            <span onClick={() => {
                buyClick()
            }} className={css(AppStyle.buttonBlue)}>Оформить&nbsp;заказ</span>
            <br/><br/><br/>
        </div>
    )
}
export default ShoppingCart;
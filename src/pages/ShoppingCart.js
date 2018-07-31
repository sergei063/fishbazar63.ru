import React from 'react';
import {HashRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';
import createHistory from 'history/createBrowserHistory'
import ProductionStyle from '../css/ProductionStyle';
import AppStyle from '../css/AppStyle';
import Katalog from '../Katalog';
import ShoppingCartStyle from '../css/ShoppingCartStyle';
import $ from 'jquery'
import Counter from "../components/Counter/Counter";
import Iinfo from "../components/Iinfo/Iinfo";
import DeliveryStyle from "./Delivery/DeliveryStyle";
import SeafoodItemStyle from "./Seafood/SeafoodItemStyle";
import AllSeafood from "./Seafood/AllSeafood";
import SeafoodItem from "./Seafood/SeafoodItem";
import PlaceOfDelivery from "../components/PlaceOfDelivery/PlaceOfDelivery";
import ShoppingCartList from "../containers/ShoppingCart/ShoppingCartList";
import {connect} from "react-redux";

const ShoppingCart = (props) => {
    return (
        <Switch>
            <Route exact path='/shopping_cart' params={props} component={connect(mapStateToProps)(Basket)}/>
            <Route path='/shopping_cart/:num' params={props} component={BasketConfirmed}/>
        </Switch>
    )
}




const Basket = (props) => {
    if (props.seafoodShoppingCart.totalCost < 1) {
        return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
    }

    return (<div className={css(ShoppingCartStyle.productCnt)}>

            <div className={css(ShoppingCartStyle.h1)}>Корзина</div>
            <br/>
            <br/>
            <br/>
            <ShoppingCartList history={props.history}/>
            <br/><br/><br/>

            <div className={css(ShoppingCartStyle.h1)}>Доставка</div>
            <PlaceOfDelivery/>

            <div className={css(ShoppingCartStyle.divTable)}>
                <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                    <div className={css(ShoppingCartStyle.divTableCell)}><Iinfo/></div>
                    <div className={css(ShoppingCartStyle.divTableCell)}
                         style={{lineHeight: '1', width: '189px', verticalAlign: 'middle'}}>Для бесплатной
                        доставки введите номер купона
                    </div>
                    <div className={css(ShoppingCartStyle.divTableCell)}><input placeholder={'номер купона'}
                                                                                className={css(ShoppingCartStyle.input)}/>
                    </div>
                    <div className={css(ShoppingCartStyle.divTableCell)}>
                        <button onClick={() => {

                        }} style={{width: '144px'}} className={css(AppStyle.buttonGrey)}>Применить
                        </button>
                    </div>
                </div>
            </div>
            <div style={{height: '36px'}}></div>
            <div className={css(ShoppingCartStyle.totalText)}>Итоговая сумма: <span
                className={css(ShoppingCartStyle.price)}><nobr>{props.seafoodShoppingCart.totalCost+props.placeOfDelivery.price} руб</nobr></span>
            </div>

            <div style={{height: '73px'}}></div>
            <div className={css(ShoppingCartStyle.h1)}>Информация для доставки</div>
            <div style={{height: '39px'}}></div>


            <div className={css(ShoppingCartStyle.deliveryInfo)}>
                <div><img src={require('../img/design/deliveryman/deliveryman.png')}
                          srcSet={`${require('../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../img/design/deliveryman/deliveryman3x.png')} 3x`}
                          width='264px' height='205px'></img></div>
                <div>
                    <input placeholder={'Ваше Имя'}
                           className={css(ShoppingCartStyle.input)} style={{width: '304px'}}/>
                    <div style={{height: '24px'}}></div>
                    <input placeholder={'Телефон'}
                           className={css(ShoppingCartStyle.input)} style={{width: '304px'}}/>
                    <div style={{height: '24px'}}></div>
                    <input placeholder={'Улица, номер дома и квартиры'}
                           className={css(ShoppingCartStyle.input)} style={{width: '304px'}}/>
                    <div style={{height: '28px'}}></div>
                    <button onClick={() => {
                        //console.log(this.placeOfDeliveryRef.current.state)
                        props.history.push({pathname: `/shopping_cart/ok`})
                    }} style={{width: '324px'}} className={css(AppStyle.buttonRed)}>Оформить заказ
                    </button>
                    <div style={{height: '156px'}}></div>

                </div>
            </div>
        </div>
    )
}


const BasketConfirmed = (props) => {

    return (<div className={css(ShoppingCartStyle.productCnt)}>


            <div className={css(ShoppingCartStyle.deliveryInfo)}>

                <div><img src={require('../img/design/deliveryman/deliveryman.png')}
                          srcSet={`${require('../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../img/design/deliveryman/deliveryman3x.png')} 3x`}
                          width='264px' height='205px'></img></div>
                <div>
                    <div className={css(ShoppingCartStyle.h1)} style={{textAlign: 'left', marginLeft: '0'}}>Готово!
                    </div>
                    <div style={{height: '33px'}}></div>
                    <div className={css(ShoppingCartStyle.confirmedText)}>Ваш заказ в обработке, мы перезвоним вам в
                        течение часа, чтобы узнать когда отправить курьера с морепродуктами
                    </div>
                </div>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => ({seafoodShoppingCart: state.seafoodShoppingCart, placeOfDelivery: state.placeOfDelivery});

export default connect(mapStateToProps)(ShoppingCart);

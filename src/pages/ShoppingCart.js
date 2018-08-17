import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {css} from 'aphrodite/no-important';
import ProductionStyle from '../css/ProductionStyle';
import AppStyle from '../css/AppStyle';
import ShoppingCartStyle from '../css/ShoppingCartStyle';
import Iinfo from "../components/Iinfo/Iinfo";
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
};




const Basket = (props) => {
    if (props.seafoodShoppingCart.totalCost < 1) {
        return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
    }

    return (
        <div className={css(ShoppingCartStyle.cnt)}>
            <div className={css(ShoppingCartStyle.cntArea)}></div>
            <div className={css(ShoppingCartStyle.productCnt)}>

                <div className={css(ShoppingCartStyle.h1)}>Корзина</div>
                <br/>
                <br/>
                <br/>
                <ShoppingCartList history={props.history}/>
                <br/><br/><br/>

                <div className={css(ShoppingCartStyle.h1)}>Доставка</div>
                <PlaceOfDelivery/>

                <div className={css(ShoppingCartStyle.coupon)}>
                    <div className={css(ShoppingCartStyle.couponInfoIcon)}><Iinfo/></div>
                    <div className={css(ShoppingCartStyle.couponInfotext)}>Для бесплатной доставки введите номер купона</div>
                    <div className={css(ShoppingCartStyle.couponInfoNum)}><input placeholder={'номер купона'} className={css(ShoppingCartStyle.input)}/></div>
                    <div>
                        <button onClick={() => {

                        }} style={{width: '144px'}} className={css(AppStyle.buttonGrey)}>Применить
                        </button>
                    </div>
                </div>

                <div style={{height: '36px'}}></div>
                <div className={css(ShoppingCartStyle.totalText)}>Итоговая сумма: <span
                    className={css(ShoppingCartStyle.price)}><nobr>{props.seafoodShoppingCart.totalCost + props.placeOfDelivery.price} руб</nobr></span>
                </div>

                <div style={{height: '73px'}}></div>
                <div className={css(ShoppingCartStyle.h1)}>Информация для доставки</div>
                <div style={{height: '39px'}}></div>


                <div className={css(ShoppingCartStyle.deliveryInfo)}>
                    <div className={css(ShoppingCartStyle.deliveryMan)}><img
                        src={require('../img/design/deliveryman/deliveryman.png')}
                        srcSet={`${require('../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../img/design/deliveryman/deliveryman3x.png')} 3x`}
                        width='264px' height='205px'></img>
                    </div>
                    <div className={css(ShoppingCartStyle.deliveryInfoInputDiv)}>
                        <input placeholder={'Ваше Имя'}
                               className={css(ShoppingCartStyle.input)} style={{width: '90%'}}/>
                        <div style={{height: '24px'}}></div>
                        <input placeholder={'Телефон'}
                               className={css(ShoppingCartStyle.input)} style={{width: '90%'}}/>
                        <div style={{height: '24px'}}></div>
                        <input placeholder={'Улица, номер дома и квартиры'}
                               className={css(ShoppingCartStyle.input)} style={{width: '90%'}}/>
                        <div style={{height: '28px'}}></div>
                        <button onClick={() => {
                            //console.log(this.placeOfDeliveryRef.current.state)
                            props.history.push({pathname: `/shopping_cart/ok`})
                        }} style={{width: '100%'}} className={css(AppStyle.buttonRed)}>Оформить заказ
                        </button>
                        <div style={{height: '156px'}}></div>

                    </div>
                </div>
            </div>
        </div>
    )
};


const BasketConfirmed = (props) => {

    return (
        <div className={css(ShoppingCartStyle.cnt)}>
            <div className={css(ShoppingCartStyle.cntAreaConfirmed)}></div>
            <div className={css(ShoppingCartStyle.productCnt)}>


                <div className={css(ShoppingCartStyle.deliveryInfo)}>

                    <div><img src={require('../img/design/deliveryman/deliveryman.png')}
                              srcSet={`${require('../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../img/design/deliveryman/deliveryman3x.png')} 3x`}
                              width='264px' height='205px'></img></div>
                    <div  style={{height:'53px'}} className={css(ShoppingCartStyle.mobileShow)}></div>
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
            <div className={css(ShoppingCartStyle.cntAreaConfirmed)}></div>
        </div>
    )
};


const mapStateToProps = (state) => ({seafoodShoppingCart: state.seafoodShoppingCart, placeOfDelivery: state.placeOfDelivery});

export default connect(mapStateToProps)(ShoppingCart);

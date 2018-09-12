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
import InputTextBox from "../components/InputTextBox/InputTextBox";

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
    let nameInput = React.createRef();
    let phoneNumber = React.createRef();
    let address = React.createRef();
    let placeOfDeliveryRef = React.createRef();
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

                <div  style={{    marginBottom: '15px'}} className={css(ShoppingCartStyle.h1)}>Доставка</div>
                <PlaceOfDelivery ref={placeOfDeliveryRef}/>

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
                    className={css(ShoppingCartStyle.price)}><nobr>{(props.seafoodShoppingCart.totalCost + props.placeOfDelivery.price).toFixed(0)} руб</nobr></span>
                </div>

                <div style={{height: '73px'}}></div>
                <div className={css(ShoppingCartStyle.h1)}>Информация для доставки</div>
                <div style={{height: '59px'}}></div>


                <div className={css(ShoppingCartStyle.deliveryInfo)}>
                    <div className={css(ShoppingCartStyle.deliveryMan)}><img
                        src={require('../img/design/deliveryman/deliveryman.png')}
                        srcSet={`${require('../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../img/design/deliveryman/deliveryman3x.png')} 3x`}
                        width='264px' height='205px'></img>
                    </div>
                    <div className={css(ShoppingCartStyle.deliveryInfoInputDiv)}>
                        <div className={css(ShoppingCartStyle.inputDiv)}>
                            <InputTextBox ref={nameInput} id={'name'} placeholder={'Ваше Имя'}/>
                        </div>


                        <div className={css(ShoppingCartStyle.inputDiv)}>
                            <InputTextBox ref={phoneNumber}  id={'phoneNumber'} placeholder={'Телефон'}/>
                        </div>
                        <div className={css(ShoppingCartStyle.inputDiv)}>
                            <InputTextBox ref={address}  id={'address'} placeholder={'Улица, номер дома и квартиры'}/>
                        </div>

                        <button onClick={() => {
                            if (placeOfDeliveryRef.current.wrappedInstance.validate()
                                & nameInput.current.validate()
                                & phoneNumber.current.validate()
                                & address.current.validate()
                            ) {
                                props.history.push({pathname: `/shopping_cart/ok`})
                            }

                        }} style={{width: '95%'}} className={css(AppStyle.buttonRed)}>Оформить заказ
                        </button>


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

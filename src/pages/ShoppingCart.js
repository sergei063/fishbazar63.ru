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

const history = createHistory();

const deleteClick = (props, id) => {
    Katalog.deleteShoppingCart(id);
    props.history.push({pathname: `/shopping_cart/`})
    //shopping_cart
}

const jsonpCallback = (data) => {


};

const buyClick = () => {
    var name = prompt('Введите Ваше имя и номер телефона для связи');

    if (!name) {
        return;
    }
    const catalog = Katalog.getShoppingCart();
    let msg = `${name} сделал заказ:
`;
    catalog.map(p => {
        // totalSum += (p.packaging!="шт")?(p.price * p.count):0;
        msg += ` ${p.name} (${p.count} ${p.packaging}) по ${p.price} руб/кг
`;


    })
    //$.getJSON( "https://api.telegram.org/bot274564744:AAEGwFztcyAHcXcuNNR6ZzwiXoY4eY-nXCM/sendMessage?text=<code>" + encodeURI(msg) + "</code>&parse_mode=HTML&chat_id=102407893");
    //$.getJSON( "https://api.telegram.org/bot274564744:AAEGwFztcyAHcXcuNNR6ZzwiXoY4eY-nXCM/sendMessage?text=<code>" + encodeURI(msg) + "</code>&parse_mode=HTML&chat_id=92139864", jsonpCallback);
    //$.getJSON( "https://sms.ru/sms/send?api_id=168c57ab-ca50-0e64-8dac-5e7f5106bcc9&to=79277172111,79879531011&json=1&test=1&msg=" + encodeURI(msg), jsonpCallback);
    //$.getJSON( "https://sms.ru/sms/send?api_id=168c57ab-ca50-0e64-8dac-5e7f5106bcc9&to=79879531011&json=1&test=1&msg=" + encodeURI(msg), jsonpCallback);
    $.ajax({
        url: `https://sms.ru/sms/send?api_id=168c57ab-ca50-0e64-8dac-5e7f5106bcc9&to=79277172111&json=1&msg=${encodeURI(msg)}`,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        success: function (data) {
            /*
             if (data.status_code === 100) {
                 alert("Спасибо, Ваш заказ отправлен в службу доставки! С Вами свяжутся в ближайшее время")
             } else {
                 alert("Произошла ошибка: Нет связи с администраторром! Пожалуйста свяжитесь с нами +79277172111")
             }*/
        },
        error: function (jqXHR, textStatus, errorThrown) {


        },
        complete: function (jqXHR, textStatus) {
            alert("Спасибо, Ваш заказ отправлен в службу доставки! С Вами свяжутся в ближайшее время")

        }
    });


}
const calbackFn = (id) => {
    let fish = Katalog.get(id);
    let count = $(`#fishNum_${id}`);
    let countFish = Number.parseInt(count[0].value);
    Katalog.addShoppingCart(fish, countFish);
}

const delivery = [
    {"where": "г.Новокуйбышевск", price: '70 руб'},
    {"where": "п.Гранный ", price: '70 руб'},
    {"where": "г. Самара ", price: '150 руб'},
    {"where": "Сухая Самарка", price: '100 руб'},
    {"where": "Жилой район Волгарь", price: '100 руб'},
    {"where": "116км.", price: '100 руб'}
];

const ShoppingCart = (props) => (
    <Switch>
        <Route exact path='/shopping_cart' component={Basket}/>
        <Route path='/shopping_cart/:num' params={props} component={BasketConfirmed}/>
    </Switch>
)


const Basket = (props) => {
    let catalog = Katalog.getShoppingCart();
    if ((catalog == null) || (catalog.length == 0)) {
        return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
    }
    let totalSum = 0;
    let i = 0;
    let k = 0;
    return (<div className={css(ShoppingCartStyle.productCnt)}>

            <div className={css(ShoppingCartStyle.h1)}>Корзина</div>
            <br/>
            <br/>
            <br/>
            <div className={css(ShoppingCartStyle.divTable)}>
                <div className={css(ShoppingCartStyle.divTableBody)}>
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Товар</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Цена</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Кол-во</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Cтоимость</div>
                    </div>
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                    </div>

                    {catalog.map(p => {
                        totalSum += (p.packaging != "шт") ? (p.price * p.count) : 0;
                        i++;
                        return (
                            <div id={p.id} key={p.id}
                                 className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowText)}>
                                <div className={css(ShoppingCartStyle.divTableCell)}>{p.showCaseName}</div>
                                <div className={css(ShoppingCartStyle.divTableCell)}>{p.price} руб/кг</div>
                                <div className={css(ShoppingCartStyle.divTableCell)}>
                                    <Counter id={`fishNum_${p.id}`} counter={p.count} packaging={p.packaging}
                                             calbackFn={() => {
                                                 calbackFn(p.id)
                                             }}/>
                                </div>
                                <div className={css(ShoppingCartStyle.divTableCell)}><span
                                    className={css(ShoppingCartStyle.price)}><nobr>333 руб</nobr></span></div>
                            </div>

                        )
                    })}
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
                    </div>

                </div>
            </div>
            <br/><br/><br/>

            <div className={css(ShoppingCartStyle.h1)}>Доставка</div>
            <div className={css(ShoppingCartStyle.divTable)}>
                <div className={css(ShoppingCartStyle.divTableBody)}>
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Выберите место доставки</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Стоимость</div>
                    </div>


                    {delivery.map(p => {
                        k++;
                        return (
                            <div key={k} className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowText)}>
                                <div className={css(ShoppingCartStyle.divTableCell)}><input type="radio"
                                                                                            name="optradio"></input> {p.where}
                                </div>
                                <div className={css(ShoppingCartStyle.divTableCell)}>{p.price}</div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className={css(ShoppingCartStyle.divTable)}>
                <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                    <div className={css(ShoppingCartStyle.divTableCell)}><Iinfo/></div>
                    <div className={css(ShoppingCartStyle.divTableCell)}
                         style={{lineHeight: '1',width:'189px',verticalAlign:'middle'}} >Для бесплатной доставки введите номер купона
                    </div>
                    <div className={css(ShoppingCartStyle.divTableCell)} ><input placeholder={'номер купона'}
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
                className={css(ShoppingCartStyle.price)}><nobr>333 руб</nobr></span></div>

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
                    <div className={css(ShoppingCartStyle.h1)} style={{textAlign:'left', marginLeft:'0'}}>Готово!</div>
                    <div style={{height: '33px'}}></div>
                    <div className={css(ShoppingCartStyle.confirmedText)}>Ваш заказ в обработке, мы перезвоним вам в течение часа, чтобы узнать когда отправить курьера с морепродуктами</div>
                </div>
            </div>

        </div>
    )
}


const ShoppingCartOld = (props) => {
    let catalog = Katalog.getShoppingCart();
    if ((catalog == null) || (catalog.length == 0)) {
        return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
    }
    let totalSum = 0;
    let i = 0;
    return (<div className={css(ProductionStyle.productCnt, ProductionStyle.text)}>

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
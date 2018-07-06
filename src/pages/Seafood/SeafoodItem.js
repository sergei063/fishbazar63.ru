import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import Katalog from "../../Katalog";
import {css} from "aphrodite/no-important";
import SeafoodItemStyle from "./SeafoodItemStyle";
import DeliveryStyle from "../Delivery/DeliveryStyle";
import AppStyle from "../../css/AppStyle";
import $ from "jquery";
import ProductionStyle from "../../css/ProductionStyle";


const BreadCrumbs = (props) => {
    console.log(props.item)


    return (
        <div>
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/production', state: {filter: null}});
                /*this.scrollToProductuionContainer(); */
            }} className={css(SeafoodItemStyle.link)} to='/production'>Морепродукты</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/production', state: {filter: props.item.parent.id}});
                /*this.scrollToProductuionContainer(); */
            }} className={css(SeafoodItemStyle.link)} to='/production'>{props.item.parent.catalog_tittle}</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
            }} className={css(SeafoodItemStyle.link)} to='/production'>{props.item.name}</Link>
        </div>
    )
}

const SeafoodItem = (props) => {

    const item = Katalog.get(props.match.params.id)
    if (!item) {
        return <div>Ничего не найдено</div>
    }

    return (
        <div className={css(SeafoodItemStyle.cnt)}>
            <div className={css(SeafoodItemStyle.h124)}></div>
            <div className={css(SeafoodItemStyle.flexContainer)}>
                <div className={css(SeafoodItemStyle.fishContainer, SeafoodItemStyle.width50P)}>
                    <div className={css(SeafoodItemStyle.fishContainerFirst)}>
                        <BreadCrumbs item={item} history={props.history}/>
                        <div><img src={item.img} width='304px' height='172px'></img></div>
                        <div>Вылов: Россия, Камчатка</div>
                        <div>Производитель: “ Лазурит”</div>
                    </div>
                </div>

                <div className={css(SeafoodItemStyle.infoContainer, SeafoodItemStyle.width50P)}>

                    <div>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;<span className={css(SeafoodItemStyle.price)}><nobr>{item.price}руб/кг</nobr></span><br/>
                        {item.info}
                    </div>
                    <div>
                        <button onClick={() => {
                            AddShoppingCart(item, 1)
                        }} style={{width: '174px'}} className={css(AppStyle.buttonRed)}>В корзину
                        </button>
                    </div>
                    <div>Вес одной рыбы ~ <span className={css(SeafoodItemStyle.price)}>1,5 кг</span> <br/>
                        Стоимость одной рыбы ~ <span className={css(SeafoodItemStyle.price)}>367 руб</span><br/>
                        <span className={css(SeafoodItemStyle.hidden_text)}>вес может отличатся +/– 200гр</span>
                    </div>
                    <div>Это весовой товар, после отправки заказа мы позвоним вам и сообщим точную стоимость одной
                        рыбы<br/>
                        <span className={css(SeafoodItemStyle.hidden_text)}>Подробнее о бесплатной доставке</span>

                    </div>

                </div>

            </div>

        </div>
    )
}
const AddShoppingCart = (fish, countFish) => {
    Katalog.addShoppingCart(fish, countFish);


    alert("Добавлено в корзину: " + fish.name + " (" + countFish + " " + fish.packaging + ")");

}

export default SeafoodItem;
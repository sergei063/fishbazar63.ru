import React from 'react';

import {css} from "aphrodite/no-important";
import DeliveryStyle from "./DeliveryStyle";
import {MobileAgent} from "../../components/MobileAgent/MobileAgent";
import PouchIcon from "../../containers/PouchIcon/PouchIcon";



const Delivery = (props) => {
    let {isMinimize} = props;
    return (
        <div className={css(DeliveryStyle.cnt)}>
            <div className={css(DeliveryStyle.deliveryArea)}></div>
            <div className={css(DeliveryStyle.h1)}>Доставка</div>
            <div style={{ height:'115px'}}></div>
            <div className={css(DeliveryStyle.flexContainer)}>
                <div className={css(DeliveryStyle.imgDiv)}>
                    <img className={css(DeliveryStyle.img)} src={require('../../img/design/deliveryman/deliveryman.png')}
                          srcSet={`${require('../../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../../img/design/deliveryman/deliveryman3x.png')} 3x`}></img></div>

                <div className={css(DeliveryStyle.flexContainerInfoRow)}>
                    <div className={css(DeliveryStyle.flexContainerInfoCell)}>
                        <div className={css(DeliveryStyle.width30Percent, DeliveryStyle.columnCaption)}>Гибкое время<div >пн-вс, с 7 до 20</div></div>
                        <div className={css(DeliveryStyle.width70Percent, DeliveryStyle.columnText)}>Наш курьер доставит заказ c&nbsp;пн&nbsp;по&nbsp;вс, в&nbsp;удобное для вас время с&nbsp;7:00 до&nbsp;20:00. Мы&nbsp;перевозим морепродукты в&nbsp;холодном термобоксе, он&nbsp;защищает продукты от&nbsp;размораживания.</div>
                    </div>
                    <div className={css(DeliveryStyle.flexContainerInfoCell)}>
                        <div className={css(DeliveryStyle.width30Percent, DeliveryStyle.columnCaption)}>Способы оплаты</div>
                        <div className={css(DeliveryStyle.width70Percent, DeliveryStyle.columnText)}>Оплату принимает курьер наличными, либо безналичным переводом на&nbsp;карту.</div>
                    </div>
                    <div className={css(DeliveryStyle.flexContainerInfoCell)}>
                        <div className={css(DeliveryStyle.width30Percent, DeliveryStyle.columnCaption)}>Стоимость</div>
                        <div className={css(DeliveryStyle.width70Percent, DeliveryStyle.columnText)}>Минимальная сумма заказа <span className={css(DeliveryStyle.redText)}>600&nbsp;руб</span><br/>г. Самара&nbsp;&mdash;  <span className={css(DeliveryStyle.redText)}>150&nbsp;руб</span><br/>Сухая Самарка, Жилой район Волгарь,116км. &mdash; <span className={css(DeliveryStyle.redText)}>100&nbsp;руб</span><br/>г. Новокуйбышевск, п.Гранный&nbsp;&mdash;  <span className={css(DeliveryStyle.redText)}>70&nbsp;руб</span><br/></div>
                    </div>
                </div>


            </div>
            <div className={css(DeliveryStyle.footerDiv)} ></div>
        </div>
    );
};

export default Delivery;
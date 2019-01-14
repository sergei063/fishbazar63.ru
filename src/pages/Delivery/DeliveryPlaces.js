/*  eslint-disable no-unused-vars */
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {css} from 'aphrodite/no-important';
import DeliveryStyle from './DeliveryStyle';
/*  eslint-disable no-unused-vars */

const DeliveryPlaces = props => (
    <div className={css(DeliveryStyle.width70Percent, DeliveryStyle.columnText)}>
        <ul style={{ padding:'0px' }}>
            {props.allPlacesOfDelivery.map((p, k) => (
                <li key={k}>
                    {p.where}
                        &nbsp;&mdash;&nbsp;
                    <span className={css(DeliveryStyle.redText)}>
                        {p.price}
                            &nbsp;руб
                    </span>
                </li>
            ))}
        </ul>
            Минимальная сумма заказа&nbsp;
        <span className={css(DeliveryStyle.redText)}>
            {props.appConfig.minimumOrderAmount}
                &nbsp;руб
        </span>{' '}
        <br/>
    </div>
);

const mapStateToProps = state => ({
    allPlacesOfDelivery: state.allPlacesOfDelivery,
    appConfig: state.appConfig,
});

export default connect(mapStateToProps)(DeliveryPlaces);

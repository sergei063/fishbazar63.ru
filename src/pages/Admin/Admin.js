import React from 'react';

import {css} from "aphrodite/no-important";
import DeliveryStyle from "../Delivery/DeliveryStyle";
import InputTextBox from "../../components/InputTextBox/InputTextBox";
import AppStyle from "../../css/AppStyle";
import config from "../../config";
import axios from "axios/index";


const Admin = (props) => {
    const loginRef = React.createRef();
    const passRef = React.createRef();
    let {isMinimize} = props;
    const token = localStorage.getItem('auth_token');

    return (
        <div className={css(DeliveryStyle.cnt)}>
            <div className={css(DeliveryStyle.deliveryArea)}></div>
            <div className={css(DeliveryStyle.h1)}>Администрирование</div>
            <div style={{height: '115px'}}></div>
            <div className={css(DeliveryStyle.flexContainer)}>
                <div className={css(DeliveryStyle.imgDiv)}>
                    <img className={css(DeliveryStyle.img)}
                         src={require('../../img/design/deliveryman/deliveryman.png')}
                         srcSet={`${require('../../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../../img/design/deliveryman/deliveryman3x.png')} 3x`}></img>
                </div>

                {(!token) &&<div>
                    <div>Логин <InputTextBox ref={loginRef} placeholder={'Логин'}/></div>
                    <br/>
                    <div>Пароль <InputTextBox ref={passRef} placeholder={'Пароль'}/></div>
                    <br/>
                     <button onClick={() => {
                        localStorage.removeItem("auth_token");
                        let login = loginRef.current.wrappedInstance.getValue();
                        let pass = passRef.current.wrappedInstance.getValue();
                        if (!login || !pass)
                            return;

                        axios.post(`${config.serverAPI}/sign`, {
                            user: {login: login, pass: pass}
                        }).then(function (response) {


                            if (response.data.auth_token) {
                                localStorage.setItem('auth_token', response.data.auth_token);
                                props.history.push({pathname: `/`})
                            }

                            /* axios.post(`${config.serverAPI}/test`, {
                                 auth_token: localStorage.getItem('auth_token')
                             }).then(function (response) {
                                 console.log(response);
                             }).catch(function (error) {
                                 console.log(error);
                             });*/


                        }).catch(function (error) {

                        });

                    }} style={{width: '174px'}} className={css(AppStyle.buttonRed)}>Войти</button>


                </div>}

                {(token) &&<div>
                     <button onClick={() => {
                        localStorage.removeItem("auth_token");
                        props.history.push({pathname: `/`})
                    }} style={{width: '174px'}} className={css(AppStyle.buttonRed)}>Выход</button>

                </div>}


            </div>
            <div className={css(DeliveryStyle.footerDiv)}></div>
        </div>
    );
};

export default Admin;
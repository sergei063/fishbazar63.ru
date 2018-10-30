/*  eslint global-require: "error"    */
import React from 'react';

import {css} from 'aphrodite/no-important';
import axios from 'axios/index';
import DeliveryStyle from '../Delivery/DeliveryStyle';

import AppStyle from '../../css/AppStyle';
import config from '../../config';
/*  eslint-disable no-unused-vars */
import InputTextBox from '../../components/InputTextBox/InputTextBox';
/*  eslint-enable no-unused-vars  */

const Admin = (props) => {
  const loginRef = React.createRef();
  const passRef = React.createRef();
  const token = localStorage.getItem('auth_token');

  /* eslint-disable global-require */
  return (
    <div className={css(DeliveryStyle.cnt)}>
      <div className={css(DeliveryStyle.deliveryArea)} />
      <div className={css(DeliveryStyle.h1)}>Администрирование</div>
      <div style={{ height: '115px' }} />
      <div className={css(DeliveryStyle.flexContainer)}>
        <div className={css(DeliveryStyle.imgDiv)}>
          <img
            className={css(DeliveryStyle.img)}
            src={require('../../img/design/deliveryman/deliveryman.png')}
            srcSet={`${require('../../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../../img/design/deliveryman/deliveryman3x.png')} 3x`}
          />
        </div>

        {!token && (
          <div>
            <div>
              Логин <InputTextBox ref={loginRef} placeholder={'Логин'} />
            </div>
            <br />
            <div>
              Пароль <InputTextBox ref={passRef} placeholder={'Пароль'} />
            </div>
            <br />
            <button
              onClick={() => {
                localStorage.removeItem('auth_token');
                const login = loginRef.current.wrappedInstance.getValue();
                const pass = passRef.current.wrappedInstance.getValue();
                if (!login || !pass) return;

                axios
                  .post(`${config.serverAPI}/sign`, {
                    user: { login, pass },
                  })
                  .then((response) => {
                    if (response.data.auth_token) {
                      localStorage.setItem(
                        'auth_token',
                        response.data.auth_token,
                      );
                      props.history.push({ pathname: '/' });
                    }

                    /* axios.post(`${config.serverAPI}/test`, {
                                 auth_token: localStorage.getItem('auth_token')
                             }).then(function (response) {
                                 console.log(response);
                             }).catch(function (error) {
                                 console.log(error);
                             }); */
                  })
                  .catch(() => {});
              }}
              style={{ width: '174px' }}
              className={css(AppStyle.buttonRed)}
            >
              Войти
            </button>
          </div>
        )}

        {token && (
          <div>
            <button
              onClick={() => {
                localStorage.removeItem('auth_token');
                props.history.push({ pathname: '/' });
              }}
              style={{ width: '174px' }}
              className={css(AppStyle.buttonRed)}
            >
              Выход
            </button>
          </div>
        )}
      </div>
      <div className={css(DeliveryStyle.footerDiv)} />
    </div>
  );
  /* eslint-disable global-require */
};

export default Admin;

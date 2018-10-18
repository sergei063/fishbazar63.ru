import React from 'react';

import {Link} from 'react-router-dom';
import {css} from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';
import HeaderStyle from './css/HeaderStyle';
import $ from 'jquery';
import HeaderSales from "./components/HeaderSales";

const mobileMenuClick = (event) => {
  if (event) event.preventDefault();

  if ($('#menu_inline_ul').hasClass(css(HeaderStyle.menuInlineUl))) {
    //  show
    //  alert("show");
    showMobileMenu();
  } else {
    //  hide
    //  alert("hide");
    hideMobileMenu();
  }
};

const showMobileMenu = () => {
  $('#menu_inline_ul').removeClass(css(HeaderStyle.menuInlineUl));
  $('#menu_inline_ul').addClass(css(HeaderStyle.menuInlineUlBlock));

  $('#header_pouch_mobile_menu_close_span').removeClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );
  $('#header_pouch_mobile_menu_close_span').addClass(
    css(HeaderStyle.mobileMenuBtn),
  );

  $('#header_pouch_mobile_menu_span').removeClass(
    css(HeaderStyle.mobileMenuBtn),
  );
  $('#header_pouch_mobile_menu_span').addClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );

  $('#header_pouch_mobile_menu_cnt').addClass(
    css(HeaderStyle.floatMenuBlockWidthMobile),
  );
};

const hideMobileMenu = () => {
  $('#menu_inline_ul').addClass(css(HeaderStyle.menuInlineUl));
  $('#header_pouch_mobile_menu_close_span').addClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );
  $('#header_pouch_mobile_menu_close_span').removeClass(
    css(HeaderStyle.mobileMenuBtn),
  );

  $('#header_pouch_mobile_menu_cnt').removeClass(
    css(HeaderStyle.floatMenuBlockWidthMobile),
  );
  $('#header_pouch_mobile_menu_span').removeClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );
  $('#header_pouch_mobile_menu_span').addClass(css(HeaderStyle.mobileMenuBtn));
  $('#menu_inline_ul').removeClass(css(HeaderStyle.menuInlineUlBlock));
};
class Header extends React.Component {
  state = {
    isMobile: this.props.isMobile.any(),
    showSales: false,
  };

  render() {
    return (
      <header>
        <nav>
          <div
            id="header_pouch_mobile_menu_cnt"
            className={css(
              AppStyle.zI99999,
              HeaderStyle.floatMenuBlock,
              HeaderStyle.floatMenuBlockWidth,
              HeaderStyle.nav_urls,
            )}
          >
            <div
              id="header_pouch_mobile_menu_close_span"
              className={
                css(HeaderStyle.mobileMenuBtn) +
                ' ' +
                css(HeaderStyle.mobileMenuBtnHidden)
              }
            >
              <a
                id="header_pouch_mobile_menu_close"
                onClick={mobileMenuClick}
                className={css(HeaderStyle.pouchMobileMenuClose)}
                href="#"
              />
              <div>
                <div style={{ margin: '0 auto', width: '130px' }}>
                  <Link onClick={hideMobileMenu} to="/">
                    <img
                      className={css()}
                      src={require('./img/design/logo/logo_short.png')}
                      width="130px"
                      height="34px"
                    />
                  </Link>
                </div>
              </div>
              <br />
              <br />
            </div>
            <span
              id="header_pouch_mobile_menu_span"
              className={
                css(HeaderStyle.mobileMenuBtn) +
                ' ' +
                css(HeaderStyle.mobileMenuMarginLeft60)
              }
            >
              <a
                id="header_pouch_mobile_menu"
                onClick={mobileMenuClick}
                className={css(HeaderStyle.pouchMobileMenu)}
                href="#"
              />
              <br />
              <br />
            </span>
            {/*<span className={css(HeaderStyle.mobileMenuBtn, AppStyle.paddingLeft10)}>
                            <a id="header_pouch_phone_menu"
                               className={(this.state.isMobile) ? css(HeaderStyle.pouchPhoneMenu) : css(HeaderStyle.pouchPhoneMenu)}
                               href='tel:+79171682771'></a>
                            <br/>
                            <br/>
                        </span>*/}

            <ul id="menu_inline_ul" className={css(HeaderStyle.menuInlineUl)}>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/production">
                  Рыба&nbsp;и&nbsp;морепродукты
                </Link>
              </li>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/blog">
                  Рецепты
                </Link>
              </li>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/delivery">
                  Доставка
                </Link>
              </li>
              <li
                className={css(AppStyle.menu_inline, AppStyle.menu_inline_logo)}
              >
                <Link onClick={hideMobileMenu} to="/">
                  {' '}
                  <img
                    src={require('./img/logo_full.png')}
                    width="152px"
                    height="99px"
                  />
                </Link>
              </li>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/quality_assurance">
                  Гарантия качества
                </Link>
              </li>
              <li
                className={css(AppStyle.menu_inline, AppStyle.menu_inline_tel)}
              >
                <a href="tel:+79171682771">
                  <nobr>8 (917) 168 27 71</nobr>
                </a>
              </li>
            </ul>
          </div>

          <div
            className={css(
              AppStyle.zI1,
              HeaderStyle.floatMenuBlockTablet,
              HeaderStyle.nav_urls,
            )}
          >
            <ul className={css(HeaderStyle.menuInlineUlTablet)}>
              <li className={css(AppStyle.menu_inline, HeaderStyle.logo)}>
                <Link onClick={hideMobileMenu} to="/">
                  <img
                    className={css(HeaderStyle.menuLogoFull)}
                    src={require('./img/design/logo/logo_full.png')}
                    width="152px"
                    height="99px"
                  />
                  <img
                    className={css(HeaderStyle.menuLogoShort)}
                    src={require('./img/design/logo/logo_short.png')}
                    width="130px"
                    height="34px"
                  />
                </Link>
              </li>
              <li
                style={{ marginRight: '20px' }}
                className={css(
                  AppStyle.menu_inline,
                  AppStyle.menu_inline_tel,
                  AppStyle.menu_inline_tel_hidden,
                )}
              >
                <a href="tel:+79171682771">
                  <nobr>8 (917) 168 27 71</nobr>
                </a>
              </li>
            </ul>
          </div>
          <HeaderSales/>
        </nav>
      </header>
    );
  }
}

export default Header;
